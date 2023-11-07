import React, { useState } from 'react';
import { ScrollView, ImageBackground, View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const App = () => {
  const [selected, setSelected] = useState('');

  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={require('../assets/background.png')} style={styles.backgroundImage} zIndex={-1} >
        <View style={styles.header}>
          <TouchableOpacity style={styles.button1}>
            <Image source={require('../assets/menu.png')} style={{ height: 15, width: 15, tintColor: 'green' }} />
          </TouchableOpacity>
          <Image source={require('../assets/inmakes.jpg')} style={styles.logo} />
          <View>
            <TouchableOpacity style={styles.button}>
              <Image source={require('../assets/blackcircle.png')} style={{ height: 15, width: 15, tintColor: 'green' }} />
              <Text style={styles.buttonText}>Classes</Text>
            </TouchableOpacity>
          </View>
        </View>
      <Text style={{color:'black',fontSize:24,fontWeight:'bold',alignSelf:'center',marginTop:55}}>Exam Calendar</Text>
      <Calendar style={{marginTop:45}}
        onDayPress={(day) => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
        }}
      />
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
   
    flex: 1,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    flex: 1,
  },
  logo: {
    height: 210,
    width: 210,
    marginBottom: 5,
    marginLeft: -15,
    marginRight: 25,
    marginTop: 8,
    resizeMode: 'contain',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#Aaaaaa',
    width: 420,
    height: 120,
  },
  button: {
    height: 35,
    width: 85,
    borderColor: 'green',
    borderWidth: 1,
    backgroundColor: 'white',
    paddingVertical: 8,
    flexDirection: 'row',
    borderRadius: 5,
    justifyContent: 'center',
    marginLeft: 15,
  },
  button1: {
    height: 35,
    width: 35,
    borderColor: 'green',
    borderWidth: 1,
    backgroundColor: 'white',
    paddingVertical: 8,
    flexDirection: 'row',
    borderRadius: 5,
    justifyContent: 'center',
    marginLeft: 35,
  },
  buttonText: {
    color: 'black',
    marginLeft: 6,
    fontSize: 12,

},
});

export default App;
