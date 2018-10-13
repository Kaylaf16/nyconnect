import React, { Component } from 'react';
import {Navigation} from './Navigation'
class landing extends Component {
  render(){
    const {buttonStyle} =styles;
    return(


      <div class="background">
      <div class="dotsbg">

        <Navigation/>

            <div class="hero">
              <h1> Connect </h1>
              <h2> Connect, Collaborate, Create </h2>
              <img class="underline" src="underline.png" alt="" />

</div>

            </div>
            <div class="row">
                      <div class="column">
                      <h2>ABOUT NYConnect</h2>
                      <p> Meet and collaborate with people with a
                      variety of skills. have you ever wanted to collaborate with
                       other stem students who share the same interest as you?
                      </p>

                         <p> NYConnect allows you to collaborate with all sorts of people
                         who share similar skill sets to you.</p>

                      </div>

                      <div class="column">
                            <img class="map-image" src="mapDots.png" alt="" />

                      </div>
            </div>
            <button style={buttonStyle}className="button">Explore</button>
      </div>

    )
  }
}
const styles = {
  buttonStyle:{
    border: "none",
    outline: 0,
    display: "inline-block",
    padding: "10px 0px 10px 0px",
    color: "black",
    fontWeight: "bold",
    backgroundColor: "#00E676",
    cursor: "pointer",
    width: "15%",
    borderRadius: "25px",
    fontSize: "18px",
    align:"center",
    marginBottom:"5%",
    marginLeft:"15%",
    marginTop:"0"







  }

}
export {landing}
