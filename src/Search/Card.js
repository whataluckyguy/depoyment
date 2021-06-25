import React from "react";

function Card() {
  return (
    <div>
      <Card>
        <div className="firstRow">
          <div className="Images">
            <img src={first} alt="project" className="firstImage" />
            <div>
              <img src={first} alt="project" className="secondImage" />
              <img src={first} alt="project" className="secondImage" />
              <img src={first} alt="project" className="secondImage" />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Card;
