import "../index.css";

const RestaurantCard = ({ name, cuisine }) => {
  return (
    <div className="rest-card">
      <img
        className="rest-logo"
        alt="rest-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/6b582444-c79c-4cf7-831c-c15fbc634d7b_23706.JPG"
      />
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
    </div>
  );
};

export default RestaurantCard;
