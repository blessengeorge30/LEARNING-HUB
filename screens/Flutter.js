
import React from "react";
import { Text,
     View,
     Image,
    StyleSheet,
    ScrollView,                                                                                                                                                                                                                         
    ImageBackground } from "react-native";
    import Icon from 'react-native-vector-icons/AntDesign';   
import { PRODUCT_PROFILEITEMS } from "../Components/profileitemlist";


const Profile = () => {
    const renderItem = (item) => {
        return (
           
          <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View>
              <View style={{ flexDirection: 'row', }}>
                <Image style={{ height: 30, width: 30, marginLeft: 30 ,marginVertical :15,}} source={item.image} />

                <Text style={{color: 'black',fontWeight: 'bold',fontSize:18,marginLeft:15,marginTop:15 }}>{item.name}</Text>
              </View>
              <Text style={{color: 'grey', fontWeight: 'bold',fontSize:15,position:'absolute',marginTop:34,marginLeft:75 }}>{item.name1}</Text>  

              <View style={{ borderBottomWidth: 0.5, borderBottomColor: 'white', marginHorizontal: 10 }}></View>
            </View>
          </View>
        );
        
      };
    return (
    <ScrollView style={styles.container}>
        <ImageBackground  source={require('../assets/bginmakes.png')}
                style={styles.backgroundImage}>
        <View style={{ marginTop:40,marginBottom:50 }}>
        {/* <View style={{flex:1}}>
        <Image source={require('../assets/blessen.jpg')}
                    style={styles.logo}>
                </Image>
        </View> */}
        <View style={{marginTop:24,marginLeft:25,flexDirection:'row'}}>
        
        <Text style={{fontSize: 29,fontWeight: 'bold',color: 'white'}}>REACT-NATIVE</Text>
        <Image source={require('../assets/reactnativelogo.png')}
                    style={styles.logo25}>
                </Image>
                </View>
                <View style={{flexDirection:'row',marginVertical:4}}>
                <Image source={require('../assets/tick.png')}
                    style={styles.logo26}></Image>
                <Text style={{fontSize: 15,marginLeft:15,marginTop:6,fontWeight: 'bold',color: 'white'}}>Course Completion - 100%</Text>
                </View>
                <View style={{flexDirection:'row',marginVertical:4}}>
                <Image source={require('../assets/tick.png')}
                    style={styles.logo26}></Image>
                <Text style={{fontSize: 15,marginLeft:15,marginTop:6,fontWeight: 'bold',color: 'white'}}>258 Hours Completed </Text>
               </View>
    
               

        
       
        </View>
        </ImageBackground>
        <View style={{height:800,backgroundColor:'white',borderRadius:10,}}>
        <View style={styles.headercard}>
                    
                        <View style={{flexDirection:'row', marginTop: 33 }}>
                         <View style={{marginRight:15}}>
                            <Image source={require('../assets/tick.png')}
                                style={styles.logo26}>
                            </Image>
                        </View> 
                          <View>
                          <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>REACT-NATIVE U.I COMPONENTS</Text>
                            <Text style={{ fontSize: 12, color: 'grey' }}>COMPLETION STATUS -100% </Text>
                          </View>                   
                        </View>
                        
                </View>
                <View style={styles.headercard}>
                    
                    <View style={{flexDirection:'row', marginTop: 33 }}>
                     <View style={{marginRight:15}}>
                        <Image source={require('../assets/tick.png')}
                            style={styles.logo26}>
                        </Image>
                    </View> 
                      <View>
                      <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>REACT-NATIVE STACK NAVIGATION</Text>
                        <Text style={{ fontSize: 12, color: 'grey' }}>COMPLETION STATUS -100% </Text>
                      </View>                   
                    </View>
                    
            </View>
            <View style={styles.headercard}>
                    
                    <View style={{flexDirection:'row', marginTop: 33 }}>
                     <View style={{marginRight:15}}>
                        <Image source={require('../assets/tick.png')}
                            style={styles.logo26}>
                        </Image>
                    </View> 
                      <View>
                      <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>REACT-NATIVE BOTTOM NAVIGATION</Text>
                        <Text style={{ fontSize: 12, color: 'grey' }}>COMPLETION STATUS -100% </Text>
                      </View>                   
                    </View>
                    
            </View>
            <View style={styles.headercard}>
                    
                    <View style={{flexDirection:'row', marginTop: 33 }}>
                     <View style={{marginRight:15}}>
                        <Image source={require('../assets/tick.png')}
                            style={styles.logo26}>
                        </Image>
                    </View> 
                      <View>
                      <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>REACT-NATIVE SLIDE DRAWER</Text>
                        <Text style={{ fontSize: 12, color: 'grey' }}>COMPLETION STATUS -100% </Text>
                      </View>                   
                    </View>
                    
            </View>
            <View style={styles.headercard}>
                    
                    <View style={{flexDirection:'row', marginTop: 33 }}>
                     <View style={{marginRight:15}}>
                        <Image source={require('../assets/tick.png')}
                            style={styles.logo26}>
                        </Image>
                    </View> 
                      <View>
                      <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>REACT-NATIVE FRONT-END DESIGN</Text>
                        <Text style={{ fontSize: 12, color: 'grey' }}>COMPLETION STATUS -100% </Text>
                      </View>                   
                    </View>
                    
            </View>
            <View style={styles.headercard}>
                    
                    <View style={{flexDirection:'row', marginTop: 33 }}>
                     <View style={{marginRight:15}}>
                        <Image source={require('../assets/tick.png')}
                            style={styles.logo26}>
                        </Image>
                    </View> 
                      <View>
                      <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>REACT-NATIVE REDUX KIT</Text>
                        <Text style={{ fontSize: 12, color: 'grey' }}>COMPLETION STATUS -100% </Text>
                      </View>                   
                    </View>
                    
            </View>
          
        </View>
    </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        height:100,
        backgroundColor: 'black',
        flex:1
    },
    logo: {
    height: 125,
    width: 125,
    marginLeft:22
    
},
backgroundImage:{
  flex:1,
  
},

cardtext:{
    marginTop:12,
    marginLeft:24,
    color:'white',
    fontSize:18,
   marginRight:110
},
headercard: {
  borderWidth: 0,
  width: '85%',
  height: 100,
  backgroundColor: 'white',
  marginTop: 25,
  marginHorizontal: 25,
  borderRadius: 10,
  elevation: 15


},
cardtext: {
  marginVertical: 25,
  marginHorizontal: 35,
  color: '#000305',
  fontSize: 20,
  fontWeight: 'bold'
},
cardtext1: {
  marginVertical: 15,
  marginHorizontal: 20,
  color: '#000305',
  fontSize: 18,
  //    fontWeight:'bold'
},
cardtext2: {
  marginVertical: 15,
  marginHorizontal: 20,
  color: '#000305',
  fontSize: 18,
  fontWeight: 'bold'
},
cardtext3: {
  marginVertical: 15,
  marginHorizontal: 60,
  color: '#000305',
  fontSize: 18,
  fontWeight: 'bold'
},
button1: {
  height: 35,
  width: 35,
  borderColor: 'white',
  borderWidth: 1,
  backgroundColor: 'black',
  paddingVertical: 8,
  flexDirection: "row",
  borderRadius: 5,
  justifyContent: 'center',


},

button2: {
  height: 80,
  width: '85%',
  borderColor: 'green',
  borderWidth: 2,
  backgroundColor: 'green', 
  borderRadius: 10,
  alignItems:"center",
  justifyContent: 'center',
  marginLeft: 30,
  marginVertical:15
},
button3: {
  flexDirection:'row',
  height: 80,
  width: '85%',
  borderColor: '#01c459',
  borderWidth: 2,
  backgroundColor: '#01c459', 
  borderRadius: 10,
  marginLeft: 30,
  marginVertical:15,
  
},
button4: {
  height: 45,
  width: 45,
  borderColor: '#017635',
  borderWidth: 1,
  backgroundColor: '#01c459',
  paddingVertical: 8,
  flexDirection: "row",
  borderRadius: 5,
  marginvertical:20,
  marginTop:16,
  marginHorizontal:25,
  justifyContent: 'center',


},
    logo25:{
      height: 35,
      width: 35,
    marginTop:-2,
      marginLeft:12,
      
  },
  logo26:{
    height: 25,
    width: 25,
  marginTop:3,
    marginLeft:22,
    
},


})
export default Profile;