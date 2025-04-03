import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
             </Routes>
        </BrowserRouter>
      </div>

      <Footer />
    </>
  );
};

export default App;
