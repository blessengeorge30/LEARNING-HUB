
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
} from 'react-native'


const Search = () => {
  

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
            


            {/* <ActivityIndicator size={35}color='blue' animating={true}/>  */}
             <View >
                
                <Image source={require('../assets/notifiaction.jpg')}
                    style={styles.wave} />
                <View ></View>

            </View>
            <Text style={styles.textView1}>Recieved 0 Notification</Text>
            </ImageBackground>

            {/* 
            <TouchableOpacity style={styles.inputView}>
                <View style={{ flexDirection: 'row',width:'100%',alignItems:'center',justifyContent:'space-between' }}>
                    <Text style={{ color: 'grey', marginTop: 10 }}>BRANCH</Text>
                    <Image source={require('../assets/arrowdown.png')}
                        style={styles.arrow} />

                </View> */}
{/* 
                <Text style={{ color: 'white', marginTop: -5 }}>COMPUTER SCIENCE</Text>
            </TouchableOpacity> */}
           


            {/* <View style={{ marginVertical: 12 }}>
                    <ScrollView horizontal={true}>
                        {
                            PRODUCT_HOME?.map((item) => {
                                return renderitem(item);
                            })
                        }
                    </ScrollView>
                </View>
                <View>
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
        alignItems:"center",
    
        flex:1,
        
    },

    logo: {
        height: 210,
        width: 210,
        marginBottom: 5,
        marginLeft: -15,
        marginRight: 25,
        marginTop: 8,
        opacity:0,
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
        marginTop:35


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
