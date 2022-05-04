import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Stock from './pages/Stock.js';
import Dashboard from "./pages/Dashboard.js";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks/:symbol" element={<Stock />} />
        <Route path="/stocks" element={<Dashboard />} />
      </Routes>
    </div>
  );
}