import { NavLink } from "react-router";
import { useState } from "react";
import {
  FaTachometerAlt,
  FaDatabase,
  FaMobileAlt,
  FaTv,
  FaWallet,
  FaMoneyBill,
  FaLock,
  FaUser,
  FaTags,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

const HeaderPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { to: "/", icon: <FaTachometerAlt />, label: "Dashboard" },
    { to: "/dataPage", icon: <FaDatabase />, label: "Buy Data" },
    { to: "/airtimePage", icon: <FaMobileAlt />, label: "Buy Airtime" },
    { to: "/nepabill", icon: <FaMoneyBill />, label: "Bill Payment" },
    { to: "/tvsub", icon: <FaTv />, label: "TV Subscription" },
    { to: "/wallet", icon: <FaWallet />, label: "Fund Wallet" },
    { to: "/pricingpage", icon: <FaTags />, label: "Pricing" },
    { to: "/pinChange", icon: <FaLock />, label: "Change Pin" },
    { to: "/account", icon: <FaUser />, label: "Account" },
    {to:"./loginPage", icon:<IoLogOut/>, label:"Logout", isLogout: true }
  ];

  return (
    <>
     
      <header className="bg-yellow-500 fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between shadow-md">
        <div className="text-2xl font-bold text-blue-900 tracking-wider hover:text-blue-700 transition">
          <NavLink to="/">DataHub</NavLink>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <NavLink
            to="/loginPage"
            className="flex items-center gap-2 text-red-700 hover:text-red-800 font-semibold transition"
          >
            <IoLogOut className="text-2xl" /> Logout
          </NavLink>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-blue-700 text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-40 
        ${menuOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:w-64 md:pt-20 pt-24`}
      >
        <nav className="flex flex-col h-full overflow-y-auto px-4 py-6 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
             className={`flex items-center gap-3 px-4 py-3 rounded-lg text-[15px] font-medium transition
        ${
          item.isLogout
            ? "text-red-700 hover:bg-red-100 hover:text-red-800 font-semibold "
            : "text-gray-700 hover:bg-yellow-100 hover:text-blue-700"
        }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}

        
        </nav>
      </aside>

     
      <div className="pt-16 md:pl-64"></div>
    </>
  );
};

export default HeaderPage;
