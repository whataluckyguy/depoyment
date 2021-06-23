import React from "react";
import "./floorPlans.css";
import { Card, Button } from "@material-ui/core";

function FloorPlans({ BHK, area, price }) {
  return (
    <div>
      <div className="secondDiv">
        <Card>
          <div className="secondLayer">
            <span>{BHK}</span>
            <span>{area}</span>
            <span>{price}</span>
            <span>
              <Button>View Details</Button>
            </span>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default FloorPlans;
