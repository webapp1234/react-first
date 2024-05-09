import React, { useState } from "react";

const About = () => {
  let [count, setcount] = useState(0);

  function increase() {
    setcount(count + 1);
  }

  function descrease() {
    setcount(count - 1);
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={increase}>increase</button>
      <button onClick={descrease}>descrease</button>
    </>
  );
};

export default About;
