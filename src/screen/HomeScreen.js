import { Text, StyleSheet, View,onSelect,Image,TouchableOpacity } from 'react-native'
import { useState } from 'react'
import React from 'react'
import { colors } from '../themes/colors';
import {Picker} from '@react-native-picker/picker';
import {Images} from '../themes/Images'
import {FontAwesome5} from "@expo/vector-icons"
import {LinearGradient} from 'expo-linear-gradient';



export default function HomeScreen () {
  const [item,setItem]=useState()

  
  

  
    return (
     <View
     style={{
       flex:1,
       flexDirection:"column",
     }} >
       
        <View  style={styles.view1}>
        <View style={{flexDirection:"row", marginTop:56}}>
         <FontAwesome5 name='bars' size={18} style={{color:'white'}}/>
         <FontAwesome5 name='bell' size={18} style={{color:'white', marginLeft:285}}/>
        
       </View>
       
       <View style={{flexDirection:"row", marginTop:47}}>
       <Text style={{color: colors.white, fontSize:24}}> Covid-19
          </Text>

      <View style={styles.picker}>
      <Picker
        
        selectedValue={item}
        onValueChange={(itemValue)=>setItem(itemValue)}
        >
          <Picker.Item label="USA" value="USA"/>
          <Picker.Item label="Uk" value="Uk"/>
          <Picker.Item label="BAN" value="Ban"/>
        </Picker>
      </View>
       </View>
           

           <View style={{marginTop:47}}>
             <Text style={{fontSize:20,color:'white'}}>Are you feeling sick?</Text>
             <Text style={{fontSize:14, marginTop:12,color:'white', opacity:.8, textAlign:'justify'}}>If you feel sick with any of covid-19 symptoms please call or SMS us immediately for help.</Text>
           </View>

           <View style={{flex:1,flexDirection:'row',marginTop:16}}>
           <TouchableOpacity 
          style={styles.Button1}
          
          >
            <FontAwesome5 name='phone' size={16} style={{color:'white',transform: [{rotateY: '180deg'}],marginRight:14}}></FontAwesome5>
            <Text style={{color:'white', fontSize:16,textAlign:'center'}}>Call Now</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.Button2}
          
          >
            <FontAwesome5 name='sms' size={16} style={{color:'white',marginRight:14}}></FontAwesome5>
            <Text style={{color:'white', fontSize:16,textAlign:'center'}}>Send SMS</Text>
          </TouchableOpacity>
           </View>
          
        
      </View>
      <View style={styles.view2}>
        <Text style={{marginTop:32,fontSize:20}} >Prevention
        </Text>
        
          <View style={{flexDirection:'row',marginTop:24}}>
            <Image style={{height:90,width:90,marginRight:28}} source={Images.man1}></Image>
            <Image style={{height:90,width:90, marginRight:28}} source={Images.man2}></Image>
            <Image style={{height:90,width:90}} source={Images.man3}></Image>

          </View>
          <View style={{flexDirection:'row',marginTop:12}}>
             <View style={{width:90,height:36,marginRight:28}}>
             <Text style={{fontSize:14,textAlign:'center'}}>Avoid Close Contact</Text>
             </View>
              <View style={{width:90,height:36,marginRight:28}}>
              <Text style={{fontSize:14,textAlign:'center'}}>Clean your hands Often</Text>
              </View>
              <View style={{width:90,height:36,marginRight:28}}>
              <Text style={{fontSize:14,textAlign:'center'}}>Wear a facemask</Text>
              </View>
              
          </View>
          <View>

          </View>
          <View>

          </View>
     <View>
          
     <LinearGradient colors={['#56549E','#AEA1E5']} style={styles.view3}>
 <View style={{flexDirection:'column'}}>
 <Text style={{fontSize:18, color:'white'}}>
    Do your Own test!!!
  </Text>
  <Text style={{fontSize:14, color:'white'}}>
  Follow the instructions to do your own test.
  </Text>
 </View>
</LinearGradient>

     </View>

         
       
      </View>
     </View>
    )
  }

  const styles = StyleSheet.create({
    view1: {
      flex:.5,
      
      backgroundColor: colors.blue,
      // alignItems: 'center',
      // justifyContent: 'center',
      padding: 24,
      color: colors.white,
      fontSize: 30,
      borderRadius:20,
      borderColor:colors.blue,
      borderWidth:2,
      
    },
    picker:{
      width:116,
      height:40,
      justifyContent:'center',
      borderRadius:20,
      borderWidth:2,
      backgroundColor: colors.white,
      marginLeft:105
    },
    Button1:{
      flexDirection:'row',
      backgroundColor:colors.maron,
      color:colors.white,
      width:155,
      height:48,
      borderRadius:20,
      borderWidth:2,
      borderColor:colors.maron,
      justifyContent:'center',
      alignItems:'center'
      
    },
    Button2:{
      marginLeft:17,
      flexDirection:"row",
      backgroundColor:colors.skyBlue,
      color:colors.white,
      width:155,
      height:48,
      borderRadius:20,
      borderWidth:2,
      borderColor:colors.skyBlue,
      justifyContent:'center',
      alignItems:'center'
      
    },
    view2: {
      flex:.5,
      
      
      // alignItems: 'center',
      // justifyContent: 'center',
      padding: 24,
     
      borderRadius:20,
      borderColor:'white',
      borderWidth:2,
      
    },
    view3:{
      height:104,
      width:327,
      marginTop:44,
      borderWidth:1,
      borderRadius:20,
    },
    linearGradient:{
       flex:1,
     
    }
  });
