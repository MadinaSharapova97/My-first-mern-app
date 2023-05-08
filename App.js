import React from "react"
import Navbar from "./components/Navbar"
import Main from "./pages/Main";
import AddBook from "./pages/AddBook";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import UpdateBook from "./pages/UpdateBook";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container" >
        <div className="raw" >
          <div className="col-lg offset-lg-2" >
            <Routes>
              <Route path="/" exact element={<Main />} />
              <Route path="/add" element={<AddBook />} />
              <Route path="/update/:id" element={<UpdateBook />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
