import React, { Component } from "react";
import Logo from "../../../Assets/img/logo.png";

class Header extends Component {
  render() {
    return (
      <div className="bg-dark py-3 ">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-4">
              <a href="https://letsroll.live/">
                <div
                  className="th-header-logo"
                  style={{ backgroundImage: `url(${Logo})` }}
                ></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
