import styles from './Hero.module.scss'
import ListHero from './ListHero';

const Hero = () => {
    return (
        <section className={styles.heroSection}>
            <h1>Italy</h1>
            <p>Trips you couldn't plan, even if you wanted to.</p>
            <button>Create a trip</button>
            <ListHero />
        </section>
    );
}

export default Hero;
