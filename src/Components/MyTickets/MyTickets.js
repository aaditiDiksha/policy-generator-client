import React,{useState, useEffect} from 'react'
import SingleTicket from './SingleTicket'
export default function MyTickets({insurance, tickets}) {

     const[currentInsurance, setCurrentInsurance] = useState()
     const[currentTicket, setCurrentTicket] = useState()

     useEffect(() => {
       setCurrentInsurance('')
       setCurrentTicket('')  
         
     }, [])
     
     const setCurrent = (item) =>{
         setCurrentInsurance(item)
         setCurrentTicket(tickets.filter((ticket)=> ticket.insurance_id === item.insurance_id))
     }
    return (
      <div>
          My Tickets

        {insurance.map((item) => {
            return(
                <>
                <h3 onClick={()=>setCurrent(item)}>{item.insurance_type} insurance</h3>

                </>
            )
        })
        
    }
    <div className={currentTicket? 'ticket' : 'no-display'}>
          <SingleTicket currentTicket={currentTicket} currentInsurance={currentInsurance}/>
    </div>
 
     </div>
    );
}
