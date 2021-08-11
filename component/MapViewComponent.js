import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import MapView from 'react-native-maps'

export default class MapViewComponent extends Component {
    render() {
        return (
            
                <MapView
                style = {styles.map}
                
                initialRegion={{
                latitude: 24.927181,
                longitude: 67.119441,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
    }}
  />
            
        )
    }
}

const styles = StyleSheet.create({

    map: {
        ...StyleSheet.absoluteFillObject
    }
})
