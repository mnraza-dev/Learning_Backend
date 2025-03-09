import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(null);
  const [city, setCity] = useState("");

  async function handleSubmit() {
    axios
      .post("http://localhost:3000", { username, age, city })
      .then((res) => {
        console.log(res?.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setUsername("");
        setAge(0);
        setCity("");
      });
  }

  useEffect(() => {
    handleSubmit();
  }, []);

  // async function getRes() {
  //   axios.get("http://localhost:3000");
  // }

  return (
    <div className="App">
   
        <input
          placeholder="username"
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          placeholder="Age"
          type="number"
          name="age"
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <input
          placeholder="City"
          type="text"
          name="city"
          onChange={(e) => setCity(e.target.value)}
        />
        <br />
        <button onClick={handleSubmit} type="button">Send Request</button>
  
     
    </div>
  );
};

export default App;
