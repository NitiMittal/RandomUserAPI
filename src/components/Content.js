import React, { Component } from "react";

export default class Content extends Component {
  constructor(props) {
    super();
  }

  render() {
    const {
      item,
      onMouseEnter,
      onMouseLeave,
      isHovering,
      isHoveredEmail,
      showMail,
      shownoEmail,
      isHoveredPhone,
      isHoveredAge,
      showPhone,
      shownoPhone,
      showAge,
      shownoAge,
    } = this.props;

    return (
      <div>
        <div className="details">
          <li>
            <div className="detail">
              <img
                className="person-image"
                src={item.picture.large}
                alt={item.name.first}
              ></img>

      <center>        {isHovering && (
                <div className="person-name">
                  <center>
                    Hi, My Name is
                    <h4>
                      {item.name.first} {item.name.last}
                    </h4>
                  </center>
                </div>
              )}
              {isHoveredEmail && (
                <div className="person-email">
                  <center>
                    My Email address is<h4>{item.email}</h4>
                  </center>
                </div>
              )}
              {isHoveredAge && (
                <div className="person-birthday">
                  <center>
                    My age is<h4>{item.dob.age}</h4>
                  </center>
                </div>
              )}
              {isHoveredPhone && (
                <div className="person-phone">
                  <center>
                    My Phone is<h4>{item.phone}</h4>
                  </center>
                </div>
              )}</center>
              <div className="icons">
                <div className="icon">
                  <i
                    className="fas fa-user"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                  ></i>
                  <i
                    className="fas fa-envelope"
                    onMouseEnter={showMail}
                    onMouseLeave={shownoEmail}
                  ></i>
                  <i
                    className="far fa-calendar-alt"
                    onMouseEnter={showAge}
                    onMouseLeave={shownoAge}
                  ></i>
                  <i
                    className="fas fa-phone"
                    onMouseEnter={showPhone}
                    onMouseLeave={shownoPhone}
                  ></i>
                </div>
              </div>
            </div>
          </li>
        </div>
      </div>
    );
  }
}
