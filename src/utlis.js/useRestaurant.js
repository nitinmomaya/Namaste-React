import { useEffect, useState } from "react";
import { MENU_URL } from "../contant";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(MENU_URL + id);
    const json = await data.json();
    console.log("REST", json.data);
    setRestaurant(json.data);
  }

  return restaurant;
};

export default useRestaurant;
