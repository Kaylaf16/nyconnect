import React, { Component } from 'react';
import {Navigation} from './Navigation'
class Account extends Component {
  render(){
    return(

<div class="background">

      <div class="profile-card">

      <Navigation/>


      <div class="card">
        <h2>Account</h2>
          <div class="card-image">
            <img src="Profile1.png" alt="" />
          </div>
        <h1>John Doe</h1>

        <p class="title"> Location | 651 Prosacco Centers </p>

        <div>
          <a href="#"><i class="fa fa-dribbble"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
          <a href="#"><i class="fa fa-facebook"></i></a>
       </div>
       <div>
       <p class="bold-skills">SKILLS</p>
       <hr/ >

       </div>
       <div class="skills">
             <ul>
                 <li>Coffee</li>
                 <li>Tea</li>
                 <li>Milk</li>
           </ul>
       </div>
       <p class="button1">Edit</p>
       <p class="button1" id="button2">Connect Me</p>
      </div>

      </div>
      </div>

    )
  }
}
export {Account}
