import React, { useState } from "react";

const Contact = () => {
  // const [name, setname] = useState("");
  // const [password, setpassword] = useState("");

  const [input, setinput] = useState({});

  const [data, setdata] = useState([
    {
      name: "garvit",
      password: "123",
    },
    {
      name: "ram",
      password: "123",
    },
  ]);

  function handle(e) {
    setinput({ ...input, [e.target.name]: e.target.value });
  }

  function add() {
    setdata([...data, input]);
  }

  return (
    <div>
      {/* <input type="text" onChange={(e) => setname(e.target.value)} />
      <input type="text" onChange={(e) => setpassword(e.target.value)} />
      <button onClick={add}>add</button> */}

      <input type="text" name="name" onChange={handle} />
      <input type="text" name="password" onChange={handle} />
      <button onClick={add}>add</button>

      {data.map((val, index) => {
        return (
          <>
            <h1>{val.name}</h1>
            <h1>{val.password}</h1>
          </>
        );
      })}
    </div>
  );
};

export default Contact;
