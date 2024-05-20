import { useState } from 'react';
import { newItems } from '../../../../constants/index.js'
import { useEffect } from 'react';
import '../Cards.css';
import Card from '../Card.jsx'

const Trending = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        //api call if real case
        setItems(newItems)
    }, [])

    return (
        <section className="trending-section">
            <h1>Brand new trips</h1>
            <div className='trendingItemsContainer'>
                {
                    items.map((item) => 
                        <Card key={item.id} item={item} />
                    )
                }
            </div>
        </section>
    );
}

export default Trending;
