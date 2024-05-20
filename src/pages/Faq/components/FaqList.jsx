import styles from "./FaqList.module.scss";
import { faqList } from "../../../constants";
import FaqListItem from "./FaqListItem";


const FaqList = () => {

  return (
    <section className={styles.FaqList}>
      {faqList.map((item, index) => {
        const formattedIndex = (index + 1).toString().padStart(2, "0");
        return (
            <FaqListItem item={item} index={formattedIndex} key={item.id} />
        );
      })}
    </section>
  );
};

export default FaqList;
