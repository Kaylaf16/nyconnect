import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { connect } from "react-redux";
import { ListView } from './listview'
import Icon from '@material-ui/core/Icon';
import { fetchUsers } from '../actions';
import Divider from '@material-ui/core/Divider';
class Map extends Component {
  constructor(props) {
super(props);
this.state = { width: 0, height: 0,listview:false,view:'LIST VIEW' };
this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
this.showListView = this.showListView.bind(this);
}
componentWillMount(){
  this.props.fetchUsers()

}
showListView(){
  if(this.state.listview){
    this.setState({listview:false,view:'LIST VIEW'})
  }
  else{
    this.setState({listview:true,view:'MAP VIEW'})
  }

}
componentDidMount() {
this.updateWindowDimensions();
window.addEventListener('resize', this.updateWindowDimensions);
}

componentWillUnmount() {
window.removeEventListener('resize', this.updateWindowDimensions);
}

updateWindowDimensions() {
this.setState({ width: window.innerWidth, height: window.innerHeight });
}
toggleDrawer = (side, open) => () => {
  this.setState({
    [side]: open,
  });
};
   render() {
    const {buttonStyle,inputStyle,buttonStyleMini,buttonStyleList,buttonDiv} = style
     const mapstyle=[
       {
         "elementType": "geometry",
         "stylers": [
           {
             "color": "#212121"
           }
         ]
       },
       {
         "elementType": "labels.icon",
         "stylers": [
           {
             "visibility": "off"
           }
         ]
       },
       {
         "elementType": "labels.text.fill",
         "stylers": [
           {
             "color": "#757575"
           }
         ]
       },
       {
         "elementType": "labels.text.stroke",
         "stylers": [
           {
             "color": "#212121"
           }
         ]
       },
       {
         "featureType": "administrative",
         "elementType": "geometry",
         "stylers": [
           {
             "color": "#757575"
           }
         ]
       },
       {
         "featureType": "administrative.country",
         "elementType": "labels.text.fill",
         "stylers": [
           {
             "color": "#9e9e9e"
           }
         ]
       },
       {
         "featureType": "administrative.land_parcel",
         "stylers": [
           {
             "visibility": "off"
           }
         ]
       },
       {
         "featureType": "administrative.locality",
         "elementType": "labels.text.fill",
         "stylers": [
           {
             "color": "#bdbdbd"
           }
         ]
       },
       {
         "featureType": "administrative.neighborhood",
         "stylers": [
           {
             "visibility": "off"
           }
         ]
       },
       {
         "featureType": "poi",
         "elementType": "labels.text",
         "stylers": [
           {
             "visibility": "off"
           }
         ]
       },
       {
         "featureType": "poi",
         "elementType": "labels.text.fill",
         "stylers": [
           {
             "color": "#757575"
           }
         ]
       },
       {
         "featureType": "poi.business",
         "stylers": [
           {
             "visibility": "off"
           }
         ]
       },
       {
         "featureType": "poi.park",
         "elementType": "geometry",
         "stylers": [
           {
             "color": "#181818"
           }
         ]
       },
       {
         "featureType": "poi.park",
         "elementType": "labels.text.fill",
         "stylers": [
           {
             "color": "#616161"
           }
         ]
       },
       {
         "featureType": "poi.park",
         "elementType": "labels.text.stroke",
         "stylers": [
           {
             "color": "#1b1b1b"
           }
         ]
       },
       {
         "featureType": "road",
         "elementType": "geometry.fill",
         "stylers": [
           {
             "color": "#2c2c2c"
           }
         ]
       },
       {
         "featureType": "road",
         "elementType": "labels",
         "stylers": [
           {
             "visibility": "off"
           }
         ]
       },
       {
         "featureType": "road",
         "elementType": "labels.icon",
         "stylers": [
           {
             "visibility": "off"
           }
         ]
       },
       {
         "featureType": "road",
         "elementType": "labels.text.fill",
         "stylers": [
           {
             "color": "#8a8a8a"
           }
         ]
       },
       {
         "featureType": "road.arterial",
         "elementType": "geometry",
         "stylers": [
           {
             "color": "#373737"
           }
         ]
       },
       {
         "featureType": "road.arterial",
         "elementType": "labels",
         "stylers": [
           {
             "visibility": "off"
           }
         ]
       },
       {
         "featureType": "road.highway",
         "elementType": "geometry",
         "stylers": [
           {
             "color": "#3c3c3c"
           }
         ]
       },
       {
         "featureType": "road.highway",
         "elementType": "labels",
         "stylers": [
           {
             "visibility": "off"
           }
         ]
       },
       {
         "featureType": "road.highway.controlled_access",
         "elementType": "geometry",
         "stylers": [
           {
             "color": "#4e4e4e"
           }
         ]
       },
       {
         "featureType": "road.local",
         "stylers": [
           {
             "visibility": "off"
           }
         ]
       },
       {
         "featureType": "road.local",
         "elementType": "labels.text.fill",
         "stylers": [
           {
             "color": "#616161"
           }
         ]
       },
       {
         "featureType": "transit",
         "stylers": [
           {
             "visibility": "off"
           }
         ]
       },
       {
         "featureType": "transit",
         "elementType": "labels.text.fill",
         "stylers": [
           {
             "color": "#757575"
           }
         ]
       },
       {
         "featureType": "water",
         "elementType": "geometry",
         "stylers": [
           {
             "color": "#000000"
           }
         ]
       },
       {
         "featureType": "water",
         "elementType": "labels.text",
         "stylers": [
           {
             "visibility": "off"
           }
         ]
       },
       {
         "featureType": "water",
         "elementType": "labels.text.fill",
         "stylers": [
           {
             "color": "#3d3d3d"
           }
         ]
       }
     ];
     const defaultMapOptions = {
       styles:[...mapstyle],
       fullscreenControl: false,
       zoom: 2,
       disableDefaultUI: true, // a way to quickly hide all controls
       mapTypeControl: false,
       scaleControl: true,
       zoomControl: true,


     };
     var data = [{location:new window.google.maps.LatLng(40.756795, -73.954298),weight:5},
           new window.google.maps.LatLng(40.756795, -73.954298 ),
           new window.google.maps.LatLng(40.756795, -73.954298 ),
           new window.google.maps.LatLng(40.756795, -73.954298 ),
           new window.google.maps.LatLng(40.756795, -73.954298 ),
           new window.google.maps.LatLng(40.756795, -73.954298 )
     ]
    //var data = this.props.users
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
         defaultOptions={defaultMapOptions}
         options={{
           ...defaultMapOptions,
           draggableCursor: props.cursor
         }}
        defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
        defaultZoom = { 13 }

      >
      <HeatmapLayer data={data}/>
      </GoogleMap>
   ));
   return(
      <div>
      <center><Button style={buttonStyle} onClick={this.toggleDrawer('right', true)}  >
        Find People!
        </Button></center>
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
        <div style={{backgroundColor:"#101315",width:`${this.state.width/4}px`,height:'100%'}}>
        <div
        style={{padding:20,width:"100%",height:'20%',backgroundColor:"#101315",display:"flex",alignItems:"start",flexDirection:"column"}}
        tabIndex={0}
        role="button"
        >

<input style ={inputStyle} placeholder="Search a skill"/>

<Button style={buttonStyleMini}>Search</Button>
</div>
</div>
</Drawer>
<Button style={buttonStyleList} onClick={this.showListView}>{this.state.view}</Button>

{this.state.listview?(<ListView/>):(
  <GoogleMapExample
    containerElement={ <div style={{ height: `${this.state.height}px`, width:`${this.state.width}px`,position:"absolute", top:0,left:0}} /> }
    mapElement={ <div style={{ height: `100%` }} /> }
  />
)}

      </div>
   );
   }
};
const style= {
  buttonStyleMini:{
    marginLeft:'90',
 width:100,
 zIndex:3,
  textTransform: 'uppercase',
 outline: 'none',

 height:45,

 border:'none',
 borderRadius:45,
 color:'white',
 fontFamily:'Roboto, sans-serif',
 fontSize:18,
 marginTop:"6%",
 fontWeight:600,
 cursor:'pointer'
  },
  buttonStyleList:{
    marginLeft:'90',
 width:195,
 zIndex:3,
  textTransform: 'uppercase',
 outline: 'none',
 boxShadow:'0px 8px 15px rgba(0, 0, 0, 0.1)',
 height:45,
 backgroundColor:'white',
 border:'none',
 color:'#42e7a6',
 fontFamily:'Roboto, sans-serif',
 fontSize:18,
 marginTop:"3%",

 fontWeight:600,
 cursor:'pointer',
 position:'absolute',
 top:"85%",
 left:"3%"
  },
 buttonStyle:{

width:195,
zIndex:3,
 textTransform: 'uppercase',
outline: 'none',
boxShadow:'0px 8px 15px rgba(0, 0, 0, 0.1)',
height:45,
backgroundColor:'#42e7a6',
border:'none',
borderRadius:45,
color:'white',
fontFamily:'Roboto, sans-serif',
fontSize:18,
marginTop:"3%",

fontWeight:600,
cursor:'pointer'
},
inputStyle:{
   marginTop:"6%",
   outline:"none",
backgroundColor:"transparent",
border:"none",
width:"50%",
color:"white",
fontSize:"16px",
borderBottom:"2px solid #42e7a6",

}
}
function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps,{ fetchUsers })(Map);
