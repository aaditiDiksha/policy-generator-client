import './App.css';

import React, { useState } from "react";
import Navigation from './Components/Navigation/Navigation'
import LandingPage from "./Components/LandingPage/Landing";
import SignIn from './Components/UserSignIn/SignIn'
import Register from "./Components/UserRegister/Register";
import User from "./Components/User/User";
import Login from "./Components/EmployeeLogin/Login";
import Employee from "./Components/Employee/Employee";


// import Loader from "./Components/Loader/Loader";

const App = () => {
  const [subRoute, setSubRoute] = useState("");
  const [route, setRoute] = useState("landing");
  //  const [loading, setLoading] = useState(false);
  const [empRoute, setEmpRoute] = useState("home");
  const [userRoute, setUserRoute] = useState("home");

  const [user, setUser] = useState();
  const [insurance, setInsurance] = useState([
    {
      insuranceId: "",
      insuranceType: "",
      issuedDate: "",
      endDate: "",
      appliedDate: "",
    },
  ]); //array of max 3 objects and min 0
  const [tickets, setTickets] = useState([
    { ticketId: "", status: "", comments: "" },
  ]); //same as insurance
 const [allTickets, setAllTickets] =useState()
const loadUserData = (data)=>{
  console.log(data)
  console.log(data.user)
  console.log(data.user[0])
  if(data.user[0])
  setUser(data.user[0]) 
   else
  setUser(data.user)
setInsurance(data.insurance)
setTickets(data.tickets)
}

const loadInsurance = (data)=>{
  setInsurance([...insurance, data.insurance[0]])
  setTickets([...tickets, data.ticket[0]])
}

const loadAllTickets =(data)=>{
  console.log(data)
  setAllTickets(data)
}
  const changeUserRoute = (route) => {
    setUserRoute(route);
  };
  const onRouteChange = (routeReceived) => {
    if (routeReceived === "landing") {
      console.log("hey whats wrong ");
      setRoute("landing");
      setSubRoute("");
    } else if (routeReceived === "user") {
      setSubRoute("signin");
      setRoute("user");
    } else if (routeReceived === "employee") {
      setRoute("employee");
      setSubRoute("login");
    }
    else if(routeReceived === 'signin')
    {
      setRoute('user')
      setSubRoute('signin')
    }
    // setRoute(routeReceived);
  };

  const subRouteChange = (subRouteRecieved) => {
    console.log(subRouteRecieved);
    setSubRoute(subRouteRecieved);
  };
  return (
    <>
      <div className="navigation">
        <Navigation
          onRouteChange={onRouteChange}
          route={route}
          subRoute={subRoute}
          subRouteChange={subRouteChange}
          userRoute={userRoute}
          changeUserRoute={changeUserRoute}
        />
      </div>
      <div className="main">
        {route === "landing" ? (
          <>
            <LandingPage onRouteChange={onRouteChange} />
          </>
        ) : route === "user" ? (
          {
            signin: <SignIn subRouteChange={subRouteChange} loadUserData={loadUserData}  />,
            register: <Register subRouteChange={subRouteChange} />,
            userHome: (
              <User
                subRoute={subRoute}
                subRouteChange={subRouteChange}
                userRoute={userRoute}
                changeUserRoute={changeUserRoute}
                user={user}
                insurance={insurance}
                tickets={tickets}
                loadInsurance={loadInsurance}
              />
            ),
          }[subRoute]
        ) : (
          <div>
            {route === "employee"
              ? {
                  login: <Login subRouteChange={subRouteChange} loadAllTickets={loadAllTickets} />,
                  empHome: <Employee subRouteChange={subRouteChange} allTickets={allTickets}/>,
                }[subRoute]
              : null}
          </div>
        )}
      </div>
    </>
  );
};

export default App;
