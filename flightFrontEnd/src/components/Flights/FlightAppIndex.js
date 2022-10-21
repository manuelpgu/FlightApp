import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function FlightAppIndex() {
  const [destinations, setDestionations] = useState(null)
 
  const apiDomain = "http://localhost:8080"

  useEffect(() => {
    if (!destinations) {
      fetch(apiDomain+'/flights').then((response) => {
        return response.json();
      }).then((data) => {
        setDestionations(data)
      })
    }
  })

  return (
    <div className='forumTheadsAll'>
      <div className='forumTheadsContainer'>
        <header><h2>Available Destinations</h2><hr></hr></header>
        <h3>Select a Destination</h3>
        <div>{destinations ?
        destinations
        .map((destination) => {

          if (destination.origin ==="Sevilla"){
            return (
              <div key={destination.id}>
                <h3> {destination.origin} </h3>
                <div>
                  <input type="radio" value="One Way" name="gender" /> One Way
                  <input type="radio" value="Two Way" name="gender" /> Two Way
                </div><br/><br/>
                <Link className="crud-button edit-button" to={`/selectedDestination/${destination.origin}`} value={destination.origin}><i className="fa-solid l"></i>
                Check Destination
                </Link>
              </div>) 
          } else {
            return (
              <div key={destination.id}>
                <h5> {destination.origin} </h5>  
                <h6>Destination not Available right now</h6>
              </div>)    
          }

          }) : "Loading data"}</div>       
      </div>
    </div>
  );
}

export default FlightAppIndex;
