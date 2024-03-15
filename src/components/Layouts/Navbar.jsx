import { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elemtnts/Button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const Navbar = () => {
  const username = useLogin();
  // Untuk dark mode menggunakan createContext
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    // localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-end h-16 bg-blue-600 text-white items-center px-10">
      <Link to="/profile" className="text-xl">
        {username}
      </Link>
      <Button classname="ml-5 bg-black" onClick={handleLogout}>
        Logout
      </Button>
      <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5 mr-5">
        {totalCart}
      </div>
      <Button
        className="bg-black text-white rounded px-10 mx-5"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "light" : "dark"}
      </Button>
    </div>
  );
};

export default Navbar;
