import React ,{ useState} from 'react'

import Covid from '../Covid/Covid'
import Health from '../Health/Health'
import Gold from '../Gold/Gold'
import MyTickets from '../MyTickets/MyTickets'

export default function User({subRoute, subRouteChange, userRoute, changeUserRoute, user, insurance, tickets, loadInsurance}) {
   //fetching in useEffect and setting these states
   console.log(user)
   if(userRoute === 'home')

   {
     return (
       <>
         {/* if that type is already in insurance then disable the buttons */}
         <button
           onClick={() => changeUserRoute("covid")}
           disabled={
             insurance.find((item) => item.insurance_type === "covid")
               ? true
               : false
           }
         >
           Covid Insurance
         </button>

         <button
           onClick={() => changeUserRoute("health")}
           disabled={
             insurance.find((item) => item.insurance_type === "health")
               ? true
               : false
           }
         >
           Health Insurance
         </button>

         <button
           onClick={() => changeUserRoute("gold")}
           disabled={
             insurance.find((item) => item.insurance_type === "gold")
               ? true
               : false
           }
         >
           Gold Insurance
         </button>

         <button onClick={() => changeUserRoute("tickets")} disabled={!insurance ? true :false}>My Tickets</button>
       </>
     );
   }
   else{
     console.log('inside else')
     return (
       <div>
         {
           {
             covid: (
               <Covid user={user} insurance={insurance} tickets={tickets} loadInsurance={loadInsurance} />
             ),
             health: (
               <Health user={user} insurance={insurance} tickets={tickets} loadInsurance={loadInsurance} />
             ),
             gold: <Gold user={user} insurance={insurance} tickets={tickets} loadInsurance={loadInsurance} />,
             tickets: <MyTickets insurance={insurance} tickets={tickets} />,
           }[userRoute]
         }
       </div>
     );
   }

   }
