import styles from './Hero.module.scss';

const Hero = () => {
    return (
        <section className={styles.destinationsHero}>
            <h1>Explore places on Tourista</h1>
            <a href="#destinations-list">Destinations</a>
        </section>
    );
}

export default Hero;
