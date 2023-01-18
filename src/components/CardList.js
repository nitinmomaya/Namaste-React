import { useState } from "react";
import Restcard from "./RestCard";
import { restDetails } from "../contant";

function filterData(searchInput, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchInput)
  );

  return filterData;
}

const CardList = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setRestaurants] = useState(restDetails);

  return (
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
          onClick={() => {
            //need to filter data
            const data = filterData(searchInput, restaurants);
            //update state-restaurants
            setRestaurants(data);
            setSearchInput("");
          }}
        >
          Search
        </button>
      </div>

      <div className="card-list">
        {restaurants.map((resDetail) => {
          return <Restcard {...resDetail.data} key={resDetail.data.id} />;
        })}
      </div>
    </>
  );
};

export default CardList;
