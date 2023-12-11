import { NavLink } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { LuListMinus } from "react-icons/lu";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/booking">Booking Now</NavLink>
      </li>
      <li>
        <NavLink to="/ourTeam">Our Team</NavLink>
      </li>
      <li>
        <NavLink to="/about">About US</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar sticky top-0 right-0 bg-teal-800 px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <LuListMinus className="text-xl" />
          </label>
          <ul
            tabIndex={0}
            className="menu text-white menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <img
          className="w-52 rounded"
          src="https://i.ibb.co/fQbNs1p/port.png"
          alt=""
        />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-white menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn bg-yellow-300 border-none">
          <FaDownload></FaDownload>RESUME
        </button>
      </div>
    </div>
  );
};

export default Navbar;
