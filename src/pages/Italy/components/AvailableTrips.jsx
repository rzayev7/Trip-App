import styles from './AvailableTrips.module.scss'
import { topDestinations } from "../../../constants";
import CardsContainer from "../../../components/CardsContainer/CardsContainer";

const AvailableTrips = () => {
    return (
        <section className={styles.availableTripsSection}>
            <h1>Available Trips</h1>
            <CardsContainer cards={topDestinations} />
        </section>
    );
}

export default AvailableTrips;
