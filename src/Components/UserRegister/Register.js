import React, { useState } from "react";

const Register = ({ onSetLoading, subRouteChange }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [number, setNumber] = useState();

  const [password, setPassword] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onNumberChange = (event) => {
    setNumber(event.target.value);
  };
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitRegister = () => {
    if (!name || !email || !password) {
      alert("Please fill the required details");
      return;
    }
    // onSetLoading(true);
    fetch("http://localhost:3000/register", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
        mobile: number
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === 'success') {
          // onSetLoading(false);
             subRouteChange("signin");

          // setRegistered(true);
        } else 
        {
          alert('wrong submisison')
        }
        
        // onSetLoading(false);
      })
      .catch((err) => {
        console.log(err);
        // onSetLoading(false);

        alert("email used");
      });
  };

  return (
    <div className="form-main">
      <div className="form">
        {/* <h4 className={registered ? "registered" : "failed"}>Registered</h4> */}
        <div className="title">Welcome</div>
        <div className="subtitle">Let's create your account!</div>

        <div className="input-container ic2">
          <input
            className="input"
            placeholder="Name "
            type="text"
            name="name"
            id="name"
            onChange={onNameChange}
            autoComplete="off"
            required
          />
          <label htmlFor="name" className="placeholder"></label>
        </div>
        <div className="input-container ic2">
          <input
            className="input"
            placeholder="Mobile number"
            type="number"
            name="mobile number"
            id="number"
            onChange={onNumberChange}
            autoComplete="off"
            required
          />
          <label htmlFor="name" className="placeholder"></label>
        </div>
        <div className="input-container ic2">
          <input
            className="input"
            placeholder="Email "
            type="email"
            name="email-address"
            id="email-address"
            onChange={onEmailChange}
            autoComplete="off"
            required
          />
          <label htmlFor="email-address" className="placeholder"></label>
        </div>
        <div className="input-container ic2">
          <input
            className="input"
            placeholder="Password"
            onChange={onPasswordChange}
            type="password"
            name="password"
            id="password"
            required
          />
          <label htmlFor="password" className="placeholder"></label>
        </div>
        <div className="">
          <input
            className="submit"
            type="submit"
            value="Register"
            onClick={() => onSubmitRegister()}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
