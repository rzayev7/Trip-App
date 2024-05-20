import styles from "./ShortCard.module.scss";

const ShortCard = ({ item, extend }) => {
  return (
    <div className={`${styles.card} ${extend ? styles.extend : ""}`}>
      <img src={item.photo} alt="" />
      <div>
        <h4>{item.title}</h4>
        <p>{item.info}</p>
      </div>
    </div>
  );
};

export default ShortCard;
