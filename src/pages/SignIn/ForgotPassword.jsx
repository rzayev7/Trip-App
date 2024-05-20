import logo from "../../assets/Logo.svg";
import "./style.css";
import arrow from '../../assets/signin/arrow.svg'
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="signInContainer">
      <aside></aside>
      <main>
        <div className="top">
            <Link to="/signin"><img src={arrow} alt="" /></Link>
            <div className="appLogoContainer">
            <img src={logo} alt="" />
            </div>
        </div>
        <h1>Looking to change your password?</h1>
        <p className="enteringEmail">
          Enter your email below and we'll send you instructions on how to reset
          your password.
        </p>
        <form>
          <div>
            {" "}
            <label htmlFor="">Email</label>
            <input type="email" placeholder="someone@example.com" />
          </div>
        </form>
        <button className="resetButton">Reset my password</button>
      </main>
    </div>
  );
};

export default ForgotPassword;
