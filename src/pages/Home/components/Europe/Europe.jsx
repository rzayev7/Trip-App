import { useState } from 'react';
import { trendingItems } from '../../../../constants/index.js'
import { useEffect } from 'react';
import Card from '../Card.jsx'
import styles from "../../Cards.module.scss";

const Europe = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        //api call if real case
        setItems(trendingItems)
    }, [])

    return (
        <section className={styles.cardSection}>
            <h1>Europe</h1>
            <div className={styles.cardsContainer}>
                {
                    items.map((item) => 
                        <Card key={item.id} item={item} />
                    )
                }
            </div>
        </section>
    );
}

export default Europe;
