import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-300 rounded-lg">
        <div className="flex-1">
          <NavLink to={'/'} className={ ({isActive}) => `btn btn-ghost normal-case text-xl ${isActive ? 'text-red-500': ''}`}>ASOCIACIONES</NavLink>
        </div>
        <div className="flex-1">
          <NavLink to={'/marvel'}  className={ ({isActive}) => `btn btn-ghost normal-case text-xl  ${isActive ? 'text-red-500': ''}`}>MARVEL</NavLink>
        </div>
        <div className="flex-1">
          <NavLink to={'/dc'} className={ ({isActive}) => `btn btn-ghost normal-case text-xl  ${isActive ? 'text-red-500': ''}`}>DC COMICS</NavLink>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://i.pinimg.com/564x/01/aa/8d/01aa8d7b452ce1cf1a4d01d3f93157fa.jpg" />
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
                <NavLink to={'/login'}>Logout</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Navbar;
