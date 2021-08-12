import React, { useState } from "react";

export default function Health({ user, insurance, tickets, loadInsurance }) {
  const [isTicketGen, setIsTicketGen] = useState(false);
  const [nominee, setNominee] = useState();
  const [healthInsuranceType , setHealthType] =  useState()

  const generateTicket = () => {
    setIsTicketGen(true);
    //fetch api to add values
  };
  const onNomineeChange = (event) => {
    setNominee(event.target.value);
  };
const onHealthTypeChange = (event) =>{
  setHealthType(event.target.value)
}

  const onSubmitInsurance = () => {
    if (!nominee && !healthInsuranceType) {
      alert("please enter");
      return;
    }
    console.log("eeeeeeeeeeeeeee");
    fetch(`http://localhost:3000/submit/${user.userid}/health`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nominee: nominee,
        insuranceType: healthInsuranceType
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log(data);
          loadInsurance(data);
          generateTicket();
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

  return (
    <div>
      <label htmlFor="nominee">Nominee name</label>
      <input
        placeholder="Nominee Name"
        onChange={onNomineeChange}
        type="text"
        name="nominee"
        id="nominee"
        required
      />
      <label htmlFor="healthType">Health Insurance Type</label>
      <input
        
        onChange={onHealthTypeChange}
        type="text"
        name="healthType"
        id="healthType"
        required
      />
      <button
        type="submit"
        onClick={() => onSubmitInsurance()}
        disabled={nominee && !isTicketGen ? false : true}
      >
        Submit
      </button>
      {isTicketGen === true ? <article> Ticket generated</article> : null}
    </div>
  );
}
