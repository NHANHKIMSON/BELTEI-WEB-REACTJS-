import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (

    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/img/Logo.png" className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            BELTEI IU
          </span>
        </a>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <button
            onClick={toggleDarkMode}
            className="p-2 text-sm bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <FaSun className="text-yellow-400" size={20} />
            ) : (
              <FaMoon className="text-gray-600 dark:text-white" size={20} />
            )}
          </button>
          <a href="/login" className="text-sm text-blue-600 dark:text-blue-500 hover:underline">
            Login
          </a>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;



