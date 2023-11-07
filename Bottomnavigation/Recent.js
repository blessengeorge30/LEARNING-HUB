
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
import { PRODUCT_COURSES1 } from "../Components/Videos";



const Search = () => {
    const navigation = useNavigation();
       const Flutter = () => {
           navigation.navigate("UItrends")
       }
    const renderitems = (item) => {

        return (
            <TouchableOpacity style={styles.discoverfriends} onPress={Flutter} >
                <View style={{ alignSelf: 'center', marginVertical:10,marginHorizontal:10 ,elevation:35}}>
                    <Image style={{ height: 190, width: 335, }} source={item.image} />


                </View>

            </TouchableOpacity>
        )
    }
  

    return (
        <ScrollView style={styles.container}>
            {/* <ImageBackground source={require('../assets/background.png')}
                style={styles.backgroundImage}> */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.button1}>
                    <Image source={require('../assets/menu.png')} style={{ height: 15, width: 15, tintColor: 'green' }} />

                </TouchableOpacity>
                <Image source={require('../assets/inmakes.jpg')}
                    style={styles.logo} />
                <View >
                    <TouchableOpacity style={styles.button}>
                        <Image source={require('../assets/blackcircle.png')} style={{ height: 15, width: 15, tintColor: 'green' }} />
                        <Text style={styles.buttonText}>Classes</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={{ height: 1900, backgroundColor: '#000d1b', borderRadius: 25, marginTop: -15 }}>
           
               
                <TextInput style={[styles.inputView1, styles.setColorwhite]}
                    placeholder='Search'
                    placeholderTextColor='grey'
                    maxLength={20}>
                </TextInput>

              
            <Text style={{ color: 'white',fontSize:15, marginTop: 25,marginHorizontal:45 }}>Recently Watched </Text>
               
                <View style={{ marginVertical: 22,marginHorizontal:20}}>
                    <ScrollView Vertical={true}>
                        {
                            PRODUCT_COURSES1?.map((item) => {
                                return renderitems(item);
                            })
                        }
                    </ScrollView>
                </View>              
              </View>
                
                    
               







          
            


           
            {/* </ImageBackground> */}

  
               
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
        
    
        flex:0.5,
        
    },

    logo: {
        height: 210,
        width: 210,
        marginBottom: 5,
        marginLeft: -15,
        marginRight: 25,
        marginTop: 8,
        resizeMode: "contain"
    },
    wave: {
        height: 100,
        width: 100,
        marginBottom: 5,
        marginTop: 200,
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
        justifyContent:"space-between"

        
        
    },
    textView: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 35,
        marginTop: 40,
        

    },
    textView1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        // marginLeft: 35,
        // marginTop: 5,

    },
    header: {
        flexDirection: "row",
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#Aaaaaa',
        width: 420,
        height: 120,


    },
    inputView: {
        width: '89%',
        height: 65,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#062738',
        backgroundColor: '#03141c',
        marginTop: 35,
        paddingHorizontal:15,
        marginLeft: 18,



    },
    inputView1: {
        width: '75%',
        height: 35,
        borderWidth: 0.5,
        borderRadius: 25,
        borderColor: 'white',
        backgroundColor:'white',
        marginTop: 35,
        paddingLeft: 40,
        marginHorizontal:48
        
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
        width: 130,
        height: 60,
        borderColor: 'black',
        borderRadius: 20,
        marginHorizontal: 10,
        marginLeft:15,
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
        // alignItems: "center",
        // justifyContent: 'center',
        backgroundColor: '#01111a'
    },
})
export default Search;
