import React,{useEffect} from "react";
import { makeStyles } from "@material-ui/core";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 30,
    marginTop: 50,
  },
  policies: {
    textAlign: "justify",
    textJustify: "inter-word",
  },
  policyHead: {
    fontSize: "20px",
  },
}));

function Privacy() {
  
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
        <div className={classes.policyHead} align="center">
          <h1>Privacy Policies</h1>
        </div>
        <div className={classes.policies}>
          <p>
            To be able to provide the most relevant information and access to
            relevant data you might be required to provide some personal
            information, share specifics and get desired information.
          </p>
          <p>
            The IP address of the users might be tracked and information saved
            in the form of cookies, the user reserves the right to accept /
            decline the cookies by changing the settings of the browser. Any
            personal information provided shall not be shared without prior
            consent with any third party, general information however may be
            revealed. The user shall be asked to fill in the details while
            registering only and every effort would be made to secure the
            information.
          </p>
          <p>
            The user shall be responsible in entirety for making any
            transactions with any means / forms of instruments and Propertieso
            shall have no liability / responsibility whatsoever in regard to the
            acts of the user. In the endeavour to provide world class experience
            Propertieso might use the general information shared by the user to
            improve upon the service standards and provide efficient and
            customized experience & to improve marketing and promotional
            efforts. The user agrees that Propertieso shall use the personal
            information provided to deliver the information on areas of interest
            of the user through various promotional means and varied products.
            The user reserves the right to select the services offered on the
            website.
          </p>
          <p>
            Propertieso complies with all Indian Laws applicable and shall
            cooperate with all law enforcement inquiries in regards to sharing
            of personal details as and when asked for. All reasonable efforts
            have been made to ensure that the information on the site is
            authentic. Users are advised to research bonafide of advertisers
            independently. Propertieso shall have no responsibility whatsoever
            in this regard.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Privacy;
