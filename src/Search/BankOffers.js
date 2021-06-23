import React from "react";
import "./BankOffers.css";
import Axis from "../Assets/BankOffers/axis.jfif";
import HDFC from "../Assets/BankOffers/hdfc.jfif";
import LT from "../Assets/BankOffers/LandT.jpg";
import Pnb from "../Assets/BankOffers/pnb.jpg";
import { Card } from "@material-ui/core";

function BankOffers() {
  return (
    <div className="bankOffers">
      <Card id="card">
        <img className="bank" src={Axis} alt="Axis" />
      </Card>
      <Card id="card">
        <img className="bank" src={HDFC} alt="HDFC" />
      </Card>
      <Card id="card">
        <img className="bank" src={LT} alt="L&T Finance" />
      </Card>
      <Card id="card">
        <img className="bank" src={Pnb} alt="PnB" />
      </Card>
    </div>
  );
}

export default BankOffers;
