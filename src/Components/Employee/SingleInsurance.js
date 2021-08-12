import React,{useState} from "react";

export default function SingleInsurance({ currentTicket, currentInsurance ,currentPolicy}) {
  console.log(currentTicket);

  const [issue_date, setIssue] = useState();
  const [end_date, setEnd] = useState();
  const [insurance_type, setInsurance] = useState();
  const [policyNo, setPolicyNo] = useState();
  const [status, setStatus] = useState();
  const [comments, setComments] = useState();

   const onChangeIssue = (event) =>{
       setIssue(event.target.value)
   }
   const onChangeEnd = (event) => {
     setEnd(event.target.value);
   };
   const onChangePolicyNo = (event) => {
     setPolicyNo(event.target.value);
   };
   const onChangeStatus = (event) => {
     setStatus(event.target.value);
   };
   const onChangeComments = (event) => {
     setComments(event.target.value);
   };

   const onSubmitChanges =()=>{

    fetch(`http://localhost:3000/employee/update/${currentTicket.insurance_id}`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          issue_date: issue_date,
          end_date:end_date,
          policy_no: policyNo,
          status:status,
          comments:comments
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
         alert('updated')
         console.log(data)
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
   
   
  if (currentTicket && currentInsurance) {
    return (
      <div>
        <div>
          <h2>Selected insurance details :</h2>
          <p>
            {" "}
            insurance id : {currentTicket.insurance_id} <br /> insurance type :{" "}
            {currentInsurance[0].insurance_type} <br />
            issue date : {currentInsurance[0].issue_date}
            <br /> end date: {currentInsurance[0].end_date}
          </p>
        </div>
        <h2>Selected ticket details : </h2>
        {console.log(currentInsurance)}
        {console.log(currentTicket)}
        <p>
          current status: {currentTicket.status} <br />
          current comments : {currentTicket.comments}
        </p>

        <h2>Update Details</h2>
        <label htmlFor="status">new status</label>
        <input type="text" onChange={onChangeStatus} /> <br />
        <label htmlFor="comments">new Comments</label>
        <input type="text" onChange={onChangeComments} />
        <br />
        {/*  */}
        <label htmlFor="issue">issue date</label>
        <input type="date" onChange={onChangeIssue} />
        <br />
        <label htmlFor="end">end Date</label>
        <input type="date" onChange={onChangeEnd} />
        <br />
        <label htmlFor="policy">Policy no</label>
        <input type="text" onChange={onChangePolicyNo} />
        <br />
        <button onClick={() => onSubmitChanges()}>Submit Changes</button>
      </div>
    );
  } else return <div>empty</div>;
}
