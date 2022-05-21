import "./Styles/App.css";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import List from "./Pages/List";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="List" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
