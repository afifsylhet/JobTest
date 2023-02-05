import React, { useState, useEffect } from "react";

export default function UserDatas() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("/api/allUser")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, [user]);

  return user;
}
