import React from "react";
import "./ResultCard.css";
import { Button, Card } from "@material-ui/core";
import first from "../Assets/SearchResult/1.jpg";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

const ResultCard = ({
  projectName,
  briefAddress,
  minPrice,
  maxPrice,
  projectInfo,
  possession,
}) => {

  const handleOnClick =(e)=>{
    localStorage.setItem('projectName', projectName);
    const url ="/desc";
    window.open(url,'_blank');
  }

  return (
    <div>
      <Card className="card">
        <div className="fistLayer">
          <div className="Images">
            <img src={first} alt="project" className="firstImage" />

            <div className="secondLayerOfImg">
              <div>
                <img src={first} alt="project" className="secondImage" />
              </div>
              <div>
                <img src={first} alt="project" className="secondImage" />
              </div>
              <div>
                <img src={first} alt="project" className="secondImage" />
              </div>
            </div>
            <Button size="small" id="morePhotos">More photos</Button>
          </div>
          <div className="brief">
            <div className="title">{projectName}</div>
            <div className="address">{briefAddress}</div>
            <div className="price">
              {minPrice} {maxPrice}
            </div>
            <div className="assured">
              <span className="icon">
                <VerifiedUserIcon className="verified" />
              </span>
              <span>Propertieso Assured</span>
            </div>
            <div className="possession">Possession in {possession}</div>
            <div className="desc">{projectInfo}</div>
          </div>
        </div>
        
        <div className="viewDetails" >
        <Button size="small" onClick={handleOnClick}>View Details</Button>
        </div>
      </Card>
    </div>
  );
};

export default ResultCard;
