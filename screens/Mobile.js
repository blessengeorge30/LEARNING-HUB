import React from "react";
import {
    Text,
    View,
    Image,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity,
    ImageBackground
} from "react-native";
import { useNavigation } from "@react-navigation/native";
// import Icon from 'react-native-vector-icons/AntDesign';
// import { PRODUCT_PROFILEITEMS } from "../Components/profileitemlist";



const Profile = () => {
       const navigation = useNavigation();
       const OTPscreen = () => {
           navigation.navigate("OTPscreen")
       }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/BG.jpg')}
                style={styles.backgroundImage}></ImageBackground>

            <View style={{ flexDirection: 'row', marginTop: 50, marginBottom: 10 }}>
                <View style={{ flex: 1 }}>
                    <Image source={require('../assets/inmakes.jpg')}
                        style={styles.logo}>
                    </Image>
                    <Text style={{ color: 'black', fontSize: 25, alignSelf: 'center', fontWeight: "bold" }}>Enter your Mobile Number</Text>
                    <Text style={{ color: 'grey', fontSize: 15, marginHorizontal:90,marginBottom:10 }}>we will send you a OTP to verify</Text>
                </View>
            </View>

            <View style={{ height: 1000, backgroundColor: '#000d1b', borderRadius: 15, marginTop: 15 }}>
                <View style={{ flexDirection: 'row', marginTop: 25 }}>
                    <TextInput style={[styles.inputView1 ]}
                        placeholder='+91'

                        placeholderTextColor='white'
                    >
                    </TextInput>

                    <TextInput style={[styles.inputView, styles.setColorwhite]}
                        placeholder='Mobile number'

                        placeholderTextColor='#4d647b'
                        maxLength={12}>
                    </TextInput>
                </View>
                <View>
                    <TouchableOpacity style={styles.buttonView} 
                    onPress={OTPscreen} >
                        <Text style={styles.buttontext}> Continue </Text>
                    </TouchableOpacity>
                </View>







            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: 'white',
        flex: 1
    },
    logo: {
        height: 350,
        width: 350,
        marginBottom: 80,
        resizeMode: "contain",
        // marginLeft:45,

        alignSelf: "center"

    },
    logo1: {
        height: 15,
        width: 15,



    },
    inputView: {
        width: '70%',
        height: 65,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#012143',
        backgroundColor: '#011122',
        marginTop: 25,
        paddingLeft: 25,
        marginLeft: 10


    },
    inputView1: {
        width: '15%',
        height: 65,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#012143',
        backgroundColor: '#011122',
        marginTop: 25,
        paddingLeft: 10,
        marginLeft: 25


    },
    logo2: {
        height: 20,
        width: 20,




    },
    cardtext: {
        marginTop: 12,
        marginLeft: 24,
        color: 'white',
        fontSize: 18,
        marginRight: 110
    },

    buttonView: {
        width: '88%',
        height: 65,
        backgroundColor: '#00c559',
        marginTop: 25,
        borderRadius: 5,
        alignSelf: "center",
        alignItems: 'center',
        justifyContent:"center",
        textAlignVertical: 'center',
        
       


    },
    buttonView1: {
        width: '80%',
        height: 35,
        backgroundColor: '#ebecf0',
        marginTop: 22,
        borderRadius: 8,
        alignSelf: "center",
        alignItems: 'center',
        textAlignVertical: 'center',
        paddingHorizontal: 40,
        flexDirection: "row",


    },


    buttontext: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
       alignSelf:'center'


    },

    buttontext1: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 20


    },


})
export default Profile;