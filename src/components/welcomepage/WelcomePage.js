import React from "react";
import "./WelcomePage.css";
import { string_resources } from "../../resources/Strings";
import salary from "../../resources/images/salary.png";
import WelcomeLoginForm from "../welcome-login-form/WelcomeLoginForm";

const WelcomePage = () => {
  return (
    <div className="container">
      <div className="left-side">
        <div className="lft-title">
          <img style={{ height: "48px" }} src={salary} />
          <span style={{ marginleft: "55%" }}>{string_resources.WEL_PAGE.HEADING} </span>
        </div>
        <div className="lft-desc">
          <div className="hrz-line">
            <hr />
          </div>
          {string_resources.WEL_PAGE.DESCRIPTION}
        </div>
      </div>
      <div className="right-side">
        <div className="right-title-desc">
          <div className="right-title">{string_resources.WEL_PAGE.TITLE}</div>
          <div className="right-desc">
            {string_resources.WEL_PAGE.TITLE_DESC}
          </div>
        </div>
        <div className="login-form">
          <WelcomeLoginForm />
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
