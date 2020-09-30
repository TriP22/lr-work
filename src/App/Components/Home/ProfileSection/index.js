import React, { Component } from "react";
import "./index.css";

class ProfileSection extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-4 d-flex justify-content-center">
          <div
            className="th-profile-avatar"
            style={{
              backgroundImage: `url(${this.props.data.avatar})`,
            }}
          ></div>
        </div>
        <div className="col-8">
          <h6 className="mb-0 th-thin th-36 text-break">
            {this.props.data.user_name}
          </h6>

          <div className="py-3 d-flex">
            <p className="mb-0 th-14">
              <span className="th-bold">{this.props.data.posts}</span> posts
            </p>
            <p className="mb-0 th-14 pl-3">
              <span className="th-bold">{this.props.data.followers}</span>{" "}
              followers
            </p>
          </div>

          <div className="th-hidden-sm">
            <h6 className="mb-0 th-16">{this.props.data.name}</h6>
            <p className="mb-0 th-14">{this.props.data.description}</p>
          </div>
        </div>
        <div className="col-12 py-3 th-hidden-md">
          <h6 className="mb-0 th-16">{this.props.data.name}</h6>
          <p className="mb-0 th-14">{this.props.data.description}</p>
        </div>
      </div>
    );
  }
}
export default ProfileSection;
