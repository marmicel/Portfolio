import React, { useState } from "react"
import HomeIcon from "./HomeIcon"
import PortfolioIcon from "./PortfolioIcon"
import QaIcon from "./QaIcon"
import "./Navbar.css"
import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom"

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <CustomLink to="/">
          <HomeIcon></HomeIcon>
        </CustomLink>
        <CustomLink to="/portfolio">
          <PortfolioIcon></PortfolioIcon>
        </CustomLink>
        <CustomLink to="/qa">
          <QaIcon></QaIcon>
        </CustomLink>
      </ul>
    </nav>
  )
}

const CustomLink: React.FC<any> = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li>
      <Link className="Link" to={to} {...props}>
        <span
          className={
            isActive ? "Icon-container Color-active" : "Icon-container"
          }
        >
          {children}
        </span>
        <div className={isActive ? "Hl-bar Background-active" : "Hl-bar"}></div>
      </Link>
    </li>
  )
}

export default Navbar
