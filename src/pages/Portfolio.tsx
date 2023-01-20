import React from "react"
import bookcoverImage from "../assets/bookcover.jpg"
import "./Portfolio.css"
import diggerImage from "../assets/digger.jpg"
import Digger from "../components/Digger"

const Portfolio: React.FC = () => {
  return (
    <div className="Portfolio-container">
      <h1>Portfolio</h1>

      <div className="Portfolio-item">
        <div className="Portfolio-img">
          <img src={bookcoverImage} alt="" />
        </div>
        <div className="Portfolio-description">
          <div className="Description-row">
            <span className="Label">Tech:</span>
            <span className="Answer">HTML + Css</span>
          </div>
          <div className="Description-row">
            <span className="Label">Link:</span>
            <span className="Answer">
              <a href="https://marmicel.github.io/BookCover/" target="_blank">
                Book Cover
              </a>
            </span>
          </div>
          <div className="Description-row">
            <span className="Label">Github:</span>
            <span className="Answer">
              <a href="https://github.com/marmicel/BookCover" target="_blank">
                Code
              </a>
            </span>
          </div>
          <div className="Description-row">
            <div className="Description-label">Description:</div>
            <span className="Answer">
              I copied this book cover as an exercise. To practice what i
              learned when doing online course in HTML and Css.
            </span>
          </div>
        </div>
      </div>

      <div className="Portfolio-item Column">
        <div className="Portfolio-Digger">
          <Digger></Digger>
        </div>
        <div className="Portfolio-description">
          <div className="Description-row">
            <span className="Label">Tech:</span>
            <span className="Answer">HTML + Css</span>
          </div>
          <div className="Description-row">
            <span className="Label">Link:</span>
            <span className="Answer">
              <a href="https://marmicel.github.io/Digger/" target="_blank">
                Digger
              </a>
            </span>
            <div className="Description-row">
              <span className="Label">Github:</span>
              <span className="Answer">
                <a href="https://github.com/marmicel/Digger" target="_blank">
                  Code
                </a>
              </span>
            </div>
            <div className="Description-row">
              <div className="Description-label">Description:</div>
              <span className="Answer">
                On this project I made an animation in pure css. This challenge
                me to learn more about animation frame.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Portfolio
