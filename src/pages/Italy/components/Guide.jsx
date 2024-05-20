import styles from "./Guide.module.scss";
import { italyGuide } from "../../../constants";

const Guide = () => {
  const Card = ({ item }) => {
    return (
      <div className={styles.guideItem}>
        <div className={styles.iconContainer}>
          <img src={item.icon} alt="" />
        </div>
        <div className={styles.content}>
          <h5>{item.title}</h5>
          <p>{item.info}</p>
        </div>
      </div>
    );
  };

  return (
    <section className={styles.guideSection}>
      <h1>Expert guidance to help you plan your trip</h1>
      <div className={styles.guideContainer}>
        {italyGuide.map((item) => (
          <Card item={item} key={item.id}/>
        ))}
      </div>
    </section>
  );
};

export default Guide;
