import React, {  useEffect } from "react";

const App = () => {

  const handleRequestAPI = async () => {
    const response = await fetch("http://localhost:3000/");
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    handleRequestAPI();
  }, []);


  return (
    <div>
      <button onClick={handleRequestAPI}>Send Request</button>
    </div>
  );
};

export default App;
