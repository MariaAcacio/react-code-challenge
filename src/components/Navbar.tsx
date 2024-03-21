import { Link, NavLink } from "react-router-dom";
import { menuOptions } from "../data/menu";

function Navbar() {
  return (
    <nav className="bg-blue-3 py-4 px-6 flex items-center justify-between">
      <div>
        <Link to="/instructions">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
            alt="Pokemon Logo"
            width="100"
            className="cursor-pointer w-14 md:w-32 "
          />
        </Link>
      </div>
      <ul className="flex">
        {menuOptions.map((option, index) => (
          <li key={index} className="ml-4">
            <NavLink
              className="text-gray-300 hover:text-blue-500 font-bold text-[12px] md:text-lg"
              to={option.path}
            >
              {option.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
