/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import login from '../assets/img/login.svg'

const Login = () => {
  return (
    <div>
      <section className="section min-h-[560px] flex-nowrap pt-[40px] babybear:flex-col babybear:min-h-[0] babybear:px-mobile-container-padding babybear:pt-[24px]">
        <div className="self-start relative flex-shrink-0 w-[55%] pr-[42px] babybear:w-full babybear:pr-[0px]">
          <h1 className="main-heading text-color-text-accent-2 babybear:pb-[24px]">
            Welcome to your professional community
          </h1>

          <div className="sign-in-form-container">
            <form
              className="sign-in-form hero-cta-form"
              method="post"
              novalidate
              data-js-module-id="d2l-sign-in-form"
            >
              <div className="alert hidden" role="alert" tabindex="-1">
                <div className="wrapper">
                  <p className="alert-content"></p>
                </div>
              </div>

              <input
                name="loginCsrfParam"
                value="c4710b24-51b5-4225-8846-806d7c831468"
                type="hidden"
              />

              <div className="sign-in-form__form-input-container">
                <div className="input">
                  <input
                    className="input__input"
                    autocomplete="username"
                    required="true"
                    id="session_key"
                    name="session_key"
                    placeholder=" "
                    type="text"
                  />

                  <label className="input__label" for="session_key">
                    Email or phone number
                  </label>
                </div>

                <div className="input">
                  <input
                    className="input__input"
                    autocomplete="current-password"
                    required="true"
                    id="session_password"
                    name="session_password"
                    placeholder=" "
                    type="password"
                  />

                  <label className="input__label" for="session_password">
                    Password
                  </label>
                </div>
              </div>

              <input
                name="trk"
                value="homepage-basic_signin-form_submit"
                type="hidden"
              />

              <a className="sign-in-form__forgot-password-link">
                Forgot password?
              </a>

              <button
                className="sign-in-form__submit-button"
                data-tracking-litms
                type="submit"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>

        <img
          className="flip-rtl block z-[-1] w-[700px] h-[560px] relative flex-shrink babybear:w-[374px] babybear:h-[214px] babybear:static"
          alt="Welcome to your professional community"
          src={login}
        />
      </section>
    </div>
  );
};

export default Login;
