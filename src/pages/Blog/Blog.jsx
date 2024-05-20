import LinkToDestinations from "../../components/linkToDestinations/LinkToDestinations";
import Email from "../../components/Email/Email";
import Hero from "../../components/Hero/Hero";
import blogHero from "../../assets/blog/blogHero.png";
import BlogsList from "./components/BlogsList";


const Blog = () => {
    const heading = "Blog";
    const comment = "Blog articles for \"Inspiration\"";
    return (    
        <div>
            <Hero heading={heading} comment={comment} background={blogHero}/>
            <BlogsList />
            <LinkToDestinations />
            <Email />
        </div>
    );
}

export default Blog;
