import React from "react";
import Card from "../Card/Card";
import './Home.css';
import { Navigate } from 'react-router'

function Home() {

  if(!sessionStorage.getItem("user")){
    console.log("Here");
    return <Navigate to={"/"}/>
  }
  return (
    <div>
      <div className="main">
        <br></br>
        <div className="heading"><h1>Paw Express Boston</h1>
          <br></br>
          <h2>Your Pets, Our Passion</h2>
        </div>
      </div>
      <Card color={"rgb(97, 219, 251)"} title="This is the landing page and is created using HTML, CSS & React. This description box is an imported Card." />
      <div className="navbar">
        <h3>Copyright &copy; 2022 Subbu Subramanyam</h3>
      </div>
    </div>
  );
}

export default Home