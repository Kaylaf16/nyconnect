import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
class ListItem extends Component {
  render(){
    const { divBox,imgStyle,buttonStyle} = styles
    return(
      <div style={divBox}>
      <img src="avatar.png" style={imgStyle}/>
      <div style={{display:'flex',flexDirection:'column',color:'white',height:"100px",width:"280px",margin:0,padding:0,marginLeft:'30px',marginTop:'30px'}}>
      <span style={{marginBottom:'10px'}}><b>{this.props.name}</b></span>
      <span>{this.props.skills}</span>
      </div>
      <Button style={buttonStyle}>Connect</Button>
    </div>
    )
  }
}
const styles ={
  divBox:{
    height:'auto',
    width:'70%',
    borderRadius:'3px',
    marginLeft:'10%',
    display:'flex',
    flexDirection:'row-wrap',
    backgroundColor:'transparent'

  },
  imgStyle:{
    marginTop:'1%',
    marginLeft:'5%',
    height:80,
    width:80
  },
  buttonStyle:{
    width:100,
    float:'right',
    zIndex:3,
     textTransform: 'uppercase',
    outline: 'none',
    boxShadow:'0px 8px 15px rgba(0, 0, 0, 0.1)',
    height:35,
    backgroundColor:'#42e7a6',
    border:'none',
    color:'white',
    fontFamily:'Roboto, sans-serif',
    fontSize:14,
    marginTop:"45px",
    borderRadius:0,
    marginLeft:90,
    fontWeight:400,
    cursor:'pointer'


  }
}
export {ListItem}
