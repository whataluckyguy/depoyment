import React from "react";
import Logo from "../Assets/logo.png";
import { AppBar, Toolbar } from "@material-ui/core";
import { Call, WhatsApp } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="root">
        <AppBar position="fixed" color="inherit">
          <Toolbar className="bar">
            <Link to="/">
              <img src={Logo} alt="logo" className="logo" />
            </Link>
            <div className="contact">
              <div>
                <span>
                  <a
                    href="tel:+91 9999072200"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Call />
                  </a>
                </span>
              </div>
              <div>
                <span>
                  <a
                    href="tel:+91 9999072200"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <WhatsApp />
                  </a>
                </span>
              </div>
              <div>
                <a
                  href="tel:+91 9999072200"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  +91 9999072200
                </a>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

export default Header;
