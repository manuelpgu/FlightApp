import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function ForumApp() {
  const [theads, setTheads] = useState(null)
 
  const apiDomain = "http://localhost:8080/api/v1"

  useEffect(() => {
    if (!theads) {
      fetch(apiDomain+'/posts').then((response) => {
        return response.json();
      }).then((data) => {
        setTheads(data)
      })
    }
  })


  return (
    <div className='forumTheadsAll'>
      <div className='forumTheadsContainer'>
        <header><h2>Post theads</h2><hr></hr></header>
        <h3>Select a theads</h3>
        <div>{theads ?
        theads
        .map((thead) => {

          if(thead.thread =='doubt'){
            return <div key={thead.id}>
            <h5> {thead.thread} </h5>
           
            <Link className="crud-button edit-button" to={`/selectedThead/${thead.thread}`} value={thead.thread}><i className="fa-solid fa-pencil"></i>
            
            </Link>
            
          </div>

          }

          if(thead.thread =='doubt'){
            return <div key={thead.id}>
            <h5> {thead.thread} </h5>
           
            <Link className="crud-button edit-button" to={`/selectedThead/${thead.thread}`} value={thead.thread}><i className="fa-solid l"></i>
            ❓
            </Link>
            
          </div>

          }

          else if(thead.thread =='clarification'){
            return <div key={thead.id}>
            <h5> {thead.thread} </h5>
           
            <Link className="crud-button edit-button" to={`/selectedThead/${thead.thread}`} value={thead.thread}><i className="fa-solid l"></i>
            ✏
            </Link>
            
          </div>

          }

          else if(thead.thread =='suggestion'){
            return <div key={thead.id}>
            <h5> {thead.thread} </h5>
           
            <Link className="crud-button edit-button" to={`/selectedThead/${thead.thread}`} value={thead.thread}><i className="fa-solid l"></i>
            🔊
            </Link>
            
          </div>

          }

          else {
            return <div key={thead.id}>
            <h5> {thead.thread} </h5>
           
            <Link className="crud-button edit-button" to={`/selectedThead/${thead.thread}`} value={thead.thread}><i className="fa-solid l"></i>
            
            </Link>
            
          </div>


          }


          
        }) : "Loading data"}</div>

          <Link to={`/posts/new`}>
            Add New Post
          </Link>
       
      </div>
    </div>
  );
}

export default ForumApp;
