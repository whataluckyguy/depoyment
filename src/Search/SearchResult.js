import React, { useEffect, useState } from "react";
import "./SearchResult.css";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import ResultCard from "./ResultCard";
import db from "../Firebase/firebase";

const SearchResult = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);
  const [results, setResults] = useState([]);

  useEffect(() => {
    let localQuery = localStorage.getItem("myLocalQuery");
    let category = localStorage.getItem("category");
    if (localQuery === "" && category === "") {
      db.collection("projects").onSnapshot((snapshot) =>
        setResults(snapshot.docs.map((doc) => doc.data()))
      );
    } else if (category === "city" && localQuery !== "") {
      db.collection("projects")
        .where("city", "<=", localQuery)
        .onSnapshot((snapshot) =>
          setResults(snapshot.docs.map((doc) => doc.data()))
        );
    } else if (category === "city" && localQuery === "") {
      db.collection("projects").onSnapshot((snapshot) =>
        setResults(snapshot.docs.map((doc) => doc.data()))
      );
    } else if (category === "projectName" && localQuery !== "") {
      db.collection("projects")
        .where("projectName", "<=", localQuery)
        .onSnapshot((snapshot) =>
          setResults(snapshot.docs.map((doc) => doc.data()))
        );
    } else if (category === "projectName" && localQuery === "") {
      db.collection("projects").onSnapshot((snapshot) =>
        setResults(snapshot.docs.map((doc) => doc.data()))
      );
    } else if (category === "developerName" && localQuery !== "") {
      db.collection("projects")
        .where("developerName", "<=", localQuery)
        .onSnapshot((snapshot) =>
          setResults(snapshot.docs.map((doc) => doc.data()))
        );
    } else if (category === "developerName" && localQuery === "") {
      db.collection("projects").onSnapshot((snapshot) =>
        setResults(snapshot.docs.map((doc) => doc.data()))
      );
    }
  }, []);

  return (
    <>
      <Header />
      <div className="Routing">
        {results.map((project) => (
          <div className="resultCard">
            <ResultCard
              projectName={project.projectName}
              briefAddress={project.briefAddress}
              minPrice={project.minPrice}
              maxPrice={project.maxPrice}
              halfProjectInfo={project.halfProjectInfo}
              fullProjectInfo={project.fullProjectInfo}
              possession={project.possession}
            />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default SearchResult;
