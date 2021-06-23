import React from "react";
import "./App.css";

// Components

import Home from "./Home/Home";
import Featured from "./Home/Featured";
import Collection from "./Home/Collection";
import { Box, Typography } from "@material-ui/core";
import WhyChooseUs from "./Home/WhyChooseUs";
import PropertyType from "./Home/PropertyType";
import Birla from "./Assets/Featured/birla.jpg";
import DLS from "./Assets/Featured/dls.jpg";
import Godrej from "./Assets/Featured/godrej.jpg";
import Mahindra from "./Assets/Featured/Mahindra.png";
import plots from "./Assets/Collection/plots.png";
import budget from "./Assets/Collection/affordable.png";
import Premium from "./Assets/Collection/pre.aspx";
import luxury from "./Assets/Collection/luxury.jpg";
import Partners from "./Home/Partners";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import construction from "./Assets/Property/construction.jpg";
import ready from "./Assets/Property/ready.jpg";
import gurugram from "./Assets/Property/gurugram.jpg";
import delhi from "./Assets/Property/delhi.jpg";


const App = () => {

  
  

// const onSearch = (e)=>{
//   collectionRef.onSnapshot((snapshot)=>
//   setResults(snapshot.docs.map((doc)=>doc.data())));
//   const url ="/result"
//   window.open(url,'_blank');
// }

  return (
    <div className="app">
      <Header />
      {/* Welcome Section */}
      <Home />


      {/* Trending/Featured Projects */}
      <div className="featured">
        <Typography variant="h2">Featured Projects</Typography>
      </div>
      <div className="present">
        <Featured title="Birla" image={Birla} />
        <Featured title="Godrej" image={Godrej} />
        <Featured title="Mahindra" image={Mahindra} />
        <Featured title="DLS" image={DLS} />
      </div>
      {/* Property Type */}
      <PropertyType
        title="Project Status"
        input1="Under Contruction"
        input2="Ready To Move"
        image1={construction}
        image2={ready}
      />
      {/* Collection */}
      <Box textAlign="center">
        <Typography variant="h4">Hand Pick Collections</Typography>
      </Box>
      <div className="present">
        <Collection image={plots} title="Plots" />
        <Collection image={budget} title="Budget Friendly" />
        <Collection image={Premium} title="Premium" />
        <Collection image={luxury} title="Luxury" />
      </div>
      <PropertyType
        title="Location"
        input1="Delhi"
        input2="Gurugram"
        image1={delhi}
        image2={gurugram}
      />
      {/* Why choose us? */}
      <WhyChooseUs />
      {/* Developers */}
      <Partners />
      <Footer />
    </div>
  );
};

export default App;
