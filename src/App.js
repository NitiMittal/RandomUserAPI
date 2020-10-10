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
      isHovered:{},
      isHoveredAge:{},
      isHoveredEmail:{},
      isHoveredPhone:{},
      limit:2
    };
  }
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          items: response.results,
          loading: true
        });
      });
  }

  handleMouseEnter = index => {
    this.setState(prevState => {
      return { isHovered: { ...prevState.isHovered, [index]: true } };
    });
  };

  handleMouseLeave = index => {
    this.setState(prevState => {
      return { isHovered: { ...prevState.isHovered, [index]: false } };
    });
  };

  showEmail=index=>{
    this.setState(prevState => {
      return { isHoveredEmail: { ...prevState.isHoveredEmail, [index]: true } };
    });
  }

  shownoEmail=index=>{
    this.setState(prevState => {
      return { isHoveredEmail: { ...prevState.isHoveredEmail, [index]: false } };
    });
  }

  showAge=index=>{
    this.setState(prevState => {
      return { isHoveredAge: { ...prevState.isHoveredAge, [index]: true } };
    });
  }

  shownoAge=index=>{
    this.setState(prevState => {
      return { isHoveredAge: { ...prevState.isHoveredAge, [index]: false } };
    });
  }

  showPhone=index=>{
    this.setState(prevState => {
      return { isHoveredPhone: { ...prevState.isHoveredPhone, [index]: true } };
    });
  }

  shownoPhone=index=>{
    this.setState(prevState => {
      return { isHoveredPhone: { ...prevState.isHoveredPhone, [index]: false } };
    });
  }
  onLoadMore = () => {
    this.setState({
      limit: this.state.limit + 2,
    });
  };

  render() {
    const { items, loading,isHovered,limit,isHoveredEmail,isHoveredAge,isHoveredPhone} = this.state;

    if (!loading) {
      return <Loader></Loader>;
    } 
      return (
        <div>
       { items.slice(0,limit).map((item,index)=>{
         return <Content 
          onMouseEnter={() => this.handleMouseEnter(index)}
          onMouseLeave={() => this.handleMouseLeave(index)}
          showMail={()=>this.showEmail(index)}
          shownoEmail={()=>this.shownoEmail(index)}
          showAge={()=>this.showAge(index)}
          shownoAge={()=>this.shownoAge(index)}
          showPhone={()=>this.showPhone(index)}
          shownoPhone={()=>this.shownoPhone(index)}
          item={item}
          isHoveredEmail={isHoveredEmail[index]}
          isHoveredAge={isHoveredAge[index]}
          isHoveredPhone={isHoveredPhone[index]}
          isHovering={isHovered[index]}
              key={index}></Content>
        })}
        
       <center><button type="button" class="btn btn-info" onClick={this.onLoadMore}>
            Load more...
          </button></center> </div>
      )
    
  }
}
