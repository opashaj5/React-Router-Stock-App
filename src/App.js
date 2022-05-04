import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Stock from "./pages/Stock";
import Stocks from "./pages/Dashboard";
import './App.css';
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/stocks" element={<Stocks />}></Route>
        <Route path="/stocks/:symbol" element={<Stock />}></Route>
      </Routes>
    </div>
  );
};