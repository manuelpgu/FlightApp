import { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material"
import { Link } from 'react-router-dom';


const BookFlight = () => {
  const [flights, setFlights] = useState(null)
  const createPost = (event) => {

    alert("Se ha pulsado el boton de enviar");
    alert(flights.id)
   /* event.preventDefault();
    const body = {
      "userName": event.target[0].value,
      "thread": event.target[1].value,
      "category": event.target[2].value,
      "postBody": event.target[3].value,
      "imageLink": event.target[4].value,
    }
    axios.post(apiDomain+'/posts', body).then((res) => {
      if (res.status === 200) {
        navigate('/forumApp', {
          state: {
            createdStudent: true,
            snackbarMessage: "Post created succesfully"
          }
        })
      }
    });*/
  }

  useEffect(() => {
    //cambiar para que me coja todo el nombre
    //const theadName = window.location.pathname[window.location.pathname.length-1]

    const url = window.location.pathname.split("/");
    const flightId = url[url.length - 1]

    if (!flights) {
      fetch('http://localhost:8080/flights/bookFlight/'+ flightId).then((response) => {
        return response.json();
      }).then((data) => {
        setFlights(data)
      })
    }
  })



  return <div className="formAdd">
  <div className="update-form-wrapper">
    <h2>Add Passenger</h2>
    <form onSubmit={createPost} className="update-form">
    <TextField id="standard-basic" name="FirstName" label="FirstName" variant="standard"/>
    <TextField id="standard-basic" name="LastName" label="LastName" variant="standard"/>
    <TextField id="standard-basic" name="Nationality" label="Nationality" variant="standard"/>
    <TextField id="standard-basic" name="NIF or passport" label="NIF or passport" variant="standard"/>
    
    <br/>
    <h3>Select the Passenger age (it may affect the price)</h3>
    <div className="AgeSelectorContainer">
      <input type="radio" value="One Way" name="age" />  +2 years
      <input type="radio" value="Two Way" name="age" /> 2 to 9
      <input type="radio" value="Two Way" name="age" /> -9
    </div>
      <br/>
    <Button type="submit" variant="contained">Add Passenger</Button>
    </form>
  </div>
</div>

};

export default BookFlight;