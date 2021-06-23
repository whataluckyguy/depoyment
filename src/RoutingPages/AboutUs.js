import React, { useEffect } from "react";
import "./AboutUs.css";
import house from "../Assets/house.svg";
import WhyChooseUs from "../Home/WhyChooseUs";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Partners from "../Home/Partners";

function AboutUs() {

  const scrollToTop=()=> {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  useEffect(()=>{scrollToTop()},[])

  return (
    <div>
      <Header />
      <div className="aboutsection">
        <div className="aboutText">
          <b>Propertieso.com</b> is a web aggregator founded on the principles
          of trust, honesty, and competence. At Propertieso.com, we believe that
          our homes are the heartbeat of our lives and when it comes to finding
          a home, what’s outside the front door is just as important as what’s
          behind it. That’s why we go beyond the typical listings, by sourcing
          insights straight from locals, to give people a deeper understanding
          of what living in a home and neighbourhood is really like. We help
          them discover a place where they will love to live and where they will
          feel more connected to the community and to each other. It’s why we
          strive every day to help build a more neighbourly world.
          Propertieso.com is based in India and is owned and operated by
          Propertieso Private Limited.
        </div>
        <div className="houseSVG">
          <img src={house} id="svg" alt="House Searching" />
        </div>
      </div>
      <div>
        <WhyChooseUs />
      </div>
      <Partners />
      <Footer />
    </div>
  );
}

export default AboutUs;
