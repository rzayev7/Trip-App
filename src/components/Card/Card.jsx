import styles from './Card.module.scss';

const Card = ({ item }) => {
const formattedPrice = item.price.toFixed(2);
  return (
    <div className={styles.cardContainer}>
      <img src={item.photo} alt='' />
      <div className={styles.cardContent}>
        <p>{item.country} trip</p>
        <h4>{item.title}</h4>
        <div className={styles.cardBottomContainer}>
          <div className={styles.tripPlans}>{item.tripPlans} available trip plans</div>
          <div className={styles.price}>
            From <span>${formattedPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;