import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
const inter = Inter({ subsets: ["latin"] });

import React, { useState, useEffect } from "react";
import userDatas from "./onlyGetUserData";

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState("");
  const [name, setName] = useState("");
  const [isChecked, setIsChecked] = useState(null);

  const user = userDatas();
  const userArray = user?.data;
  const lastIndesk = userArray?.length - 1;
  const recentUser = userArray?.[lastIndesk];

  console.log(recentUser);

  useEffect(() => {
    fetch("/api/allSectors")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const selectedItem = (e) => {
    const data = e.target.value;
    const newData = data.trim();
    setSelected(newData);
  };

  const nameCollection = (e) => {
    setName(e.target.value);
  };

  const checkboxValue = (e) => {
    setIsChecked(e.target.checked);
  };

  const getDataObject = {
    myName: name,
    mySector: selected,
    Checkbox: isChecked,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/sendData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(getDataObject),
      });
      const jsonData = await response.json();
      console.log(jsonData);
      alert(
        "Congratulations!!! Your submission was successfully saved in the database. "
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto">
        <br />
        <br />
        <br />

        <div className=" grid sm:grid-cols-2 gap-4">
          <div className="p-3">
            <h2 className="text-3xl font-normal">
              Please enter your name and pick the sector you are currently
              involved in
            </h2>
            <br />
            <form onSubmit={handleSubmit}>
              <div className="flex">
                <label className="flex-none font-bold" htmlFor="nameField">
                  Name
                </label>
                <input
                  className="grow ml-3 p-1 border border-black w-9/12"
                  type="text"
                  id="nameField"
                  placeholder="Ex: Judy Brown"
                  required
                  onChange={nameCollection}
                />
              </div>
              <br />
              <label className="font-bold" htmlFor="set">
                Please select your sector from the below options
              </label>
              <select
                multiple=""
                size="12"
                className="p-1 border border-black w-full m-0"
                onChange={selectedItem}
                required
              >
                {data?.data?.map((item) => (
                  <optgroup item={item} key={item._id} label={item.partname}>
                    {item.dataArray.map((rowData) => (
                      <option key={rowData} value={rowData}>
                        {rowData}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
              <br />
              <br />
              <input type="checkbox" onClick={checkboxValue} required /> Agree
              to terms
              <br />
              <br />
              <div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded-full"
                  type="submit"
                >
                  Save
                </button>
                <button
                  className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-6 rounded-full"
                  type="reset"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>

          <div className="p-3">
            <h2 className="text-3xl font-normal">
              Refill the form using stored data Section
            </h2>
            <br />
            <label className="flex-none font-bold" htmlFor="nameField2">
              Name
            </label>
            <input
              className="grow ml-3 p-1 border border-black w-10/12"
              type="text"
              id="nameField2"
              value={recentUser?.myName}
              required
            />
            <br />
            <br />
            <label className="flex-none font-bold" htmlFor="sectorField">
              Sector
            </label>
            <input
              className="grow ml-3 p-1 border border-black w-10/12"
              type="text"
              id="sectorField"
              value={recentUser?.mySector}
              required
            />
            <br />
            <br />
            <label className="flex-none font-bold" htmlFor="IdField">
              ID NO
            </label>
            <input
              className="grow ml-3 p-1 border border-black w-10/12"
              type="text"
              id="IdField"
              value={recentUser?._id}
              required
              onChange={nameCollection}
            />
            <br />
            <br />
            <span className="mr-6 font-bold">Agree to terms :</span>{" "}
            <span>{recentUser && "YES"}</span>
            <br />
            <br />
            <p>
              I am done this assignment with 100% honesty without anyone's help
              except Google and ChatGPT. I know This is not the optimum solution
              to this problem, but I was trying my best in minimal time.{" "}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
