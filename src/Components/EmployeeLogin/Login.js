import React, { useState } from "react";

const SignIn = ({ loadUser, subRouteChange, onSetLoading, loadAllTickets }) => {
  //------------------------ STATES ----------------------------------

  const [id, setId] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  //------------------------ SETTING STATES --------------------------

  const onIdChange = (event) => {
    setId(event.target.value);
  };
  const onPasswordChange = (event) => {
    setSignInPassword(event.target.value);
  };

  // ------------------------- SIGN IN SUBMIT ---------------------------

  const onSubmitLogIn = () => {
    if (!id || !signInPassword) {
      alert("oh no");
      return;
    }
    // onSetLoading(true);
    fetch("http://localhost:3000/employee/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        employeeId: id,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          loadAllTickets(data);
        subRouteChange("empHome");

        } else {
          console.log("Error"); //access the error component here
          // onSetLoading(false);
          alert("incorrect form submission");
        }
      })
      .catch((err) => {
        // onSetLoading(false);
        console.log(err);
        alert("errrr signin");
      });
  };

  //----------------------------- RETURN -------------------------------------------

  return (
    <div className="form-main">
      <div className="form">
        <div className="title">Welcome Back</div>

        <div className="input-container ic2">
          <label htmlFor="id" className="placeholder">Employee Id</label>
          <input
            id="id"
            className="input"
            placeholder="Employee Id "
            onChange={onIdChange}
            type="text"
            name="id"
            autoComplete="off"
            required
          />
        </div>
        <div className="input-container ic2">
          <label htmlFor="password">Password</label>
          <input
            className="input"
            placeholder="Password "
            onChange={onPasswordChange}
            type="password"
            name="password"
            id="password"
            required
          />
        </div>
        <div>
          <input
            onClick={() => {
              onSubmitLogIn();
            }}
            className="submit"
            type="submit"
            value="Sign in"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
