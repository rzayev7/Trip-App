import icon1 from "../../../assets/italy/heroIcon1.svg"
import icon2 from "../../../assets/italy/heroIcon2.svg"
import icon3 from "../../../assets/italy/heroIcon3.svg"
import icon4 from "../../../assets/italy/heroIcon4.svg"
import icon5 from "../../../assets/italy/heroIcon5.svg"
import styles from './ListHero.module.scss'

const ListHero = () => {
    const items = [
        {
            id: 1,
            icon: icon1,
            heading: "BEST TIME TO VISIT",
            firstText: "High s/ May-Sept",
            secondText: null,
        },
        {
            id: 2,
            icon: icon2,
            heading: "CLIMATE",
            firstText: "High 32°C",
            secondText: "Low 0°C",
        },
        {
            id: 3,
            icon: icon3,
            heading: "TIMEZONE",
            firstText: "Central European",
            secondText: "Time (UTC +1)",
        },
        {
            id: 4,
            icon: icon4,
            heading: "CURRENCY",
            firstText: "Euro",
            secondText: "Dollar",
        },
        {
            id: 5,
            icon: icon5,
            heading: "LOCAL LANGUAGE",
            firstText: "Italian",
            secondText: "English",
        },
    ]
    return (
        <div className={styles.listOfItems}>
            {items.map(item => (
                <div key={item.id} className={styles.item}>
                    <img src={item.icon} alt="icon" />
                    <div className={styles.content}>
                    <h3>{item.heading}</h3>
                    <p>{item.firstText}</p>
                    {item.secondText && <p>{item.secondText}</p>}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ListHero;
