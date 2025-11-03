import React from "react";
import DocumentGrid from "../components/DocumentGrid";
import "../styles/document-grid.css"
import "../styles/Home.css";

function Home() {
  return (
      <div className="home-container">
        <h1 className="home-heading">
          Choose Your Document <br />
          <span className="home-subtitle">Quickly generate the file you need.</span>
        </h1>
        <DocumentGrid />   
      </div>
  );
}

export default Home;
