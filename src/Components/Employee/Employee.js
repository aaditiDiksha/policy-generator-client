import React,{useState} from 'react'
import SingleInsurance from './SingleInsurance';

export default function Employee({subRouteChange, onRouteChange, allTickets}) {
    console.log(allTickets)


    const[currentInsurance, setCurrentInsurance] = useState()
    const [currentTicket, setCurrentTicket] = useState();
    const[currentPolicy, setCurrentPolicy]=useState();

   const loadTicket =() =>{
       setCurrentInsurance()
       setCurrentTicket()
       
   }

       const getTicketData = (ticket)=>{
           setCurrentTicket(ticket)
            fetch(`http://localhost:3000/employee/getTicketData/${ticket.insurance_id}`, {
              method: "get",
              headers: { "Content-Type": "application/json" },
              
            })
              .then((response) => response.json())
              .then((data) => {
                if (data) {
                    console.log(data)
                setCurrentInsurance(data.insurance)
                setCurrentPolicy(data.policy)
                } else {
                  console.log("Error"); //access the error component here
                  // onSetLoading(false);
                  alert("incorrect form submission");
                }
              })
              .catch((err) => {
                // onSetLoading(false);
                console.log(err);
                alert("errrr ");
              });
       }

        return (
          <div>
            <div className={currentInsurance ? "ticket" : "no-display"}>
              <SingleInsurance
                currentTicket={currentTicket}
                currentInsurance={currentInsurance}
                currentPolicy={currentPolicy}
              />
            </div>
            <br />
            <br />
            <h2>all tickets are here</h2>

            {allTickets.map((ticket) => {
              return (
                <li onClick={() => getTicketData(ticket)}>{ticket.status}</li>
              );
            })}
          </div>
        );
}
