import React, { Component } from "react";

export default class Content extends Component {
  constructor(props) {
    super();
    this.state = {
      name: false,
      email: false,
      age: false,
      phone: false,
      limit: 2,
    };
  }
  onLoadMore = () => {
    this.setState({
      limit: this.state.limit + 2,
    });
  };
  showPersonName = () => {
    this.setState({ name: true });
  };

  noPersonName = () => {
    this.setState({ name: false });
  };

  showEmail = () => {
    this.setState({ email: true });
  };

  shownoEmail = () => {
    this.setState({ email: false });
  };

  showAge = () => {
    this.setState({ age: true });
  };

  shownoAge = () => {
    this.setState({ age: false });
  };

  showPhone = () => {
    this.setState({ phone: true });
  };

  shownoPhone = () => {
    this.setState({ phone: false });
  };
  render() {
    const { items } = this.props;

    return (
      <div>
        <div className="details">
          {items.slice(0, this.state.limit).map((item) => {
            return (
              <li>
                <div className="detail">
                  <img
                    className="person-image"
                    src={item.picture.large}
                    alt={item.name.first}
                  ></img>

                  {this.state.name ? (
                    <div className="person-name">
                      <center>
                        Hi, My Name is
                        <h4>
                          {item.name.first} {item.name.last}
                        </h4>
                      </center>
                    </div>
                  ) : null}
                  {this.state.email ? (
                    <div className="person-email">
                      <center>
                        My Email address is<h4>{item.email}</h4>
                      </center>
                    </div>
                  ) : null}
                  {this.state.age ? (
                    <div className="person-birthday">
                      <center>
                        My age is<h4>{item.dob.age}</h4>
                      </center>
                    </div>
                  ) : null}
                  {this.state.phone ? (
                    <div className="person-phone">
                      <center>
                        My Phone is<h4>{item.phone}</h4>
                      </center>
                    </div>
                  ) : null}
                  <div className="icons">
                    <div className="icon">
                      <i
                        className="fas fa-user"
                        onMouseEnter={this.showPersonName}
                        onMouseLeave={this.noPersonName}
                      >
                        {" "}
                      </i>
                      <i
                        className="fas fa-envelope"
                        onMouseEnter={this.showEmail}
                        onMouseLeave={this.shownoEmail}
                      ></i>
                      <i
                        className="far fa-calendar-alt"
                        onMouseEnter={this.showAge}
                        onMouseLeave={this.shownoAge}
                      ></i>
                      <i
                        className="fas fa-phone"
                        onMouseEnter={this.showPhone}
                        onMouseLeave={this.shownoPhone}
                      ></i>
                    </div>{" "}
                  </div>
                </div>
              </li>
            );
          })}
        </div>
        <center>
          <button type="button" class="btn btn-info" onClick={this.onLoadMore}>
            Load more...
          </button>
        </center>
      </div>
    );
  }
}
