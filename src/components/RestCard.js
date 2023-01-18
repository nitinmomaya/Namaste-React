import { IMG_CDN_URL } from "../contant";

const Restcard = ({
  name,
  cloudinaryImageId,
  cuisines,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <img className="image" src={IMG_CDN_URL + cloudinaryImageId} />
      <div className="content">
        <h2> {name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{lastMileTravelString} </h4>
      </div>
    </div>
  );
};

export default Restcard;
