import React, { Component } from "react";
import Logo from "../../../Assets/img/logo.png";

class Footer extends Component {
  render() {
    return (
      <div className="bg-light py-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-4">
              <a href="https://letsroll.live/">
                <div
                  className="th-footer-logo"
                  style={{ backgroundImage: `url(${Logo})` }}
                ></div>
              </a>

              <h6 className="mt-3">letsroll.live</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
