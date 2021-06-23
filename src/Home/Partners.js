import { Box, Typography } from "@material-ui/core";
import React from "react";
import "./Partners.css";
import aipl from "../Assets/Partners/aipl.png";
import ats from "../Assets/Partners/ats.png";
import DLF from "../Assets/Partners/DLF.png";
import ELAN from "../Assets/Partners/ELAN.png";
import EMAR from "../Assets/Partners/EMAR.png";
import godrej from "../Assets/Partners/godrej.png";
function Partners() {
  return (
    <>
      <Box textAlign="center">
        <Typography variant="h4">Our Partners</Typography>
      </Box>
      <div className="partners">
        <Box>
          <img src={aipl} alt="" />
          <img src={ats} alt="" />
          <img src={DLF} alt="" />
          <img src={ELAN} alt="" />
          <img src={EMAR} alt="" />
          <img src={godrej} alt="" />
        </Box>
      </div>
    </>
  );
}

export default Partners;
