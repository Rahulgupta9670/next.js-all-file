import Head from "next/head";
import { useState } from "react";

import Link from "next/link";
import axios from "axios";
import Router from "next/router";
import { get } from "mongoose";

const Home = () => {
  const [state, setState] = useState(false);
  const [name, setName] = useState();

  // register from
  const handleChangeReg = async (e) => {
    e.preventDefault();
    if (!email) {
      return alert("Email is required");
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
      return alert("Incorrect email format");
    }
    if (!mobile) {
      return alert("Userpassword is required");
    } else if (mobile.length < 8) {
      return alert("Maxmum 8 Digit userpassword");
    }
    try {
      var user = {
        name: name,
        email: email,
        mobile: mobile,
      };
      console.log("register", name, email, mobile);
      const data = await axios
        .post("http://localhost:3000/api/users", user)
        .then((res) => {
          console.log("registrtttttttttttttttttt", res);

          localStorage.setItem("jwt",res.data.token)
         const jwt = localStorage.getItem("jwt")
          
          console.log("token jwt2", jwt)
          Router.push("/ProfileList");
          // localStorage.setItem("jwt",res.data.token )
        });
      
    } catch (error) {
      console.log("error", error)
      
    }

   
  };

  // login form
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();

  const handleChange = async (e) => {
    e.preventDefault();

    var user = {
      email: email,
      mobile: mobile,
    };
    const data = await axios
      .post("http://localhost:3000/api/users/login", user)
      .then((res) => {
        console.log(res);
        console.log("token verfiyyyy", res.data.token);
        Router.push("/ProfileList");
        localStorage.setItem("jwt", res.data.token);
      });
  };

  return (
    <>
      <Head>
        <title>One App Portal</title>
        <meta name="description" content="One App Portal" />
        <link rel="icon" href="/assets/images/logo.png" />
        <link href="/assets/font/SegoeUI.ttf" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className="content-page3 p-5">
        <div className="container-fluid bg-white rounded ">
          <div className="row back">
            <div className="col-12 p-4">
              <div
                className={`container ${state ? "right-panel-active" : ""}`}
                id="container"
              >
                <div className="form-container  sign-up-container">
                  <form action="#">
                    <div className="header">Sign Up</div>
                    <div className="social__media__container">
                      <a
                        href="https://codepen.io/Rittenhouse"
                        target="_blank"
                        className="social codepen"
                      >
                        <i className="fa-brands fa-codepen" />
                      </a>
                      <a href="#" className="social google">
                        <i className="fa-brands fa-google" />
                      </a>
                      <a
                        href="https://www.instagram.com/zaur.suleymnv/"
                        target="_blank"
                        className="social instagram"
                      >
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </div>
                    <span className="under__social">
                      <a href="#" className="link signin-link">
                        or use your email for registration
                      </a>
                    </span>
                    <div className="button-input-group">
                      <div className="group input-group">
                        <input
                          type="text"
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Name"
                          required
                        />
                      </div>
                      <div className="group input-group">
                        <input
                          type="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email"
                          required
                        />
                      </div>
                      <div className="group input-group">
                        <input
                          type="password"
                          name="mobile"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          placeholder="Password"
                          required
                          pattern=".{8,}"
                        />
                      </div>
                      <div className="alert-text signup__alert">
                        <span className="help__text">At least 8 character</span>
                      </div>
                      <div className="group button-group">
                        <button
                          onClick={handleChangeReg}
                          className="signup-btn"
                        >
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="form-container  sign-in-container">
                  <form action="#">
                    <div className="header">Sign In</div>
                    <div className="social__media__container">
                      <a
                        href="https://codepen.io/Rittenhouse"
                        target="_blank"
                        className="social codepen"
                      >
                        <i className="fa-brands fa-codepen" />
                      </a>
                      <a href="#" className="social google">
                        <i className="fa-brands fa-google" />
                      </a>
                      <a
                        href="https://www.instagram.com/zaur.suleymnv/"
                        target="_blank"
                        className="social instagram"
                      >
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </div>
                    <span className="under__social">
                      <a href="#" className="link signup-link">
                        or use your account
                      </a>
                    </span>
                    <div className="button-input-group">
                      <div className="group input-group">
                        <input
                          type="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email"
                          required
                        />
                      </div>
                      <div className="group input-group">
                        <input
                          type="password"
                          name="mobile"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          placeholder="Password"
                          required
                          pattern=".{8,}"
                        />
                      </div>
                      <div className="alert-text signup__alert">
                        <span className="help__text">At least 8 character</span>
                      </div>
                      <div className="form-link forgot">
                        <a href="#" className="login-link">
                          Forgot your password?
                        </a>
                      </div>
                      <div className="group button-group">
                        <button onClick={handleChange} className="signin-btn">
                          Sign in
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="overlay-container">
                  <div className="overlay">
                    <div className="overlay-panel overlay-left">
                      <h1>Welcome Back!</h1>
                      <p>Please login your personal info</p>
                      <div className="group button-group">
                        <button
                          className="ghost"
                          onClick={() => setState(!state)}
                        >
                          Sign in
                        </button>
                      </div>
                      <footer>
                        <p>
                          Inspired by{" "}
                          <a
                            href="https://codepen.io/Rittenhouse"
                            target="_blank"
                          >
                            Zaur Suleymanlı
                          </a>
                        </p>
                      </footer>
                    </div>
                    <div className="overlay-panel overlay-right">
                      <h1>Hello, Friend!</h1>
                      <p>
                        Enter your personal details and start your journey with
                        us
                      </p>
                      <div className="group button-group">
                        <button
                          className="ghost"
                          onClick={() => setState(!state)}
                        >
                          Sign up
                        </button>
                      </div>
                      <footer>
                        <p>
                          Inspired by{" "}
                          <a
                            className="text-white"
                            href="https://codepen.io/Rittenhouse"
                            target="_blank"
                          >
                            Cpm @ India
                          </a>
                        </p>
                      </footer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
