import { Text, View,StyleSheet,TouchableOpacity, Image} from 'react-native'
import React, { Component } from 'react'
import { useState } from 'react/cjs/react.production.min'
import {Images} from '../themes/Images'
// import { TouchableOpacity } from 'react-native-web'




const DropDown =({
    data,
    value
})=>{
    console.log("selected item", value)
    // const [data,setData]= useState([])
    return (
      <View style={styles.container}>
          <TouchableOpacity 
          style={styles.dropdown}
          activeOpacity={0.8}
          >
         <Text>Choose an country</Text>
         <Image source={Images.dropdown}></Image>
          </TouchableOpacity>
        {data.map((val,i)=>{
            return(
                <Text key={String(i)}>{val.name}</Text>
            )
        })}
      </View>
    )
  }


  const styles =StyleSheet.create({
      
      dropdown:{
          marginLeft:250,
           width:50,
           backgroundColor: 'white'
      }
  });

  export default DropDown;