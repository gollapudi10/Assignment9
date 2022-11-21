import React from "react";
import Card from "../Card/Card";
import './Contact.css';
import { Navigate } from 'react-router'

function Contact() {
  if(!sessionStorage.getItem("user")){
    return <Navigate to={"/"}/>
  } 
  return (
    <div>
      <div className="main1">
        <br></br>
        <div className="heading"><h1>Paw Express Boston</h1><h2>Fill the contact form below, we will reach out to you.</h2></div>
        <form>
          <label for="name">Full Name</label><br></br>
          <input type="text" id="name" name="name" placeholder="Your full name.." /><br></br>

          <label for="contact">Contact Number</label><br></br>
          <input type="text" id="contact" name="contact" placeholder="Your contact number.." /><br></br>

          <label for="emailid">Email Id</label><br></br>
          <input type="text" id="emailid" name="emailid" placeholder="Your email id.." /><br></br>

          <label for="survey">How did you hear about us?</label><br></br>
          <select id="survey" name="survey">
            <option value="media">Social Media</option>
            <option value="email">Email</option>
            <option value="friends">Friends</option>
            <option value="other">Other</option>
          </select>


          <input type="submit" value="Submit" /> <br></br>

        </form>


      </div>

      <Card color={"rgb(97, 219, 251)"} title="This page has the contact-me form and is created using HTML, CSS & React." />
      <div class="navbar">
        <h3>Copyright &copy; 2022 Subbu Subramanyam</h3>
      </div>
    </div>
  )
}

export default Contact