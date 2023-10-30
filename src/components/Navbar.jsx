import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  console.log(user);

  return (
    <nav className="bg-zinc-700 m-3 flex justify-between py-5 px-10 rounded-lg">
      <Link to="/">
        <h1 className="text-2xl font-bold">Estela Train</h1>
      </Link>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li>Bienvenid@ {user.name}</li>
            <li>
              <Link to="/journeys" className="bg-indigo-500 px-4 py-1 rounded-sm">Viajes</Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/Login" className="bg-indigo-500 px-4 py-1 rounded-sm">Login</Link>
            </li>
            <li>
              <Link to="/Register" className="bg-indigo-500 px-4 py-1 rounded-sm">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
