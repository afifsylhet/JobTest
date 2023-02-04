import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const sectorData = {
    Manufacturing: [
      "Construction materials",
      "Electronics and Optics",
      {
        "Food and Beverage": [
          "Bakery & confectionery products",
          "Beverages",
          "Fish & fish products",
          "Meat & meat products",
          "Milk & dairy products",
          "Other",
          "Sweets & snack food",
        ],
      },
      {
        Furniture: [
          "Bathroom/sauna",
          "Bedroom",
          " Children's room",
          " Kitchen",
          " Living room",
          "Office",
          "Other (Furniture)",
          "Outdoor",
          "Project furniture",
        ],
      },
      {
        Machinery: [
          "Machinery components",
          "Machinery equipment or tools",
          " Manufacture of machinery",
          {
            Maritime: [
              " Aluminum and steel workboats",
              "Boat/Yacht building",
              " Ship repair and conversion",
            ],
          },
          "Metal structures",
          " Other",
          " Repair and maintenance service",
        ],
      },
      {
        Metalworking: [
          "Construction of metal structures",
          "Houses and buildings",
          "Metal products",
          {
            Metalworks: [
              "CNC-machining",
              "Forgings, Fasteners",
              "Gas, Plasma, Laser cutting",
              "MIG, TIG, Aluminum welding",
            ],
          },
        ],
      },
      {
        "Plastic and Rubber": [
          "Packaging",
          "Plastic goods",
          {
            "Plastic processing technology": [
              " Blowing",
              " Molding",
              "Plastics welding and processing",
            ],
          },
          "Plastic profiles",
        ],
      },
      {
        Printing: [
          "Advertising",
          "Book/Periodicals printing",
          "Labeling and packaging printing",
        ],
      },
      {
        "Textile and Clothing": ["Clothing", "Textile"],
      },
      {
        Wood: ["Other Wood", "Wooden building materials", "Wooden houses"],
      },
    ],
    Other: ["Creative industries", "Energy technology", "Environment"],
    Service: [
      "Business services",
      "Engineering",
      {
        "Information Technology and Telecommunications": [
          "Data processing, Web portals, E-marketing",
          "Programming, Consultancy",
          "Software, Hardware",
          "Telecommunications",
        ],
      },
      "Tourism",
      "Translation services",
      {
        "Transport and Logistics": ["Air", "Rail", "Road", "Water"],
      },
    ],
  };

  const mainKeyOfTheObject = [];
  const subObject = [];
  let secondPersonData = [];
  let thirdPersonData = [];
  let fourthPersonData = [];
  let fifthPersonData = [];

  for (const key in sectorData) {
    const value = key;
    mainKeyOfTheObject.push(value);
    subObject.push(sectorData[key]);
  }

  for (const value of subObject) {
    for (const main of value) {
      if (typeof main === "string") {
        secondPersonData.push(main);
      } else if (typeof main !== "string") {
        const objectKey = Object.keys(main)[0];
        thirdPersonData.push(objectKey);
        fourthPersonData = Object.values(main);
      }
      if (fourthPersonData) {
        for (const lastValue of fourthPersonData) {
          fifthPersonData.push(lastValue);
        }
      }
    }
  }

  const mainKeyOfTheObject = [];
  const subObject = [];
  let secondPersonData = [];
  let thirdPersonData = [];
  let fourthPersonData = [];

  for (const key in sectorData) {
    const value = key;
    mainKeyOfTheObject.push(value);
    subObject.push(sectorData[key]);
  }

  for (const value of subObject) {
    for (const main of value) {
      if (typeof main === "string") {
        secondPersonData.push(main);
      } else if (typeof main !== "string") {
        secondPersonData.push(Object.keys(main)[0]);
        if (typeof Object.keys(main)[0] === "string") {
          thirdPersonData.push(Object.keys(main)[0]);
        } else if (typeof Object.keys(main)[0] !== "string") {
          thirdPersonData.push(Object.keys(main)[0]);
          if (thirdPersonData) {
            fourthPersonData.push(Object.values(thirdPersonData));
          }
        }
      }
    }
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello Bangladesh</h1>
      </main>
    </>
  );
}
