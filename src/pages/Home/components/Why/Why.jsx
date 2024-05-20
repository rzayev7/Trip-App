import './Why.css';
import { whyUs } from '../../../../constants';

const Why = () => {

    const WhyCard = ({ item }) => {
        return (
            <div className="why-card">
                <div className="icon-container"><img src={item.icon} alt="" />
                </div>
                
                <h5>{item.title}</h5>
            </div>
        )
    }

    return (
        <section className="why-section">
            <h1>Why us?</h1>
            <div className='container'>
                {whyUs.map((item) => 
                    <WhyCard item={item} key={item.id} />
                )}
            </div>
        </section>
    );
}

export default Why;
