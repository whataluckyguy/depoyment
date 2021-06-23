import { Box } from "@material-ui/core";
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
import {Link} from "react-router-dom";
import React from "react";
import "./Footer.css";

function Footer() {
  const scrollToTop=()=> {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  return (
    <footer>
      <div className="headSections">
        <span className="about">
          <div className="head">About us</div>
          <div className="elements">
            <Box>
              Propertieso.com is a company with rich experience in real estate
              advisory that believes each real estate experience should be a
              simple and successful execution from a Dream to Reality. Our team
              of Real Estate advisors is driven by the fundamental values of
              customer satisfaction, credibility and professionalism Propertieso
              has some of the best professionals in real estate industry who
              specialize in finding property just as per your requirement.
            </Box>
          </div>
        </span>
        <span className="office">
          <div className="head">Contact Us</div>
          <div className="elements">
            <Box className="contact">
              <div>
                <LocationCity />
              </div>
              <div>878, Mehrauli,</div>
            </Box>
            <Box>New Delhi-110030</Box>
            <Box className="contact">
              <div>
                <Call />
              </div>
              <div> +91 9999072200</div>
            </Box>
            <Box className="contact">
              <div>
                <Email />
              </div>
              <div> Founder@propertieso.com</div>
            </Box>
          </div>
        </span>
        <span className="follow_us">
          <div className="head">Follow Us</div>
          <div className="elements">
            <a href="https://www.facebook.com/propertieso" id="attributes" ><Box className="social">
              <div className="socialMediaIcons">
                <Facebook />
              </div>
              <div className="socialMediaName">Facebook</div>
            </Box></a>
            <a href="https://www.instagram.com/propertiesoo/"  id="attributes"><Box className="social">
              <div className="socialMediaIcons">
                <Instagram />
              </div>
              <div className="socialMediaName">Instagram</div>
            </Box></a>
            <a href="https://www.linkedin.com/company/propertieso/" id="attributes" ><Box className="social">
              <div className="socialMediaIcons">
                <LinkedIn />
              </div>
              <div className="socialMediaName">LinkedIn</div>
            </Box></a>
            <a href="https://twitter.com/Propertiesoo" id="attributes" ><Box className="social">
              <div className="socialMediaIcons">
                <Twitter />
              </div>
              <div className="socialMediaName">Twitter</div>
            </Box></a>
            <a href="https://www.youtube.com/"  id="attributes"><Box className="social">
              <div className="socialMediaIcons">
                <YouTube />
              </div>
              <div className="socialMediaName">YouTube</div>
            </Box></a>
          </div>
        </span>
        <span className="links">
          <div className="head">Important Links</div>
          <div className="elements">
            <Link to="/privacy" id="attributes"> <Box>Privacy</Box> </Link>

            <Link to="terms" id="attributes"> <Box>Terms & Conditions</Box> </Link>

            <Link to="about" id="attributes"> <Box>About Us</Box> </Link>
          </div>
        </span>
      </div>
      <div>
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
