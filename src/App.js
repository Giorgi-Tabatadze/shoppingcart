/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./home/home";
import ShopPage from "./shop/shop";

function App() {
  return (
    <BrowserRouter>
      <Link to="/">
        <button type="button">Home</button>
      </Link>
      <Link to="/shop">
        <button type="button"> Shop </button>
      </Link>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
