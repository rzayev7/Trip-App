import heroVideo from "../../../../assets/Homepage.mp4";
import searchIcon from "../../../../assets/search.svg";
import styles from "./Hero.module.scss"; // Import the SCSS module

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.videoContainer}>
        <video autoPlay loop muted>
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
      <div className={styles.textContainer}>
        <h1>We create trips you love</h1>
        <p>Trips you couldn't plan, even if you wanted to.</p>
        <div className={styles.inputContainer}>
          <input type="text" placeholder="Where do you want to go?" />
          <div className={styles.searchIconContainer}>
            <img src={searchIcon} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
