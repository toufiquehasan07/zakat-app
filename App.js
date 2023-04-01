/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';


const App = () => {
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello world!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1.0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'

  }
});

export default App;
