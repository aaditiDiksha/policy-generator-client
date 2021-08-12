import React, { useState } from "react";

const SignIn = ({ loadUserData, subRouteChange, onSetLoading }) => {
  //------------------------ STATES ----------------------------------

  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  //------------------------ SETTING STATES --------------------------

  const onEmailChange = (event) => {
    setSignInEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setSignInPassword(event.target.value);
  };

  // ------------------------- SIGN IN SUBMIT ---------------------------

  const onSubmitSignIn = () => {
    if (!signInEmail || !signInPassword) {
      alert("oh no");
      return;
    }
    // onSetLoading(true);
    fetch("http://localhost:3000/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log(data)
          loadUserData(data);
          subRouteChange("userHome");
          // onSetLoading(false);
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
          <input
            id="email"
            className="input"
            placeholder="Email "
            onChange={onEmailChange}
            type="email"
            name="email-address"
            autoComplete="off"
            required
          />
          <label htmlFor="email" className="placeholder"></label>
        </div>
        <div className="input-container ic2">
          <input
            className="input"
            placeholder="Password "
            onChange={onPasswordChange}
            type="password"
            name="password"
            id="password"
            required
          />
          <label htmlFor="password"></label>
        </div>
        <div>
          <input
            onClick={() => {
              onSubmitSignIn();
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
