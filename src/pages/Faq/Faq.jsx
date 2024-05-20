import Hero from "../../components/Hero/Hero";
import heroImage from "../../assets/faq/faqBackground.png";
import FaqList from "./components/FaqList";

const Faq = () => {
    const heading = "FAQ";
    const comment = "Unlocking the Mysteries of Travel: Your Questions, Our Journey.";
    return (
        <div>
            <Hero heading={heading} comment={comment} background={heroImage} />
            <FaqList />
        </div>
    );
}

export default Faq;
