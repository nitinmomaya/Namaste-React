import { useEffect, useState } from "react";
import Restcard from "./RestCard";

import Shimmer from "./Shimmer";

function filterData(searchInput, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return filterData;
}

const CardList = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filterRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurant, setAllRestaurant] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2513844&lng=81.62964130000002&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    console.log(json);
  }

  return filterRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="searchbox">
        <input
          type="text"
          value={searchInput}
          placeholder="Search any food and restaurant..."
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        ></input>
        <button
          className="button"
          onClick={() => {
            //need to filter data
            const data = filterData(searchInput, allRestaurant);
            //update state-restaurants
            setFilteredRestaurants(data);
            setSearchInput("");
          }}
        >
          Search
        </button>
      </div>

      <div className="card-list">
        {filterRestaurants.map((resDetail) => {
          return <Restcard {...resDetail.data} key={resDetail.data.id} />;
        })}
      </div>
    </>
  );
};

export default CardList;
