import React from "react";
import {Toolbar} from "../Toolbar/Toolbar.jsx";
import {ProjectList} from "../ProjectList/ProjectList.jsx";

const projects = [
  { src: "/img/200.jpg", alt: "200.jpg", category: "Flayers", },
  { src: "/img/codystretch.jpg", alt: "codystretch.jpg", category: "Portfolio", },
  { src: "/img/dia.jpg", alt: "dia.jpg", category: "Portfolio", },
  { src: "/img/emi_haze.jpg", alt: "emi_haze.jpg", category: "Portfolio", },
  { src: "/img/mon.jpg", alt: "mon.jpg", category: "Flayers", },
  { src: "/img/place200x290.png", alt: "place200x290.png", category: "Portfolio", },
  { src: "/img/place200x290_1.png", alt: "place200x290_1.png", category: "Portfolio", },
  { src: "/img/place200x290_2.png", alt: "place200x290_2.png", category: "Websites", },
  { src: "/img/place200x290_3.png", alt: "place200x290_3.png", category: "Business Cards", },
  { src: "/img/the_ninetys_brand.jpg", alt: "the_ninetys_brand.jpg", category: "Business Cards", },
  { src: "/img/transmission.jpg", alt: "transmission.jpg", category: "Flayers", },
  { src: "/img/Triangle_003.jpg", alt: "Triangle_003.jpg", category: "Flayers", },
  { src: "/img/Triangle_350x197.jpg", alt: "Triangle_350x197.jpg", category: "Flayers", },
  { src: "/img/Triangle_350x197_1.jpg", alt: "Triangle_350x197_1.jpg", category: "Websites", },


]

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.onSelectFilter = this.onSelectFilter.bind(this);
  }

  state = { selected: 'All' }

  onSelectFilter(filter) {
    this.setState({selected: filter});
    console.log(this.state.selected);
  }

  render() {
    const filters = ["All", "Websites", "Flayers", "Business Cards"];

    return (
      <>
        <div className="portfolio">
          <h1>Portfolio</h1>
          <Toolbar
            filters={filters}
            selected={this.state.selected}
            onSelectFilter={this.onSelectFilter}
          />
          <ProjectList projects={projects} filter={this.state.selected}></ProjectList>
        </div>
      </>
    )
  }
}