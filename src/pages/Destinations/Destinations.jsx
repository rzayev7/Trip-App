import Hero from "./components/Hero.jsx"
import DestinationsList from "./components/DestinationsList.jsx";
import Email from "../../components/Email/Email.jsx";
import Comment from "./components/Comment.jsx";
import TopDestinations from "./components/TopDestinations.jsx";


const Destinations = () => {
    return (
        <div>
            <Hero />
            <DestinationsList />
            <TopDestinations />
            <Comment />
            <Email />
        </div>
    );
}

export default Destinations;
