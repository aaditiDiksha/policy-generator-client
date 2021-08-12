import React ,{useState} from 'react'

export default function Covid({user, insurance, tickets, loadInsurance}) {

    const[isTicketGen, setIsTicketGen] = useState(false)
    const[nominee, setNominee] = useState()

    const generateTicket = () =>{
        setIsTicketGen(true)
        //fetch api to add values 
    }
    const onNomineeChange = (event) => {
      setNominee(event.target.value);
    };

    const onSubmitInsurance = () =>{
      if(!nominee)
      {
        alert('please enter')
        return
      }
      console.log('eeeeeeeeeeeeeee')
      fetch(`http://localhost:3000/submit/${user.userid}/covid`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nominee: nominee,
        
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log(data)
            loadInsurance(data)
            generateTicket()
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
        <button type="submit" onClick={() => onSubmitInsurance()} disabled={nominee && !isTicketGen ? false : true}>
          Submit
        </button>
        {isTicketGen === true ? <article> Ticket generated</article> : null}
      </div>
    );
}
