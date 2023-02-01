import { useState } from "react";
import { Link } from "react-router-dom";
import Restcard from "./RestCard";
import { filterData } from "../utlis.js/helper";
import Shimmer from "./Shimmer";
import useRestaurantList from "../utlis.js/useRestaurantList";

const CardList = () => {
  const { setFilterRestaurants, filterRestaurants, allRestaurant } =
    useRestaurantList();

  const [searchInput, setSearchInput] = useState("");

  // const isOnline = useOnline();

  // if (!isOnline) {
  //   return <h1>🔴 Offline, please check your internet connection!!</h1>;
  // }

  // not render component (Early return)
  // if (!filterRestaurants) return null;

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
            setFilterRestaurants(data);
            setSearchInput("");
          }}
        >
          Search
        </button>
      </div>

      <div className="card-list">
        {filterRestaurants.map((resDetail) => {
          return (
            <Link
              to={"/restaurant/" + resDetail.data.id}
              key={resDetail.data.id}
            >
              <Restcard {...resDetail.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default CardList;
