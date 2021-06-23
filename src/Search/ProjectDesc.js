import React,{useEffect,useState} from "react";
import "./ProjectDesc.css";
import First from "../Assets/SearchResult/1.jpg";
import Second from "../Assets/SearchResult/2.jpg";
import Third from "../Assets/SearchResult/3.jpg";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import BankOffers from "./BankOffers";
import { Card, Paper } from "@material-ui/core";
import db from "../Firebase/firebase";

function ProjectDesc({
  projectName,
  briefAddress,
  projectStatus,
  projectType,
  possession,
  propertyType,
  totalTowers,
  totalUnits,
  projectArea,
  fullAddress1,
  fullAddress2,
  projectInfo,
  aboutDeveloper,
  developerName

}) {
  const scrollToTop=()=> {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


  
  useEffect(()=>{scrollToTop()},[]);

  const [results, setResults] = useState([]);

  useEffect(() => {
    let localProjectName = localStorage.getItem('projectName');
    db.collection("projects").where('projectName','==', localProjectName)
    .get()
    .then((querySnapshot)=>{
      querySnapshot.forEach((doc)=>{
        setResults(doc.data())
      });
    })
    .catch((error)=>{
      alert("Error getting documents:",error);
    }); 
  }, []);

  return (
    <>
      <Header />
      <div className="root">
        <div className="brief">
          <div className="projectImages">
            <div>
              <img src={First} alt="first" id="firstImage" />
            </div>
            <div>
              <div>
                <img src={Second} alt="second" id="secondImage" />
              </div>
              <div>
                <img src={Third} alt="third" id="thirdImage" />
              </div>
            </div>
          </div>
          <div className="projectTitle">
            <div className="NameOfProject">{results.projectName}</div>
            <span className="address">{results.briefAddress}</span>
          </div>
          {/* <div className="floorPlansBrief">
            <Card className="secondLayer">
              <span>2 BHK Flat</span>
              <span>1261 - 1433 sqft</span>
              <span>₹ 1.23 Cr - 1.57 Cr</span>
              <span>
                <Button className="callNow">Call Now</Button>
              </span>
            </Card>
            <Card className="secondLayer">
              <span>3 BHK Flat</span>
              <span>1828 - 2054 sqft</span>
              <span>₹ 2.01 Cr - 2.31 Cr</span>
              <span>
                <Button className="callNow">Call Now</Button>
              </span>
            </Card>
          </div> */}
        </div>
        <div className="projectOverview">
          <div className="projectTitle">
            <h2>Project Overview : {results.projectName}</h2>
            <div className="overview">
              <div className="overviewElements">
                <span>
                  <div>
                    <div className="top">Status</div>
                    <div className="bottom">{results.projectStatus}</div>
                  </div>
                  <div>
                    <div className="top">Project Type</div>
                    <div className="bottom">{results.projectType}</div>
                  </div>
                </span>
              </div>
              <div className="overviewElements">
                <span>
                  <div>
                    <div className="top">Possession By</div>
                    <div className="bottom">{results.possession}</div>
                  </div>
                  <div>
                    <div className="top">Property Type</div>
                    <div className="bottom">{results.propertyType}</div>
                  </div>
                </span>
              </div>
              <div className="overviewElements">
                <span>
                  <div>
                    <div className="top">Total Units</div>
                    <div className="bottom">{results.totalUnits}</div>
                  </div>
                  <div>
                    <div className="top">Project Area</div>
                    <div className="bottom">{results.projectArea}</div>
                  </div>
                </span>
              </div>
              <div className="overviewElements">
                <span>
                  <div>
                    <div className="top">Total Towers</div>
                    <div className="bottom">{results.totalTowers}</div>
                  </div>
                  <div>
                    <div className="top">Full Address</div>
                    <div className="bottom">
                      <div>{results.fullAddress1}</div>
                      <div>{results.fullAddress2}</div>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="projectInfo">
          <div className="projectTitle">
            <h2>{results.projectName} - Project Info</h2>
          </div>
          <div className="information">
            {results.projectInfo}
          </div>
          <div className="floorPlans">
            <h2 className="bhk">2 BHK Floor Plans</h2>
            <div className="two-bhk-plans">
              <Paper elevation={3} className="paper">
                <div className="paper__content">
                  <img
                    src={Second}
                    alt="2 BHK Plans"
                    className="floor__plans__img"
                  />
                  <h3>Shapoorji Pallonji</h3>
                </div>
              </Paper>
              <Paper elevation={3} className="paper">
                <div className="paper__content">
                  <img
                    src={Second}
                    alt="2 BHK Plans"
                    className="floor__plans__img"
                  />
                  <h3>Shapoorji Pallonji</h3>
                </div>
              </Paper>
              <Paper elevation={3} className="paper">
                <div className="paper__content">
                  <img
                    src={Second}
                    alt="2 BHK Plans"
                    className="floor__plans__img"
                  />
                  <h3>Shapoorji Pallonji</h3>
                </div>
              </Paper>
              <Paper elevation={3} className="paper">
                <div className="paper__content">
                  <img
                    src={Second}
                    alt="2 BHK Plans"
                    className="floor__plans__img"
                  />
                  <h3>Shapoorji Pallonji</h3>
                </div>
              </Paper>
            </div>
            <h2 className="bhk">3 BHK Floor Plans</h2>
            <div className="three-bhk-plans">
              <Paper elevation={3} className="paper">
                <div className="paper__content">
                  <img
                    src={Third}
                    alt="3 BHK Plans"
                    className="floor__plans__img"
                  />
                  <h3>Shapoorji Pallonji</h3>
                </div>
              </Paper>
              <Paper elevation={3} className="paper">
                <div className="paper__content">
                  <img
                    src={Third}
                    alt="3 BHK Plans"
                    className="floor__plans__img"
                  />
                  <h3>Shapoorji Pallonji</h3>
                </div>
              </Paper>
              <Paper elevation={3} className="paper">
                <div className="paper__content">
                  <img
                    src={Third}
                    alt="3 BHK Plans"
                    className="floor__plans__img"
                  />
                  <h3>Shapoorji Pallonji</h3>
                </div>
              </Paper>
              <Paper elevation={3} className="paper">
                <div className="paper__content">
                  <img
                    src={Third}
                    alt="3 BHK Plans"
                    className="floor__plans__img"
                  />
                  <h3>Shapoorji Pallonji</h3>
                </div>
              </Paper>
            </div>
          </div>
        </div>
        <div className="amenities">
          <Card>
            <h2 className="amenity__title">
              Shapoorji Pallonji Joyville - Amenities
            </h2>
            <div className="amenity__name">
              <div className="amenity--columns">Sports</div>
              
              <div className="amenity--columns">
                <div className="amenity__list">
                  <li>Gymnasium</li>
                </div>

                <div className="amenity__list">
                  <li>Kid's Pool</li>{" "}
                </div>

                <div className="amenity__list">
                  <li>Tennis Court</li>
                </div>

                <div className="amenity__list">
                  <li>Kid's Play Area</li>
                </div>

                <div className="amenity__list">
                  <li>Joggin / Cycling Track</li>
                </div>

                <div className="amenity__list">
                  <li>Snooker/Pool/Billiards</li>
                </div>
              </div>

              <div className="amenity--columns">
                <div className="amenity__list">
                  <li>Swimming Pool</li>
                </div>
                <div className="amenity__list">
                  <li>Badminton Court</li>
                </div>
                <div className="amenity__list">
                  <li>Squash Court</li>
                </div>
                <div className="amenity__list">
                  <li>Basketball</li>
                </div>
                <div className="amenity__list">
                  <li>Yoga Area</li>
                </div>
                <div className="amenity__list">
                  <li>Table Tennis</li>
                </div>
              </div>
            </div>
            <div className="amenity__name">
              <div className="amenity--columns">Convenience</div>
              <div className="amenity--columns">
                <div className="amenity__list">
                  <li>Power Backup</li>
                </div>
                <div className="amenity__list">
                  <li>Lift</li>
                </div>
              </div>

              <div className="amenity--columns">
                <div className="amenity__list">
                  <li>24 x 7 Water Supply</li>
                </div>
              </div>
            </div>
            <div className="amenity__name">
              <div className="amenity--columns">Safety</div>
              <div className="amenity--columns">
                <div className="amenity__list">
                  <li>24 x 7 Security</li>
                </div>
                <div className="amenity__list">
                  <li>Fire Fighting Systems</li>
                </div>
                <div className="amenity__list">
                  <li>Video Phone</li>
                </div>
              </div>

              <div className="amenity--columns">
                <div className="amenity__list">
                  <li>CCTV Surveillance</li>
                </div>
                <div className="amenity__list">
                  <li>Intercom Facility</li>
                </div>
              </div>
            </div>
            <div className="amenity__name">
              <div className="amenity--columns">Leisure</div>
              <div className="amenity--columns">
                <div className="amenity__list">
                  <li>Reading Room</li>
                </div>
                <div className="amenity__list">
                  <li>Party Hall</li>
                </div>
                <div className="amenity__list">
                  <li>Indoor Games</li>
                </div>
                <div className="amenity__list">
                  <li>Luxurious Clubhouse</li>
                </div>
              </div>

              <div className="amenity--columns">
                <div className="amenity__list">
                  <li>Sauna</li>
                </div>
                <div className="amenity__list">
                  <li>Cards Room</li>
                </div>
                <div className="amenity__list">
                  <li>Spa</li>
                </div>
                <div className="amenity__list">
                  <li>Jacuzzi</li>
                </div>
              </div>
            </div>
            <div className="amenity__name">
              <div className="amenity--columns">Environment</div>
              <div className="amenity--columns">
                <div className="amenity__list">
                  <li>Rain Water Harvesting</li>
                </div>
                <div className="amenity__list">
                  <li>Normal Park / Central Park</li>
                </div>
              </div>

              <div className="amenity--columns">
                <div className="amenity__list">
                  <li>Sewage Treatment</li>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="BankOffers">
          <h2>Bank Offers</h2>
        </Card>

        <BankOffers />

        <div className="aboutBuilder">
          <Paper className="aboutBuilder">
            <h2 className="aboutHead">About {results.developerName}</h2>
            <div className="aboutBuilderSection">
              {results.aboutDeveloper}
            </div>
          </Paper>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProjectDesc;
