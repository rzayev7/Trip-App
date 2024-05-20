import styles from "./Comment.module.scss";
import commentIcon from "../../../assets/destinations/commentIcon.svg";
import purpleStar from "../../../assets/italy/purpleStar.svg";
import whiteStar from "../../../assets/italy/whiteStar.svg";

const Comment = () => {
  return (
    <section className={styles.commentSection}>
      <div className={styles.container}>
        <div className={styles.firstBox}>
          <p>
            We have a very good time all the way. The Capri boat ride is
            excellent and so much fun with the crew! They are awesome.
          </p>
        </div>
        <div className={styles.secondBox}>
          <div className={styles.iconContainer}>
            <img src={commentIcon} alt="" />
          </div>
          <p>Vivian Lim</p>
          <p className={styles.bottom}>
            <img src={purpleStar} alt="" />
            <img src={purpleStar} alt="" />
            <img src={purpleStar} alt="" />
            <img src={purpleStar} alt="" />
            <img src={whiteStar} alt="" />
             <span>|</span> <span>18 June 2024</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Comment;
