import React, { useState } from "react";

export default function Gold({ user, insurance, tickets, loadInsurance }) {
  const [isTicketGen, setIsTicketGen] = useState(false);
  const [gst, setGst] = useState();

  const generateTicket = () => {
    setIsTicketGen(true);
    //fetch api to add values
  };
  const onGstChange = (event) => {
    setGst(event.target.value);
  };

  const onSubmitInsurance = () => {
    if (!gst) {
      alert("please enter");
      return;
    }
    console.log("eeeeeeeeeeeeeee");
    fetch(`http://localhost:3000/submit/${user.userid}/gold`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        gst:gst
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
      <label htmlFor="nominee">GST information</label>
      <input
        
        onChange={onGstChange}
        type="text"
        name="gst"
        id="gst"
        required
      />
      <button
        type="submit"
        onClick={() => onSubmitInsurance()}
        disabled={gst && !isTicketGen ? false : true}
      >
        Submit
      </button>
      {isTicketGen === true ? <article> Ticket generated</article> : null}
    </div>
  );
}
