import styles from "./Map.module.scss";
import mapCard from "../../../assets/italy/mapCard.png";
import ShortCard from "../../../components/ShortCard/ShortCard";
import arrowRight from "../../../assets/italy/arrowRight.svg";
import arrowLeft from "../../../assets/italy/arrowLeft.svg";

const Map = () => {
  const cardInfo = {
    title:
      "Have the drive of your life on the cliff roads of the AAmalfi Coast",
    photo: mapCard,
  };
  return (
    <section className={styles.mapSection}>
      <div className={styles.top}>
        <h1>Tops things to do</h1>
        <div className={styles.arrows}>
            <div><img src={arrowLeft} alt="" /></div>
            <div><img src={arrowRight} alt="" /></div>
        </div>
      </div>
      <div className={styles.card}>
        <ShortCard item={cardInfo} />
      </div>
    </section>
  );
};

export default Map;
