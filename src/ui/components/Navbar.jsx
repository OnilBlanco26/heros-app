import { NavLink, useNavigate } from "react-router-dom";
import SearchPage from "../../heroes/components/SearchPage";

const Navbar = () => {
  const navigate = useNavigate();

  

  const handleLogout = () => {
    navigate("/marvel", {
      replace: true,
    });
  };

  return (
    <div>
      <div className="navbar justify-between bg-base-300 rounded-lg ">
        {/* <div className="hidden xxs:block flex-1">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `btn btn-ghost normal-case text-sm md:text-xl ${
                isActive ? "text-warning" : ""
              }`
            }
          >
            ASOCIACIONES
          </NavLink>
        </div> */}
        <div className="hidden xxs:block flex-1">
          <NavLink
            to={"/marvel"}
            className={({ isActive }) =>
              `btn btn-ghost normal-case text-sm md:text-xl ${
                isActive ? "text-warning  " : ""
              }`
            }
          >
            MARVEL
          </NavLink>
        </div>
        <div className="hidden xxs:block flex-1">
          <NavLink
            to={"/dc"}
            className={({ isActive }) =>
              `btn btn-ghost normal-case text-sm md:text-xl  ${
                isActive ? "text-warning" : ""
              }`
            }
          >
            DC COMICS
          </NavLink>
        </div>
        <div className="xxs:hidden dropdown dropdown-bottom">
          <label tabIndex={0} className="btn m-1">
            Click
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `btn btn-ghost normal-case text-sm md:text-xl ${
                    isActive ? "text-warning" : ""
                  }`
                }
              >
                ASOCIACIONES
              </NavLink>
            </li> */}
            <li>
              <NavLink
              exact
                to={"/marvel"}
                className={({ isActive }) =>
                  `btn btn-ghost normal-case text-sm md:text-xl ${
                    isActive ? "text-warning  " : ""
                  }`
                }
              >
                MARVEL
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dc"}
                className={({ isActive }) =>
                  `btn btn-ghost normal-case text-sm md:text-xl  ${
                    isActive ? "text-warning" : ""
                  }`
                }
              >
                DC COMICS
              </NavLink>
              F
            </li>
          </ul>
        </div>
        <div className="flex-none gap-2">
              <SearchPage />
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="assets/profile.png" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <NavLink onClick={handleLogout} to={"/login"}>
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
