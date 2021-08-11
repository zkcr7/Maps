import React, {Component} from 'react';
import {StyleSheet,View, Image, Dimensions, ToastAndroid} from 'react-native';
import MapView from 'react-native-maps';
import markerImg from './assets/Marker.png'


export default class App extends Component{
  constructor(props){
  super(props);

  this.state ={
    initialRegion: {
     latitude: 33.7444613,
     longitude: -118.3870173,
     latitudeDelta: 0.0122,
     longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height,
    },
    marginBottom : 1
  }
}
componentDidMount(){
  this.handleUserLocation();
  setTimeout(()=>this.setState({marginBottom:0}),100)

}
handleUserLocation =() => {
navigator.geolocation.getCurrentPosition(pos => {
 // alert((JSON.stringify(pos))
  this.map.animateToRegion({
  ...this.state.initialRegion,
  latitude : pos.coords.latitude,
  longitude : pos.coords.longitude
  })
  this.setState({
      ...this.state.initialRegion,
      latitude : pos.coords.latitude,
      longitude : pos.coords.longitude
  })
},
err => {
  console.log(err);
  alert("Something Went Wrong! Plese select location manually.")
}
)
}
  
  onChangeValue = initialRegion =>{
    ToastAndroid.show(JSON.stringify(initialRegion),ToastAndroid.SHORT)
    this.setState({
        initialRegion
    })
}
     

render(){
  console.disableYellowBox = true;
  return(
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
       <MapView
            style = {{flex: 1, marginBottom : this.state.marginBottom}}
            showsUserLocation = {true}
            showsMyLocationButton = {true}
            initialRegion = {this.state.initialRegion}
            onRegionChangeComplete ={this.onChangeValue}
            ref ={ ref => this.map = ref }
            

            />
            <View style={{  top: '50%', left: '50%', marginLeft: -24, marginTop: -38, position: 'absolute'}}>
             <Image style={{height:18, width: 18}} source = {markerImg} />
            </View>
            </View>
    </View>
  );
}
}
const styles =StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  mapContainer: {
    height: '50%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  fullMapContainer: {
    flex:1
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  fullMap: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center'

  },
  
})




