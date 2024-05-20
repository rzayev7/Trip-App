import Hero from "./components/Hero/Hero.jsx";
import Trending from "./components/Trending/Trending.jsx";
import NewTrips from "./components/NewTrips/NewTrips.jsx";
import Why from "./components/Why/Why.jsx";
import LocalExperts from "./components/LocalExperts/LocalExperts.jsx";
import Email from "../../components/Email/Email.jsx";
import LinkToDestinations from "../../components/linkToDestinations/LinkToDestinations.jsx";
import Comment from "./components/Comment/Comment.jsx";
import Europe from "./components/Europe/Europe.jsx";
import Asia from "./components/Asia/Asia.jsx";
const Home = () => {
    return (
        <div>
            <Hero />
            <Trending />
            <NewTrips />
            <Why />
            <LocalExperts />
            <Comment /> 
            <Europe />
            <Asia />
            <LinkToDestinations />
            <Email />
        </div>
    );
}

export default Home;
