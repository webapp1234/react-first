import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  let arr = [
    {
      id: 1,
      name: "garvit",
      age: 18,
    },
    {
      id: 2,
      name: "user",
      age: 18,
    },
    {
      id: 3,
      name: "demo",
      age: 18,
    },
  ];

  return (
    <div>
      {arr.map((val, index) => {
        return (
          <>
            <h1>{val.id}</h1>
            <h1>{val.name}</h1>

            <Link to={`${val.id}`}>View</Link>
          </>
        );
      })}
    </div>
  );
};

export default Home;
