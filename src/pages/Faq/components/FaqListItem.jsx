import styles from "./FaqList.module.scss";
import plus from "../../../assets/faq/plus.svg";
import cross from "../../../assets/faq/cross.svg";
import { useState } from "react";

const FaqListItem = ({ item, index }) => {
  const [display, setDisplay] = useState(false);

  const toggle = () => {
    setDisplay(!display);
  };
  return (
    <div className={styles["faqItem"]}>
      <div className={styles["index"]}>{index}</div>
    <h1>{item.question}</h1>
      <button
        onClick={toggle}
        style={{ backgroundColor: display ? "#4A21EF" : "#F5F7FA" }}
      >
        {display ? <img src={cross} alt="" /> : <img src={plus} alt="" />}
      </button>
      {display && <p>{item.answer}</p>}
    </div>
  );
};

export default FaqListItem;
