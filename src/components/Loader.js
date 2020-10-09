import React, { Component } from "react";
import loading from "../images/loading.gif";

export default class Loader extends Component {
  render() {
    return (
      <div className="loader center">
        <img src={loading}></img>
        Loading...
      </div>
    );
  }
}
