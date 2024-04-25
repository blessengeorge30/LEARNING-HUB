import React from "react";
import {
    View,
    StyleSheet,
    ImageBackground,
    Image,
    Text,
    ScrollView,
    TextInput,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { PRODUCT_HOME } from "../Components/Subjects";
import { PRODUCT_COURSES } from "../Components/Courses";
import { PRODUCT_TRAIL } from "../Components/Trail";



const Search = () => {
    const navigation = useNavigation();
       const Flutter = () => {
           navigation.navigate("Flutter")
       }
       const KSRTC = () => {
        navigation.navigate("KSRTC")
    }
    const Businfo = () => {
        navigation.navigate("Businfo")
    }
       const course = () => {
        navigation.navigate("Native")
    }
    const renderitem = (item) => {

        return (
            <TouchableOpacity style={styles.discoversubjects} onPress={Flutter} 
            
            >
                <View style={{ flexDirection: 'row'}}>
                    <Image style={{ height: 30, width: 30, marginLeft: 25, marginTop:22,tintColor:"#2ecc71"}} source={item.image} />
                    <Text style={{ marginLeft: 25, marginTop: 27, fontSize: 15, fontWeight: 'bold', color: 'black' }}>{item.name}</Text>
<View>
<Text style={{ marginLeft: -85, marginTop: 50, fontSize: 12, fontWeight: 'bold', color: 'black' }}>{item.name1}</Text>
</View>
                    
                </View>
                {/* <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginLeft: 27, marginTop: 15, fontSize: 20, fontWeight: 'bold', color: 'black' }}>{item.price}</Text>
                    <Text style={{ marginLeft: 25, marginTop: 15, fontSize: 20, fontWeight: 'bold', color: 'green' }}>{item.price1}</Text>

                </View> */}

            </TouchableOpacity>
        )
    }
    const renderitems = (item) => {

        return (
            <TouchableOpacity  onPress={course}>
                <View style={{ alignSelf: 'center', marginVertical:2,marginHorizontal:15 }}>
                    <Image style={{ height: 110, width: 200,borderRadius:12 }} source={item.image} />


                </View>

            </TouchableOpacity>
        )
    }
    const renderitems1 = (item) => {

        return (
            <View style={styles.discoverclasses}>
            {/* <View style={{ flexDirection: 'row', }}> */}
                {/* <Image style={{ height: 40, width: 40, marginLeft: 15, marginTop: 10 }} source={item.image} /> */}
                <Text style={{ marginLeft: 12, marginTop: 20, fontSize: 20, fontWeight: 'bold', color: 'white' }}>{item.name}</Text>
            {/* </View> */}
            <View >
                <Text style={{ marginHorizontal: 20, marginTop: 15, fontSize: 12, fontWeight: 'bold', color: 'grey' }}>{item.description}</Text>
                <TouchableOpacity style={styles.button2}>
                    <Text style={{ color:'white'}}>{item.buttontxt}</Text>
                    </TouchableOpacity>
              

            </View>

            </View>
        )
    }

    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={require('../assets/background.png')}
                style={styles.backgroundImage}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.button1}>
                    <Image source={require('../assets/menu.png')} style={{ height: 15, width: 15, tintColor: 'green' }} />

                </TouchableOpacity>
                <Image source={require('../assets/inmakes.jpeg')}
                    style={styles.logo} />
                <View >
                    <TouchableOpacity style={styles.button}>
                        <Image source={require('../assets/blackcircle.png')} style={{ height: 15, width: 15, tintColor: 'green' }} />
                        <Text style={styles.buttonText}>Online</Text>
                    </TouchableOpacity>
                </View>

            </View>


            {/* <ActivityIndicator size={35}color='blue' animating={true}/> */}
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.textView}>BUS TRACK</Text>
                {/* <Image source={require('../assets/wave.png')}
                    style={styles.wave} /> */}
                <View ></View>

            </View>

            <Text style={styles.textView1}>Know Your Bus Time  </Text>
            <TouchableOpacity style={styles.inputView}>
                <View style={{ flexDirection: 'row',width:'100%',alignItems:'center',justifyContent:'space-between' }}>
                    <Text style={{ color: 'grey', marginTop: 10 }}>SEARCH BUS</Text>
                    <Image source={require('../assets/arrowdown.png')}
                        style={styles.arrow} />

                </View>

                <Text style={{ color: 'white', marginTop: -5 }}>FIND YOUR BUSES  </Text>
            </TouchableOpacity>
           


            {/* <View style={{ marginVertical: 12 }}>
                    <ScrollView vertical={true}>
                        {
                            PRODUCT_HOME?.map((item) => {
                                return renderitem(item);
                            })
                        }
                    </ScrollView>
                </View> */}

                <TouchableOpacity style={styles.headercard} onPress={KSRTC}>
                    
                        <View style={{flexDirection:'row', marginTop: 23 }}>
                         <View style={{marginRight:15}}>
                            <Image source={require('../assets/physics.png')}
                                style={styles.logo26}>
                            </Image>
                        </View> 
                          <View>
                          <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Bus Schedule</Text>
                            <Text style={{ fontSize: 12, color: 'grey' }}>Provides departure times of bus services.</Text>
                          </View>                   
                        </View>
                        
                </TouchableOpacity>
                <TouchableOpacity style={styles.headercard} onPress={Businfo}>
                    
                    <View style={{flexDirection:'row', marginTop: 23 }}>
                     <View style={{marginRight:15}}>
                        <Image source={require('../assets/biology.png')}
                            style={styles.logo26}>
                        </Image>
                    </View> 
                      <View>
                      <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Bus Information</Text>
                        <Text style={{ fontSize: 12, color: 'grey' }}>Provides essential information .</Text>
                      </View>                   
                    </View>
                    
            </TouchableOpacity>
            <TouchableOpacity style={styles.headercard} onPress={Flutter}>
                    
                    <View style={{flexDirection:'row', marginTop: 23 }}>
                     <View style={{marginRight:15}}>
                        <Image source={require('../assets/chem.png')}
                            style={styles.logo26}>
                        </Image>
                    </View> 
                      <View>
                      <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Search for Taxi</Text>
                        <Text style={{ fontSize: 12, color: 'grey' }}>Instantly provides information about taxis.</Text>
                      </View>                   
                    </View>
                    
            </TouchableOpacity>
            <TouchableOpacity style={styles.headercard} onPress={Flutter}>
                    
                    <View style={{flexDirection:'row', marginTop: 23 }}>
                     <View style={{marginRight:15}}>
                        <Image source={require('../assets/swift.png')}
                            style={styles.logo26}>
                        </Image>
                    </View> 
                      <View>
                      <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Coustmer Services</Text>
                        <Text style={{ fontSize: 12, color: 'grey' }}>Support to customers to resolve their inquiries.</Text>
                      </View>                   
                    </View>
                    
            </TouchableOpacity>



            
                {/* <View>
                <Text style={{ color: 'grey', marginTop: 10,marginHorizontal:25 }}>Recent Courses</Text>
                </View>
                <View style={{ marginVertical: 12 }}>
                    <ScrollView horizontal={true}>
                        {
                            PRODUCT_COURSES?.map((item) => {
                                return renderitems(item);
                            })
                        }
                    </ScrollView>
                </View>
                <View style={{ marginVertical: 12 }}>
                    <ScrollView horizontal={true}>
                        {
                            PRODUCT_TRAIL?.map((item) => {
                                return renderitems1(item);
                            })
                        }
                    </ScrollView>
                </View> */}

                </ImageBackground>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: 'white',
        flex: 1,


    },
    backgroundImage: {
        height: '100%',
        width: '100%',
    
        flex:1,
        
    },

    logo: {
        height: 0,
        width: 210,
        marginBottom: 0,
        marginLeft: -20,
        marginRight: 25,
        marginTop: 8,
        opacity:0,
        resizeMode: "contain"
    },
    wave: {
        height: 18,
        width: 18,
        marginBottom: 5,
        marginLeft: 5,
        marginTop: 38,
        resizeMode: "contain"
    },
    arrow: {
        height: 25,
        width: 25,
        tintColor: 'white',
        resizeMode: "contain",
        // marginLeft:250,
        marginTop:15,
        alignItems:'center',
        justifyContent:"space-between",
        transform: [{ rotate: '270 deg' }],

        
        
    },
    textView: {
        fontSize: 32,
        fontWeight:'800',
        color: '#2d390b',
        marginLeft: 109,
        marginTop: 30,
        

    },
    textView1: {
        fontSize: 22,
        fontWeight: '300',
        color: 'black',
        marginLeft: 100,
        marginTop: 5,

    },
    header: {
        flexDirection: "row",
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#Aaaaaa',
        width: 420,
        height: 120,
        marginTop:25


    },
    inputView: {
        width: '89%',
        height: 65,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#062738',
        backgroundColor: '#011a27',
        marginTop: 35,
        marginBottom: 15,
        paddingHorizontal:15,
        marginLeft: 18,



    },

    button: {
        height: 35,
        width: 85,
        borderColor: 'green',
        borderWidth: 1,
        backgroundColor: 'white',
        paddingVertical: 8,
        flexDirection: "row",
        borderRadius: 5,
        justifyContent: 'center',

        marginLeft: 15
    },
    button1: {
        height: 35,
        width: 35,
        borderColor: 'green',
        borderWidth: 1,
        backgroundColor: 'white',
        paddingVertical: 8,
        flexDirection: "row",
        borderRadius: 5,
        justifyContent: 'center',

        marginLeft: 35
    },
    button2: {
        height: 50,
        width: 120,
        borderColor: 'green',
        borderWidth: 2,
        backgroundColor: 'green',
       marginTop:105,
       position:'absolute',
        borderRadius: 5,
        alignItems:"center",
        justifyContent: 'center',
        marginLeft: 32
    },
    
    buttonText: {
        color: 'black',
        marginLeft: 6,
        fontSize: 12,

    },
    discoversubjects: {
        borderWidth: 1,
        width: 350,
        height: 80,
        borderColor: 'white',
        borderRadius: 8,
        elevation:12,
        marginHorizontal: 10,
        marginLeft:28,
        marginTop:15,
        // alignItems: "center",
        // justifyContent: 'center',
        backgroundColor: 'white'
    },
    discoverclasses: {
        borderWidth: 1,
        borderColor: 'white',
        width: 205,
        height: 270,
        borderColor: 'green',
        borderRadius: 10,
        marginHorizontal: 10,
        marginLeft:15,
        marginTop:5,
        elevation:10,
        // alignItems: "center",
        // justifyContent: 'center',
        backgroundColor: '#01111a'
    },
    headercard: {
        borderWidth: 0,
        width: '85%',
        height: 80,
        backgroundColor: 'white',
        marginTop: 20,
        marginHorizontal: 25,
        borderRadius: 10,
        elevation: 15
      
      
      },
      logo26:{
        height: 25,
        width: 25,
      marginTop:3,
        marginLeft:22,
        tintColor: '#2ecc71',
        
    },
})
export default Search;
