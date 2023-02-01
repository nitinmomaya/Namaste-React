// navbar
import { Link } from "react-router-dom";
import useOnline from "../utlis.js/useOnline";
const Navbar = () => {
  const isOnline = useOnline();
  return (
    <div className="container">
      <div className="left">FoodWallah</div>

      <div className="right">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>Restaurants</li>
          <Link to="/about">
            <li>About</li>
          </Link>

          <Link to="/instamart">
            <li>Instamart</li>
          </Link>

          <Link to="/profile">
            <li>Class Component</li>
          </Link>
          <li>Cart</li>
          <h1>
            {isOnline ? (
              <div style={{ color: "green" }}>Online</div>
            ) : (
              <div style={{ color: "red" }}>Offline</div>
            )}
          </h1>
          <button className="button" type="submit">
            Sign In
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
