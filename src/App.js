import React, { Component } from "react";
import "./App.css";
import Content from "./components/Content";
import Loader from "./components/Loader";

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      items: [],
      loading: false,
    };
  }
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          items: response.results,
          loading: true,
        });
      });
  }
  render() {
    const { items, loading } = this.state;

    if (!loading) {
      return <Loader></Loader>;
    } else {
      return <Content items={items}></Content>;
    }
  }
}
