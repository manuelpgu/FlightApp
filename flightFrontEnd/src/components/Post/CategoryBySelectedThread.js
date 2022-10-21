import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


const CategoryBySelectedThread = () => {
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    //cambiar para que me coja todo el nombre
    //const theadName = window.location.pathname[window.location.pathname.length-1]

    const url = window.location.pathname.split("/");
    const theadName = url[url.length - 1]

    if (!posts) {
      fetch('http://localhost:8080/api/v1/posts/'+ theadName).then((response) => {
        return response.json();
      }).then((data) => {
        setPosts(data)
      })
    }
  })

  return (
    <div className="main-container">
      <div className="categoriesSelected">
      <header><h2>Post theads</h2><hr></hr></header>
      <h3>Select a theads</h3>
      <div>{posts ?
      posts
      .map((post) => {
        return <div key={post.id}>
          <h1>{post.userName}</h1>
          <h1>{post.title}</h1>
          <p>{post.postBody}</p>
          <h5>{post.imageLink}</h5>
        </div>
      }) : "Loading data"}</div>

          <Link to={`/forumApp`}>
            Go Back To threads
          </Link>
      </div>

     

    </div>
);


};

export default CategoryBySelectedThread;