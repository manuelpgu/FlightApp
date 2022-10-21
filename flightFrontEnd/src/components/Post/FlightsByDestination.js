import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


const FlightsByDestination = () => {
  const [flights, setFlights] = useState(null)

  useEffect(() => {
    //cambiar para que me coja todo el nombre
    //const theadName = window.location.pathname[window.location.pathname.length-1]

    const url = window.location.pathname.split("/");
    const destinationName = url[url.length - 1]

    if (!flights) {
      fetch('http://localhost:8080/flights/selectedDestination/'+ destinationName).then((response) => {
        return response.json();
      }).then((data) => {
        setFlights(data)
      })
    }
  })

  return (
    <div className="main-container">
      <div className="categoriesSelected">
      <header><h3>Available flights by Destination</h3><hr></hr></header>
      <h3>Select a flight</h3>
      <div>{flights ?
      flights
      .map((flight) => {
        return <div key={flight.id}>
          <h5>From  {flight.origin}</h5>
          <h5>To {flight.destination}</h5>.
          <h6>Date : {flight.date}</h6>
          <Link className="crud-button edit-button" to={`/bookFlight/${flight.id}`} value={flight.id}><i className="fa-solid l"></i>
           Buy
          </Link>
          
        </div>
      }) : "Loading data"}</div>
          <br/>
          <Link to={`/`}>
            Go Back To Index
          </Link>
      </div>
    </div>
);


};

export default FlightsByDestination;