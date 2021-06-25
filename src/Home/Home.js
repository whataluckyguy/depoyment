import React, { useState } from "react";
import "./Home.css";
import Video from "../Assets/video.mp4";
import { Button, Select, FormControl, MenuItem } from "@material-ui/core";

function Welcome({ onSearch }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  const handleEnterKeyPressed = (e) => {
    if (e.key === "Enter") {
      localStorage.setItem("myLocalQuery", query);
      localStorage.setItem("category", category);

      const url = "/result";
      window.open(url, "_blank");
    }
  };

  const handleOnClick = (e) => {
    localStorage.setItem("myLocalQuery", query);
    localStorage.setItem("category", category);
    const url = "/result";
    window.open(url, "_blank");
  };

  return (
    <div className="videoSection">
      <div className="searchbar">
        <FormControl variant="outlined">
          <Select
            value={category}
            className="category"
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value="city">Location</MenuItem>
            <MenuItem value="projectName">Project Name</MenuItem>
            <MenuItem value="developerName">Developer Name</MenuItem>
          </Select>
        </FormControl>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleEnterKeyPressed}
          placeholder="Type keyword: Project Name, Developer..."
        />
        <Button variant="outlined" className="Button" onClick={handleOnClick}>
          Search
        </Button>
      </div>
      <div className="videoContainer">
        <video autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Welcome;
