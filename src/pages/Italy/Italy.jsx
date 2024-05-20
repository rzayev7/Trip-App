import Hero from "./components/Hero";
import MustSee from "./components/MustSee";
import Guide from "./components/Guide";
import LinkToDestinations from "../../components/linkToDestinations/LinkToDestinations";
import Email from "../../components/Email/Email";
import Comment from "./components/Comment";
import AvailableTrips from "./components/AvailableTrips";
import Map from "./components/Map";

const Italy = () => {
    return (
        <div>
            <Hero />
            <AvailableTrips />
            <Map />
            <MustSee />
            <Comment />
            <Guide />
            <LinkToDestinations />
            <Email />
        </div>
    );
}

export default Italy;
