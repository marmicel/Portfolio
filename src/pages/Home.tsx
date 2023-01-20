import React from "react"
import "./Home.css"
import profileImage from "../assets/profile.jpg"
import LocationIcon from "../components/LocationIcon"
import scandicImage from "../assets/scandic.jpeg"
import lingioImage from "../assets/lingio.jpg"

const Home: React.FC = () => {
  return (
    <div>
      <ul className="Details">
        <h1>Naome Celmar</h1>
        <div>FrontEnd Developer | QA</div>
        <div>React.Js, Css</div>
        <div>
          <LocationIcon></LocationIcon> Örebro, Sweden
        </div>
      </ul>
      <div className="Lower-box">
        <img className="Profile-img" src={profileImage} alt="" />
        <h3>Experience</h3>
      </div>
      <div className="Lower-experience">
        <div className="Experience-row">
          <img className="Experience-img" src={scandicImage} alt="" />
          <div className="Experience-description">
            <h3>Housekeeping Attendant</h3>
            <p>Scandic Hotel * Part Time</p>
            <p>May 2022 - Present * 9 mos</p>
            <p>Örebro, Örebro County, Sweden</p>
          </div>
        </div>

        <div className="Experience-row">
          <img className="Experience-img" src={lingioImage} alt="" />
          <div className="Experience-description">
            <h3>Administrative Aide</h3>
            <p>Lingio * Part-Time</p>
            <p>Nov 2019 - Mar 2020 * 5 mos</p>
            <p>Davao, Davao City, Philippines</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
