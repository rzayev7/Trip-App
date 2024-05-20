import { useState } from "react";
import { destinations } from "../../../constants";
import "./DestinationsList.css";
import { Link } from "react-router-dom";
import arrow from "../../../assets/destinations/arrow.svg";
import upArrow from "../../../assets/destinations/up-arrow.svg";

const DestinationsList = () => {
  const [displayItems, setDisplayItems] = useState({});

  const toggleDisplay = (destination) => {
    setDisplayItems((previous) => ({
      ...previous,
      [destination]: !previous[destination],
    }));
  };

  return (
    <section className="destinations-list" id="destinations-list">
      {Object.keys(destinations).map((destination) => {
        return (
          <div key={destination}>
            <div className="topContainer">
              <h2>{destination}</h2>
              {!displayItems[destination] && (
                <img
                  src={arrow}
                  alt=""
                  onClick={() => toggleDisplay(destination)}
                  className="icon"
                />
              )}
              {displayItems[destination] && (
                <img
                  src={upArrow}
                  alt=""
                  onClick={() => toggleDisplay(destination)}
                  className="icon"
                />
              )}
            </div>
            {displayItems[destination] && (
              <ul className="mobileScreenList">
                {destinations[destination].map((place) => {
                  return (
                    <li key={place} className="destination">
                      <Link to={place}>{place}</Link>
                    </li>
                  );
                })}
              </ul>
            )}
            <ul className="desktopScreenList">
              {destinations[destination].map((place) => {
                return (
                  <li key={place} className="destination">
                    <Link to="">{place}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </section>
  );
};

export default DestinationsList;
