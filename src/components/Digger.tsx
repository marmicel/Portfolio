import React from "react"
import "./Digger.css"

const Digger: React.FC = () => {
  return (
    <div className="digger-container">
      <div className="arm">
        <div className="hook">
          <div className="hook-pt1-right"></div>
          <div className="hook-pt1-left"></div>
          <div className="bucket">
            <div className="bucket-paint"></div>
            <div className="diagonal"></div>
            <div className="right"></div>
            <div className="bottom"></div>
          </div>
        </div>
        <div className="shoulder">
          <div className="arm-pt1-left"></div>
          <div className="arm-pt2-left"></div>
          <div className="arm-circle"></div>
          <div className="arm-pt1-right"></div>
          <div className="arm-pt2-right"></div>
        </div>
      </div>
      <div className="machine-body">
        <div className="cabin-left"></div>
        <div className="cabin-window-front"></div>
        <div className="cabin-bottom-left"></div>
        <div className="cabin-bottom"></div>
        <div className="inside-cabin"></div>
        <div className="inside-cabin-bottom"></div>
        <div className="engine">LK GRÄV</div>
      </div>
      <div className="machine-track">
        <div className="footing"></div>
        <div className="inside-trac"></div>
        <div className="dot dot-left"></div>
        <div className="dot dot-rigth"></div>
        <div className="line"></div>
        <div className="hip"></div>
      </div>
    </div>
  )
}

export default Digger
