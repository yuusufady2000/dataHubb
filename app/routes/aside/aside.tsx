import { NavLink } from "react-router";
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
  
  
} from "react-icons/fa";

import { useState } from "react";

const AsidePage = () => {
  const base =
    "flex items-center gap-3 text-gray-800 px-5 py-3 rounded-lg transition hover:bg-yellow-200 hover:text-blue-600 text-[15px]";
  const active =
    "flex items-center gap-3 bg-yellow-300 text-blue-700 px-5 py-3 rounded-lg font-semibold shadow-sm text-[15px]";

  return (
    <aside className="bg-gray-100 min-h-screen w-64 p-6 flex flex-col justify-between  shadow-lg border-r border-gray-300">
      <div>
        <h1 className="text-2xl font-bold text-blue-700 text-center mb-8 tracking-wide">
          DataHub
        </h1>

        <nav className="flex flex-col gap-4">
          <NavLink className={({ isActive }) => (isActive ? active : base)} to="/">
            <FaTachometerAlt /> Dashboard
          </NavLink>

          <NavLink className={({ isActive }) => (isActive ? active : base)} to="/dataPage">
            <FaDatabase /> Buy Data
          </NavLink>

          <NavLink className={({ isActive }) => (isActive ? active : base)} to="/airtimePage">
            <FaMobileAlt /> Buy Airtime
          </NavLink>

          <NavLink className={({ isActive }) => (isActive ? active : base)} to="/nepabill">
            <FaMoneyBill /> Bill Payment
          </NavLink>

          <NavLink className={({ isActive }) => (isActive ? active : base)} to="/tvsub">
            <FaTv /> TV Subscription
          </NavLink>

          <NavLink className={({ isActive }) => (isActive ? active : base)} to="/wallet">
            <FaWallet /> Fund Wallet
          </NavLink>

          <NavLink className={({ isActive }) => (isActive ? active : base)} to="/pricingpage">
            <FaTags /> Pricing
          </NavLink>

          <NavLink className={({ isActive }) => (isActive ? active : base)} to="/pinChange">
            <FaLock /> Change Pin
          </NavLink>

          <NavLink className={({ isActive }) => (isActive ? active : base)} to="/account">
            <FaUser /> Account
          </NavLink>
        <a
          className="flex items-center gap-3 text-red-700 px-5 py-3 rounded-lg hover:bg-red-100 hover:text-red-800 transition font-semibold text-[15px]"
          href="./loginPage"
        >
          <FaSignOutAlt /> Logout
        </a>
        </nav>
      </div>

     
    </aside>
  );
};

export default AsidePage;
