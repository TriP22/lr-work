import React, { Component } from "react";
import "../../Assets/css/Home.css";
import ProfileSection from "../../Components/Home/ProfileSection";
import GallerySection from "../../Components/Home/GallerySection";

const data = {
  profile_section: {
    user_name: "photu_wali_girl",
    name: "Jamnawati Tyagi",
    description:
      "Your brand, fan-base, and business tools all in one place. A customizable website, fan email collection, ticketed events, VIP clubs, Marketing, Analytics, and more.​",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    posts: "11",
    followers: "250",
  },
  gallery: [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1504567961542-e24d9439a724?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1543348750-466b55f32f16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 10,
      image:
        "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
  ],
};

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = "LR | Home";
  }
  render() {
    return (
      <div className="container py-md-4">
        <div className="row py-md-4 py-3">
          <div className="col-12">
            <ProfileSection data={data.profile_section} />
          </div>
        </div>
        <hr />
        <div className="row py-md-4 py-3">
          <div className="col-12">
            <div>
              <h6 className="th-bold">Gallery</h6>
            </div>
            <GallerySection data={data.gallery} />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
