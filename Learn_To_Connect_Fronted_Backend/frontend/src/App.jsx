import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);
  const [city, setCity] = useState("");

  async function getRes() {
    axios.post("http://localhost:3000/tea", { username, age, city });
  }

  return (
    <div className="App">
      <form onSubmit={getRes}>
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
        <button type="submit">Send Request</button>
      </form>
    </div>
  );
};

export default App;
