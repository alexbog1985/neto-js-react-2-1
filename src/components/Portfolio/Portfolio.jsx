import React from "react";
import {Toolbar} from "../Toolbar/Toolbar.jsx";
import {ProjectList} from "../ProjectList/ProjectList.jsx";

export default class Portfolio extends React.Component {
  render() {
    return (
      <>
        <div className="portfolio">
          <h1>Portfolio</h1>
          <Toolbar></Toolbar>
          <ProjectList></ProjectList>
        </div>
      </>
    )
  }
}