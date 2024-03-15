import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayouts = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, title, type } = props;
  // Untuk dark mode menggunakan createContext
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  return (
    <div
      className={`flex justify-center min-h-screen items-center ${
        isDarkMode && "bg-slate-800"
      }`}
    >
      <div className="w-full max-w-xs">
        <button
          className="absolute top-5 right-5 bg-blue-600 text-white rounded p-2"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "light" : "dark"}
        </button>

        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Plaese enter your details
        </p>

        {children}
        {/* <Navigation type={type} /> */}
        <p className="text-sm mt-5 text-center">
          {type === "login"
            ? "Don't have an account? "
            : "Already have an account? "}
          &nbsp;&nbsp;
          {type === "login" && (
            <Link to="/register" className="font-bold text-blue-600">
              Register
            </Link>
          )}
          {type === "register" && (
            <Link to="/login" className="font-bold text-blue-600">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

// bisa juga menggunakan if else
// eslint-disable-next-line react/prop-types
// const Navigation = ({ type }) => {
//   if (type === "login") {
//     return (
//       <p className="text-sm mt-3 text-center">
//         Don't have an account?
//         <Link to="/register" className="font-bold text-blue-600">
//           Register
//         </Link>
//       </p>
//     );
//   } else {
//     return (
//       <p className="text-sm mt-3 text-center">
//         Already have an account?
//         <Link to="/login" className="font-bold text-blue-600">
//           Login
//         </Link>
//       </p>
//     );
//   }
// };

export default AuthLayouts;
