import styles from './LinkToDestinations.module.scss';
import arrow from '../../assets/linkToDestinations/arrow.svg';
import { Link } from 'react-router-dom';

const LinkToDestinations = () => {
    return (
        <section className={styles.linkToDestSection}>
            <h1>Looking to go elsewhere?</h1>
            <Link to="/destinations"><button>Our destinations <img src={arrow} alt="" /></button></Link>
        </section>
    );
}

export default LinkToDestinations;
