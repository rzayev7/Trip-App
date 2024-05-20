import logo from "../../assets/Logo.svg";
import FacebookLogo from "../../assets/FacebookLogo.svg";
import GoogleLogo from "../../assets/GoogleLogo.svg";
import AppleLogo from "../../assets/AppleLogo.svg";
import eye from "../../assets/eye.svg";
import "./style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const [displayPassword, setDisplayPassword] = useState(false);

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div className="signInContainer">
      <aside></aside>
      <main>
        <div className="appLogoContainer">
          <img src={logo} alt="" />
        </div>
        <h1>Sign in for your exciting journey</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            {" "}
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="someone@example.com"
              {...register("email", { required: "Email is required" })}
            />
          </div>
          <div>
            {" "}
            <label htmlFor="">Password</label>
            <div className="passwordContainer">
              <input
                type={displayPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password should contain at least 8 symbols",
                  },
                  validate: value => {
                    if (!/[A-Z]/.test(value)) {
                      return "Password should contain at least 1 uppercase character";
                    } else if (!/\d/.test(value)) {
                      return "Password should contain at least 1 number";
                    } else if(!/[@#$%^&*()\-_=+|/";':.?><,~`]/.test(value)) {
                      return "Password should contain at least 1 special character"
                    }
                    return true;
                  },
                })}
              />
              <img
                src={eye}
                alt=""
                width={"20"}
                onClick={() => setDisplayPassword(!displayPassword)}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
          <div>
            {errors?.email && (
              <p
                style={{
                  textAlign: "left",
                  color: "red",
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                }}
              >
                {errors?.email?.message || "Email Error!"}
              </p>
            )}
            {errors?.password && (
              <p
                style={{
                  textAlign: "left",
                  color: "red",
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                }}
              >
                {errors?.password?.message || "Password Error!"}
              </p>
            )}
          </div>
          <p>
            <Link to="/forgotpassword">Forgot password?</Link>
          </p>
          <button type="submit" className="signinButton">
            Sign in
          </button>
          <section className="footer">
            <div className="social-medias">
              <p>or use one of this</p>
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
            </div>

            <p className="create-account">
              <Link to="/createaccount">
                Don't have an account? <span>Create new for adventure!</span>
              </Link>
            </p>
          </section>
        </form>
      </main>
    </div>
  );
};

export default SignIn;
