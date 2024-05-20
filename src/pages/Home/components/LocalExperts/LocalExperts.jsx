import "./LocalExperts.css";
import firstImage from "../../../../assets/localexperts/photo1.png";
import secondImage from "../../../../assets/localexperts/photo2.png";
import firstImageSmall from "../../../../assets/localexperts/photo1Small.png"
import secondImageSmall from "../../../../assets/localexperts/photo2Small.png"
import leftDialog from "../../../../assets/localexperts/leftDialog.png";
import rightDialog from "../../../../assets/localexperts/rightDialog.png";

const LocalExperts = () => {
  return (
    <section className="localexperts-section">
        <h1>Our Local Experts</h1>
        <div className="container">
          <div className="first-image">
            <img src={firstImage} alt="" />
            <img src={firstImageSmall} alt="" />
            <div className="leftDialog">
              <img src={leftDialog} alt="" />
              <p>
                Why trust Gary in Florida to plan your trip to South Africa?
              </p>
            </div>
          </div>
          <div className="second-image">
            <img src={secondImage} alt="" />
            <img src={secondImageSmall} alt="" />
            <div className="rightDialog">
              <img src={rightDialog} alt="" />
              <p>When Angela in Johannesburg knows best.</p>
            </div>
          </div>
        </div>
    </section>
  );
};

export default LocalExperts;
