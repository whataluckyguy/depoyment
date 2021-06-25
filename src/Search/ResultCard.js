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
  halfProjectInfo,
  fullProjectInfo,
  possession,
}) => {
  const handleOnClick = (e) => {
    localStorage.setItem("projectName", projectName);
    const url = "/desc";
    window.open(url, "_blank");
  };

  const readMore = () => {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readMore");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  };
  return (
    <div>
      <Card id="Card">
        <div className="firstRow">
          <div className="Images">
            <img src={first} alt="project" id="firstImage" />
            <div className="bottomImage">
              <img src={first} alt="project" id="secondImage" />
              <img src={first} alt="project" id="secondImage" />
              <img src={first} alt="project" id="secondImage" />
            </div>
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
              <span className="icon">Propertieso Assured</span>
            </div>
            <div className="possession">Possession in {possession}</div>
            <div className="desc">
              <p>
                {halfProjectInfo}
                <span id="dots">...</span>
                <span id="more">{fullProjectInfo}</span>
                <span
                  onClick={readMore}
                  id="readMore"
                  style={{ color: "green" }}
                >
                  Read more
                </span>
              </p>
            </div>
            <div className="viewDetailsBtn">
              <Button size="small" onClick={handleOnClick}>
                View Details
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ResultCard;
