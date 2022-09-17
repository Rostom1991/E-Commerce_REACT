import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useContext } from "react";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import SignUp from "./pages/SignUp";
import { AuthContext } from "./context/AuthContext";
import Headphones from "./pages/Headphones";
import Earphones from "./pages/Earphones";
import Speakers from "./pages/Speakers";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={user ? <Order /> : <SignUp />} />

        <Route path="/products" element={<Products />} />
        <Route path="/products/headphones" element={<Headphones />} />
        <Route path="/products/earphones" element={<Earphones />} />
        <Route path="/products/speakers" element={<Speakers />} />

        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
