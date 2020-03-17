import React, { Component } from "react";
import EventDetails from "./EventDetails";

class EventsPage extends Component {
  state = {
    error: null,
    isLoaded: false,
    eventData: [],
    selectedDate: ""
  };

  getEventDetails = selectedDate => {
    this.setState({
      selectedDate
    });
    let url = `https://www.rijksmuseum.nl/api/nl/agenda/2020-3-17?key=yW6uq3BV&format=json`;
    fetch(url)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            eventData: result.options
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  };

  changeDateHandler = e => {
    let tempDate = this.state.selectedDate;
    // console.log(tempDate);
    // let tempDay = parseInt(tempDate.split("-")[2]);
    let currentDate;
    if (e === "pre") {
      currentDate = tempDate.replace(
        /..$/,
        parseInt(tempDate.split("-")[2]) - 1
      );
      this.setState({
        ...this.state,
        selectedDate: currentDate
      });
    } else {
      currentDate = tempDate.replace(
        /..$/,
        parseInt(tempDate.split("-")[2]) + 1
      );
      this.setState({
        ...this.state,
        selectedDate: currentDate
      });
    }
  };

  componentDidMount() {
    let selectedDate = new Date().toISOString().split("T")[0];
    // console.log("didMount");
    this.getEventDetails(selectedDate);
  }

  render() {
    // console.log("loaded", this.state);
    return (
      <>
        <div className="heading text-center">
          <h1 className="color-white">MUSEUM</h1>
        </div>
        <div className="event-date-nav color-white">
          <div className="container align-item-center">
            <div className="pull-left">{this.state.selectedDate}</div>
            <div
              className="pull-left nav-arrow"
              onClick={e => this.changeDateHandler("pre")}
            >
              <i className="arrow left" />
            </div>
            <div
              className="pull-left nav-arrow"
              onClick={e => this.changeDateHandler("next")}
            >
              <i className="arrow right" />
            </div>
          </div>
        </div>
        {this.state.eventData.map((item, i) => {
          return <EventDetails keys={i} event={item} />;
        })}
      </>
    );
  }
}

export default EventsPage;
