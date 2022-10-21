import axios from "axios"
import { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material"
import { useNavigate } from 'react-router-dom';



const BookFlight = () => {
  let navigate=useNavigate();
  const [flights, setFlights] = useState(null)
  const [basicPrice, setBasicPrice] = useState(0)
  const [finalPrice, setFinalPrice] = useState(0)
  const apiDomain = "http://localhost:8080"
  

  const buyFlight = (event) => {
  

    alert("Se ha pulsado el boton");
    const body = {
      "userName": event.target[0].value,
    }
    axios.post(apiDomain+'/flights', body).then((res) => {
      if (res.status === 200) {
        navigate("/");
      }
      else{
        navigate("/");
      }
    });
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
        setBasicPrice(data.price * 2) 
      })
    }
  })

  document.querySelectorAll("input").forEach(item => {
    item.addEventListener("change", () => {
       console.log(item.id);
       if(item.id=="smaller"){
        setFinalPrice(basicPrice * 0)
       }

       if (item.id=="medium"){
        setFinalPrice(basicPrice * 0.5)
       }

       if (item.id=="bigger"){
        setFinalPrice(basicPrice * 1)
       }

       if (item.id=="noLuggage"){
        setFinalPrice(basicPrice)
       }

       if (item.id=="oneLuggage"){
        setFinalPrice(basicPrice +20)
       }

       if (item.id=="twoLuggage"){
        setFinalPrice(basicPrice +40)
       }
      
    })
})

  return <div className="formAdd">
  <div className="update-form-wrapper">
    <h2>Add Passenger</h2>
  
    <form onSubmit={buyFlight} className="update-form">
    <TextField id="standard-basic" name="FirstName" label="FirstName" variant="standard"/>
    <TextField id="standard-basic" name="LastName" label="LastName" variant="standard"/>
    <TextField id="standard-basic" name="Nationality" label="Nationality" variant="standard"/>
    <TextField id="standard-basic" name="NIF or passport" label="NIF or passport" variant="standard"/>
    
    <br/>
    <h3>Select the Passenger age (it may affect the price)</h3>
    <div className="AgeSelectorContainer">
      <input type="radio" value="smaller" name="age" id="smaller" />  -2 years
      <input type="radio" value="medium" name="age" id="medium"/> 2 to 9
      <input type="radio" value="bigger"  name="age" id="bigger"/> +9
    </div>

    <br/>
    <h3>Select the Luggages (it may affect the price)</h3>
    <div className="AgeSelectorContainer">
      <input type="radio" value="One Way" name="luggage" id="noLuggage" />  -2 years
      <input type="radio" value="Two Way" name="luggage" id="oneLuggage"/> 2 to 9
      <input type="radio" value="Two Way" name="luggage" id="twoLuggage"/> +9
    </div>
    <p>Current price {finalPrice}</p>
      <br/>
    <Button type="submit" variant="contained">Add Passenger</Button>
    </form>
  </div>
</div>

};

export default BookFlight;