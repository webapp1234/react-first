import React from "react";
import { useParams } from "react-router-dom";

const Productdeti = () => {
  let { id } = useParams();

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
  let result = arr.filter((val) => val.id == id);
  console.log(result);

  return (
    <div>
      <h1>{result[0].name}</h1>
      <h1>{result[0].age}</h1>
    </div>
  );
};

export default Productdeti;
