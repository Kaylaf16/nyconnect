import React, { Component } from 'react';
import  {ListItem} from './listitem'
import Divider from '@material-ui/core/Divider';
class ListView extends Component {
  renderUsers(){
const { backgroundStyles,innerListView,dividerStyle} = styles;
  var userListData =[]
  var list = this.props.data
    list.forEach(x=>{
      userListData.push(
        <div>
        <ListItem name={x.name} skills ={x.skills}/>
        <center><Divider style={dividerStyle}/></center>
        </div>
      )
    })
    return userListData
  }
  render(){
  var getUserList =this.renderUsers()
    const { backgroundStyles,innerListView,dividerStyle} = styles;
    return(
      <div style={backgroundStyles}>
        <div style ={innerListView}>

          {getUserList}
        </div>
      </div>
    )
  }
}
const styles ={
  backgroundStyles:{
    height:'100%',
    width:'100%',
    position:'absolute',
    top:0,
    zIndex:0,
    backgroundColor:'#101315'

  },
  dividerStyle:{
    height:1,
    marginTop:'5px',
    marginBottom:'5px',
    backgroundColor:'white',
    width:'230px'
  },
  innerListView:{
    height:"400px",
    width:"70%",
    paddingLeft:'50px',
    overflowX: "scroll",
    marginLeft:"auto",
    justifyContent:"start",
    marginRight:"auto",
    paddingTop:"4%",
    paddingBottom:"4%",
      boxShadow: '17px 17px rgba(0,0,0,0.3)',
    backgroundColor:"#2e323c",
    marginTop:"120px"
  }
}
export {ListView}
