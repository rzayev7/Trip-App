import styles from "./MustSee.module.scss";
import ShortCard from "../../../components/ShortCard/ShortCard";
import { italyMustSeeItems } from "../../../constants";

const MustSee = () => {
  return (
    <section className={styles.mustSeeSection}>
      <h1>Must-see attractions for your itinerary</h1>
      <div className={styles.cardsContainer}>
        {italyMustSeeItems.map((item) => (
          <ShortCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MustSee;
