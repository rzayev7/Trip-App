import styles from "./CardsContainer.module.scss";
import Card from "../Card/Card";

const CardsContainer = ({ cards }) => {
  return (
    <div className={styles.cardsContainer}>
      {cards.map((card) => (
        <Card item={card} key={card.id} />
      ))}
    </div>
  );
};

export default CardsContainer;
