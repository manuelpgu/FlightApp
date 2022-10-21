import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function FlightAppIndex() {
  const [theads, setTheads] = useState(null)
 
  const apiDomain = "http://localhost:8080"

  useEffect(() => {
    if (!theads) {
      fetch(apiDomain+'/flights').then((response) => {
        return response.json();
      }).then((data) => {
        setTheads(data)
      })
    }
  })


  return (
    <div className='forumTheadsAll'>
      <div className='forumTheadsContainer'>
        <header><h2>Available Destinations</h2><hr></hr></header>
        <h3>Select a Destination</h3>
        <div>{theads ?
        theads
        .map((thead) => {

            return <div key={thead.id}>
            <h5> {thead.origin} </h5>
           
            <Link className="crud-button edit-button" to={`/selectedThead/${thead.origin}`} value={thead.origin}><i className="fa-solid l"></i>
            Check Destinations
            </Link>
            
          </div>


          


          
        }) : "Loading data"}</div>

          <Link to={`/posts/new`}>
            Add New Post
          </Link>
       
      </div>
    </div>
  );
}

export default FlightAppIndex;
