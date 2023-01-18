// navbar

const Navbar = () => {
  return (
    <div className="container">
      <div className="left">FoodWallah</div>

      <div className="right">
        <ul>
          <li>Home</li>
          <li>Restaurants</li>
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
