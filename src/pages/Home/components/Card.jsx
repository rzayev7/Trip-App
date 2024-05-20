import "./Cards.css";
import bookmarkIcon from "../../../assets/bookmark.svg";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="card-container" onClick={() => navigate("/destinations")}>
      <div className="cardTop">
        <img src={item.photo} alt="" />
        {item.label && (
          <div className="cardLabel">
            <img src={item.label.icon} alt="" />
            <h4>{item.label.title}</h4>
          </div>
        )}
        <div
          className="bookmark"
          onClick={(e) => {
            e.stopPropagation();
            alert("saved!");
          }}
        >
          <img src={bookmarkIcon} alt="" height={"20"} width={"20"} />
        </div>
      </div>
      <div className="card-content">
        <p className="country">{item.country} trip</p>
        <h4>{item.title}</h4>
        <div className="card-bottom-container">
          <div className="days">{item.days} days</div>
          <div className="price">
            From <span>${item.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
