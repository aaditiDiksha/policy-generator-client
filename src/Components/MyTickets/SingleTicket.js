import React from 'react'

export default function SingleTicket({currentTicket, currentInsurance}) {
console.log(currentTicket)
    if(currentTicket)
    {
return (
  <div>
      <h2>{currentInsurance.insurance_type}</h2>
    status :  {currentTicket[0].status} <br />
    comments :{currentTicket[0].comments}

    <h2>Details</h2>
    Issued date : {currentInsurance.issue_date} <br/>
    End Date : {currentInsurance.end_date} <br/>
    application date : {currentInsurance.application_date}
  </div>
);
    }
    
    else
    return(
        <div>
            empty
        </div>
    )
}
