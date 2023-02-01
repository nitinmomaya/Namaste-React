import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../contant";
import useRestaurant from "../utlis.js/useRestaurant";
import Shimmer from "./Shimmer";

const Restaurant = () => {
  const params = useParams();
  const { id } = params;
  console.log(params);

  const restaurant = useRestaurant(id);
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
          <div key={item.id}>
            {item.name}---{item.price}
          </div>
        ))}
      </div>
    </>
  );
};

export default Restaurant;
