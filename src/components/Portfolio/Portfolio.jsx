import React from "react";
import {Toolbar} from "../Toolbar/Toolbar.jsx";
import {ProjectList} from "../ProjectList/ProjectList.jsx";

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
          <ProjectList></ProjectList>
        </div>
      </>
    )
  }
}