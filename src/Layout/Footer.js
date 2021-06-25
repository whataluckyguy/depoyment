import React from "react";
import { Box } from "@material-ui/core";
import "./Footer.css";
import {
  Call,
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  LocationCity,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="footer-col about">
            <h4>About Us</h4>
            <p>
              Propertieso.com is a company with rich experience in real estate
              advisory that believes each real estate experience should be a
              simple and successful execution from a Dream to Reality. Our team
              of Real Estate advisors is driven by the fundamental values of
              customer satisfaction, credibility and professionalism Propertieso
              has some of the best professionals in real estate industry who
              specialize in finding property just as per your requirement.
            </p>
          </div>
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <div>
                  <LocationCity />
                </div>
                <div>878, Mehrauli,</div>
              </li>
              <div style={{ paddingBottom: 20 }}>New Delhi-110030</div>
              <li>
                <div>
                  <Call />
                </div>
                <div>+91 9999072200</div>
              </li>
              <li>
                <div>
                  <Email />
                </div>
                <div>Founder@propertieso.com</div>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <ul>
              <li>
                <div style={{ paddingRight: "5px" }}>
                  <Facebook />
                </div>
                <div>
                  <a href="https://www.facebook.com/propertieso">Facebook</a>
                </div>
              </li>
              <li>
                <div style={{ paddingRight: "5px" }}>
                  <Instagram />
                </div>
                <div>
                  <a href="https://www.instagram.com/propertiesoo/">
                    Instagram
                  </a>
                </div>
              </li>
              <li>
                <div style={{ paddingRight: "5px" }}>
                  <LinkedIn />
                </div>
                <div>
                  <a href="https://www.linkedin.com/company/propertieso/">
                    LinkedIn
                  </a>
                </div>
              </li>
              <li>
                <div style={{ paddingRight: "5px" }}>
                  <Twitter />
                </div>
                <div>
                  <a href="https://twitter.com/Propertiesoo">Twitter</a>
                </div>
              </li>
              <li>
                <div style={{ paddingRight: "5px" }}>
                  <YouTube />
                </div>
                <div>
                  <a href="#">YouTube</a>
                </div>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Important Links</h4>
            <ul>
              <li>
                <Link to="/privacy" id="attributes">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" id="attributes">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/about" id="attributes">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="dis">
        <Box
          className="disclaimer"
          pt={{ xs: 5, sm: 10 }}
          pb={{ xs: 5, sm: 0 }}
        >
          Disclaimer: Propertieso is only an intermediary offering its platform
          to advertise properties of Seller for a Customer/Buyer/User coming on
          its Website and is not and cannot be a party to or privy to or control
          in any manner any transactions between the Seller and the
          Customer/Buyer/User. All the offers and discounts on this Website have
          been extended by various Builder(s)/Developer(s) who have advertised
          their products. Propertieso is only communicating the offers and not
          selling or rendering any of those products or services. It neither
          warrants nor is it making any representations with respect to offer(s)
          made on the site. Propertieso shall neither be responsible nor liable
          to mediate or resolve any disputes or disagreements between the
          Customer/Buyer/User and the Seller and both Seller and
          Customer/Buyer/User shall settle all such disputes without involving
          Propertieso in any manner. All trademarks, logos and names are
          properties of their respective Builder(s)/Developer(s).
        </Box>
        <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
          Propertieso &reg; {new Date().getFullYear()}
        </Box>
        <Box textAlign="center" onClick={scrollToTop}>
          Go to top
        </Box>
      </div>
    </footer>
  );
}

export default Footer;
