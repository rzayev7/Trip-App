import logo from "../../assets/Logo.svg";
import "./style.css";
import arrow from "../../assets/signin/arrow.svg";
import { Link } from "react-router-dom";
import FacebookLogo from "../../assets/FacebookLogo.svg";
import GoogleLogo from "../../assets/GoogleLogo.svg";
import AppleLogo from "../../assets/AppleLogo.svg";

const ForgotPassword = () => {
  return (
    <div className="signInContainer">
      <aside></aside>
      <main>
        <div className="top">
          <Link to="/signin">
            <img src={arrow} alt="" />
          </Link>
          <div className="appLogoContainer">
            <img src={logo} alt="" />
          </div>
        </div>
        <h1 className="createAccountHeading">Create an account to start trip planning</h1>
        <form>
          <div>
            {" "}
            <label htmlFor="">Email</label>
            <input type="email" placeholder="someone@example.com" />
          </div>
        </form>
        <button className="resetButton">Start trip planning</button>
        <p className="signUpWith">Sign up with</p>
        <div className="logosContainer">
          <button className="signInLogo">
            <img src={GoogleLogo} alt="google" />
          </button>
          <button className="signInLogo">
            <img src={AppleLogo} alt="apple" />
          </button>
          <button className="signInLogo">
            <img src={FacebookLogo} alt="facebook" />
          </button>
        </div>
        <p className="createAccountFooter">
          By creating an account, you agree to elsewhere's <Link to="#">Terms of Use</Link> and <Link to="#">Privacy Policy</Link>.
        </p>
      </main>
    </div>
  );
};

export default ForgotPassword;
