import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';


const LandingScreen = () => {

    return (
        <View style={styles.container}>
          <Text style={styles.text}>First React Native Android app</Text>
        </View>
    ); 
}

const styles = StyleSheet.create({
    container: {
      flex:1.0,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 100
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold'
  
    }
});
export default LandingScreen;