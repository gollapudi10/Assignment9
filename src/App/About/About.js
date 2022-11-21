import React from "react";
import Card from "../Card/Card";
import { Navigate } from 'react-router'

function About() {

  if(!sessionStorage.getItem("user")){
    return <Navigate to={"/"}/>
  } 
  return (
    <div>
      <div className="main">
      <br></br>
        <div className="heading"><h1>Paw Express Boston</h1></div>
        <h3>Matching best puppy companions for Past 20 years
          <br></br><br></br>Providing the best and most beautiful fun-loving puppies" - Huskypaws Awards 2022
          <br></br><br></br>Visit our store today and start playing with your pets.
          <br></br><br></br>Stay Tuned! Soon we are gonna accept Online Puppies and Food Orders!</h3>
      </div>


      <Card color={"rgb(97, 219, 251)"} title="This page has details about the pet store company and is created using HTML, CSS & React." />
      <div className="navbar">
        <h3>Copyright &copy; 2022 Subbu Subramanyam</h3>
      </div>



    </div>
  )
}

export default About