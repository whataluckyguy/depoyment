import { Box, Typography } from "@material-ui/core";
import React from "react";
import "./Partners.css";
import Axis from "../Assets/BankOffers/axis.jfif";
import HDFC from "../Assets/BankOffers/hdfc.jfif";
import LT from "../Assets/BankOffers/LT.png";
import Pnb from "../Assets/BankOffers/pnb.jpg";
function Partners() {
  return (
    <>
      <h2>Shapoorji Pallonji Joyville - Bank Offers</h2>

      <div className="partners">
        <Box className="Box">
          <img src={Axis} width="200" alt="Axis" />
          <img src={HDFC} width="200" alt="HDFC" />
          <img src={LT} width="200" alt="LT" />
          <img src={Pnb} width="200" alt="Pnb" />
        </Box>
      </div>
    </>
  );
}

export default Partners;
