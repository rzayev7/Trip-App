import "./Hero.css";
const Hero = ({ heading, comment, background }) => {
  const backgroundStyle = {
    background: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "94%",
    height: "54vh",
    margin: "10px auto 0 auto",
    borderRadius: "20px",
    backgroundRepeat: "no-repeat",
    textAlign: "center",
    paddingTop: "150px",
  };

  return (
    <section style={backgroundStyle} className="heroSection">
      <h1>{heading}</h1>
      <p>{comment}</p>
    </section>
  );
};

export default Hero;
