import styles from "./Comment.module.scss";
import commentIcon from "../../../assets/destinations/commentIcon.svg";

const Comment = () => {
  return (
    <section className={styles.commentSection}>
      <div className={styles.container}>
        <div className={styles.firstBox}>
          <p>
            “Tiago put together an epic itinerary for me and my friends. He
            showed us some hidden hiking trails and amazing local food spots. He
            even met us for a coffee to make sure we had everything we needed.
          </p>
          <h5>Thanks Tiago!</h5>
          <p>Charlie, rappelling down a 370-foot waterfall</p>
          <p>The Azores</p>
        </div>
        <div className={styles.secondBox}>
          <div className={styles.iconContainer}>
            <img src={commentIcon} alt="" />
          </div>
          <p>Trip crafted by</p>
          <h5>Tiago <span>|</span> <span>Local expert in Portugal</span></h5>
        </div>
      </div>
    </section>
  );
};

export default Comment;
