import styles from './TopDestinations.module.scss';
import { topDestinations } from '../../../constants';
import CardsContainer from '../../../components/CardsContainer/CardsContainer';

const TopDestinations = () => {
    return (
        <section className={styles.topDestinations}>
            <h1>Top Destinations</h1>
            <CardsContainer cards={topDestinations} />
        </section>
    );
}

export default TopDestinations;
