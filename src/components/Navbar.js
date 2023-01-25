// navbar
import { Link } from "react-router-dom";
const Navbar = () => {
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
          <li>Cart</li>
          <button className="button" type="submit">
            Sign In
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
