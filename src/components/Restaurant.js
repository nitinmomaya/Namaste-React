import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../contant";
import Shimmer from "./Shimmer";

const Restaurant = () => {
  const params = useParams();
  const { id } = params;
  console.log(params);

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=21.2513844&lng=81.62964130000002&menuId=" +
        id
    );
    const json = await data.json();
    console.log("REST", json.data);
    setRestaurant(json.data);
  }

  if (!restaurant) return <Shimmer />;

  return (
    <>
      <div>
        <h1> Restaurant id:{id}</h1>
        <h2> {restaurant.name}</h2>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId}></img>
      </div>

      <div>
        {Object.values(restaurant.menu.items).map((item) => (
          <div id={item.key}>
            {item.name} {item.price}
          </div>
        ))}
      </div>
    </>
  );
};

export default Restaurant;
