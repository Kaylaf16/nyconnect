import React, { Component } from 'react';

class Login extends Component {
  render(){
    return(
      <div>

      <div class= "form">

      <form class="login-form">
        <input type="text" placeholder="Name"/>
        <input type="password" placeholder="E-Mail"/>
        <input type="text" placeholder="Password"/>
        <input type="password" placeholder="Confirm Password"/>
        <input type="text" placeholder="Skills"/>
        <button>login</button>
        <p class="message">Not registered? <a href="#">Create an account</a></p>
        </form>


        </div>


      </div>
    )
  }
}
export {Login}
