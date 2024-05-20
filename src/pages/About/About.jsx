
import Hero from "../../components/Hero/Hero";
import aboutBackground from "../../assets/about/aboutBackground.png";
import SecondHero from "./components/SecondHero";
import Email from "../../components/Email/Email";
import LinkToDestinations from "../../components/linkToDestinations/LinkToDestinations";
import Why from "../Home/components/Why/Why";
import LocalExperts from "../Home/components/LocalExperts/LocalExperts";

const About = () => {
    const heading = "About Us";
    const comment = "Discover Our Passion for Travel and Adventure.";
    return (
        <div>
            <Hero heading={heading} comment={comment} background={aboutBackground}/>
            <SecondHero />
            <Why />
            <LocalExperts />
            <LinkToDestinations />
            <Email />
        </div>
    );
}

export default About;
