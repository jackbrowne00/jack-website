import React from "react";
import "../../App.scss";
import "./Home.scss";
import profilePicture from "../../images/homeProfileImage.jpg";
import ListIconBlock from "../../components/ListIconBlock/ListIconBlock";

function Home() {
  return (
    <div className="homeContainer">
      <div className="homeHeader">
        <div className="homeHeaderContainer">
          <div className="homeHeaderText">
            <h1 className="homeHeaderH1">Hey, i'm Jack Browne</h1>
            <h2 className="homeHeaderH2">I'm a Software Engineer</h2>
          </div>
          <div className="homeHeaderImgContainer">
            <img src={profilePicture} alt="Logo" className="homeHeaderImg" />
          </div>
        </div>
      </div>
      <ListIconBlock title="About Me" />

      {/* <div className="aboutMe">
                <div className="aboutMeContainer">
                    <h3 className="aboutMeTitle">About Me</h3>
                    <div className="aboutMeContent">
                        {AboutMeData.map((item, index) => {
                            return (
                                <div className={item.aboutContentCName}>
                                    <a className={item.iconCName} href="https://javascript.com">
                                    {item.icon}
                                    </a>
                                    <div className={item.textCName}>
                                    {item.text}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div> */}

      <div className="emptyContainer"></div>
    </div>
  );
}

export default Home;
