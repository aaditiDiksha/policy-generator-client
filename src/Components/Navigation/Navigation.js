import React from "react";
import "./Navigation.css";
// import logo from "../../logo.png";

const Navigation = ({ onRouteChange, route, subRoute, subRouteChange ,changeUserRoute}) => {
  if (route === "user") {
    if (subRoute === "userHome") {
      return (
        <nav className="nav">
          
          <p className="nav-p" onClick={() => { subRouteChange("userHome") ; changeUserRoute('home')}}>
            {" "}
            <span className="nav-name">Home</span>
          </p>
          <p className="nav-p" onClick={() => onRouteChange("landing")}>
            {" "}
            <span className="nav-name">Sign Out</span>
          </p>
        </nav>
      );
    } else {
      return (
        <nav className="nav">
          <a className="app-logo" href="/">
            Policy
          </a>
          <p className="nav-p" onClick={() => onRouteChange("signin")}>
            {" "}
            Sign In
          </p>
          <p className="nav-p" onClick={() => subRouteChange("register")}>
            {" "}
            Register
          </p>
        </nav>
      );
    }
  } 
  else if (route === "employee") {
    if (subRoute === "empHome") {
      return (
        <nav className="nav">
          
          <p className="nav-p" onClick={() => subRouteChange("empHome")}>
            {" "}
            <span className="nav-name">Home</span>
          </p>
          <p className="nav-p" onClick={() => onRouteChange("landing")}>
            {" "}
            <span className="nav-name">Sign Out</span>
          </p>
        </nav>
      );
    } else {
      return (
        <nav className="nav">
          <a className="app-logo" href="/">
            Policy
          </a>
          
          <p className="nav-p" onClick={() => onRouteChange("employee")}>
            {" "}
            Log In
          </p>
        </nav>
      );
    }
  }  else {
    return (
      <nav className="nav">
        <a className="app-logo" href="/">
         Policy
        </a>
      </nav>
    );
  }
};

export default Navigation;
