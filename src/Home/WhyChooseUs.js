import { Box, Card, makeStyles, Typography } from "@material-ui/core";
import "./WhyChooseUs.css";
import RealStateConsultant from "../Assets/ChooseUs/RealStateConsultant.jpg";
import LegalConsultancy from "../Assets/ChooseUs/LegalConsultancy.jpg";
import AfterSalesAssistance from "../Assets/ChooseUs/AfterSalesAssistance.jpg";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 20,
    textAlign: "center",
    padding: 20,
  },
});

function WhyChooseUs({ title, desc, logo }) {
  const classes = useStyles();
  return (
    <div className="main">
      <Box textAlign="center">
        <Typography variant="h3" gutterBottom className="head">
          Why Choose Us?
        </Typography>
      </Box>
      <div className="sections">
        <div className="element">
          <Card className={classes.root}>
            <Box>
              <img
                src={RealStateConsultant}
                alt="Real State Consultant"
                className="image"
              />
            </Box>
            <Box className="heading">Real Estate Consulting</Box>
            <Box className="desc">
              Those days are now gone when purchasing a home used to be a very
              arduoud task and buyers had to run from pillar to post to get
              everything in place. With our one-stop solutions for all your
              realty needs, we can assist you throughout the ownership cycle,
              from searching the property to identifying the best-fit deal and
              the final closure of the transation.
            </Box>
          </Card>
        </div>
        <div className="element">
          <Card className={classes.root}>
            <Box>
              <img
                src={AfterSalesAssistance}
                alt="After Sales Assistance"
                className="image"
              />
            </Box>
            <Box className="heading">After Sales Assistance</Box>
            <Box className="desc">
              Our services do not stop once the deal is closed. We are commited
              to assisting our customres in every possible way. We have been
              pushing the realms of client servicing in Indian realty through
              our dedicated CRM team that continues to help our clients with all
              their documentations need during the post-transactional phases.
            </Box>
          </Card>
        </div>
        <div className="element">
          <Card className={classes.root}>
            <Box>
              <img
                src={LegalConsultancy}
                alt="Legal Consultancy"
                className="image"
              />
            </Box>
            <Box className="heading">Legal Consultance</Box>
            <Box className="desc">
              Propertieso are not limited to supporting purchase/selling
              transactions in the real-estate domain. We walk with our clients
              all the way, assisting them with all the aspects that go on in any
              real-estate deal. We have experts onboard who provide support on
              legal matters pertaining to any property that the customer is keen
              to invest in.
            </Box>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
