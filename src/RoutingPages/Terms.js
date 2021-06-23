import React,{useEffect} from "react";
import { makeStyles } from "@material-ui/core";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 30,
    marginTop: 50,
  },
  bullets: {
    fontWeight: "bold",
  },
  terms: {
    fontSize: "20px",
  },
}));

function Terms() {
  const classes = useStyles();
  const scrollToTop=()=> {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  useEffect(()=>{scrollToTop()},[])
  return (
    <>
      <Header />
      <div className={classes.root}>
        <div className={classes.terms} align="center">
          <h1>Terms & Conditions</h1>
        </div>

        <div className={classes.bullets}>
          <li>Introduction</li>
        </div>

        <p>
          These standard terms & conditions written on this webpage shall manage
          your use of our website
          <Link to="/" style={{textDecoration:"none"}}> www.propertieso.com</Link>
        </p>
        <div className={classes.bullets}>
          <li>Intellectual Property Rights</li>
        </div>
        <p>
          Other than the content you own, under these terms, Propertieso and/or
          its licensors own all the intellectual property rights and materials
          contained in this website.
        </p>
        <div className={classes.bullets}>
          <li>Restrictions</li>
        </div>
        <p>
          Certain areas of this website are restricted from being accessed by
          you and Propertieso may further restrict access by you to any areas of
          this website, at any time in absolute discretion
        </p>
        <div className={classes.bullets}>
          <li>Your Content</li>
        </div>
        <p>
          By displaying Your Content, you grant Propertieso a non-exclusive,
          worldwide irrevocable, sub licensable license to use, reproduce,
          adapt, publish, translate and distribute it in any and all media.
        </p>
        <p>
          Your Content must be your own and must not be invading any
          third-party's rights. Propertieso reserves the right to remove any of
          Your Content from this Website at any time without notice.
        </p>
        <div className={classes.bullets}>
          <li>No warranties</li>
        </div>
        <p>
          This Website is provided “as is,” with all faults, and Propertieso
          expresses no representations or warranties of any kind related to this
          Website or the materials contained on this Website. Also, nothing
          contained on this Website shall be interpreted as advising you.
        </p>
        <div className={classes.bullets}>
          <li>Limitation of liability</li>
        </div>
        <p>
          In no event shall Propertieso, or any of its officers, directors and
          employees, be held liable for anything arising out of or in any way
          connected with your use of this Website whether such liability is
          under contract. Propertieso, including its officers, directors and
          employees, shall not be held liable for any indirect, consequential or
          special liability arising out of or in any way related to your use of
          this Website.
        </p>
        <div className={classes.bullets}>
          <li>Indemnification</li>
        </div>
        <p>
          You hereby indemnify to the fullest extent Propertieso from and
          against any and/or all liabilities, costs, demands, causes of action,
          damages and expenses arising in any way related to your breach of any
          of the provisions of these Terms.
        </p>
        <div className={classes.bullets}>
          <li>Variation of Terms</li>
        </div>
        <p>
          Propertieso is permitted to revise these Terms at any time as it sees
          fit, and by using this Website you are expected to review these Terms
          on a regular basis.
        </p>
        <div className={classes.bullets}>
          <li>Assignments</li>
        </div>
        <p>
          Propertieso is allowed to assign, transfer, and subcontract its rights
          and/or obligations under these Terms without any notification.
          However, you are not allowed to assign, transfer, or subcontract any
          of your rights and/or obligations under these Terms.
        </p>
        <div className={classes.bullets}>
          <li>Entire Agreement</li>
        </div>
        <p>
          These Terms constitute the entire agreement between Propertieso and
          you in relation to your use of this Website, and supersede all prior
          agreements and understandings.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Terms;
