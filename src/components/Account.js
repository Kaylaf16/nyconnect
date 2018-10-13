import React, { Component } from 'react';
import {Navigation} from './Navigation'
class Account extends Component {
  render(){
    const {buttonStyle} =styles;
    return(

<div class="background">

      <div class="profile-card">

      <Navigation/>

      <div class="card">

          <div >
            <img class="card-image" src="profile.png" alt="" />
          </div>
        <h1>John Doe</h1>

        <p class="title"> Location | 651 Prosacco Centers </p>
        <div >
          <img class="icons" src="twitter.png" alt="" />
            <img class="icons" src="facebook.png" alt="" />
            <img class="icons" src="linkedin.png" alt="" />
          <img class="icons" src="github.png" alt="" />
        </div>

       <div>
       <p class="bold-skills">SKILLS</p>
       <hr/ >

       </div>
       <div class="skills">
             <ul>
                 <li>JavaSctipt</li>
                   <li>Python</li>
                      <li>Machine Learning</li>
                   <li>React</li>
                 <li> Object Oriented Programming</li>
             </ul>
       </div>

         <button style={buttonStyle}className="button">Edit</button>
         <button style={buttonStyle}className="button">Connect Me</button>

      </div>

      </div>
      </div>

    )
  }
}
const styles = {
  buttonStyle:{
    border: "none",
    outline: 0,
    display: "inline-block",
    padding: "8px",
    color: "black",
    fontWeight: "bold",
    backgroundColor: "#00E676",
    textAlign: "center",
    cursor: "pointer",
    width: "25%",
    borderRadius: "25px",
    fontSize: "18px",
    margin:"0px 100px 30px 100px",
    align:"center"

  }

}
export {Account}
