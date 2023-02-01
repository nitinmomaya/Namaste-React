import { useEffect, useState } from "react";

const useRestaurantList = () => {
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [allRestaurant, setAllRestaurant] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2513844&lng=81.62964130000002&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurant(json?.data?.cards[0]?.data?.data?.cards);
    setFilterRestaurants(json?.data?.cards[0]?.data?.data?.cards);

    console.log(json);
  }

  return { setFilterRestaurants, filterRestaurants, allRestaurant };
};

export default useRestaurantList;
