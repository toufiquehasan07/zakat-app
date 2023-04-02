import React from 'react';
import {SafeAreaView, StyleSheet, Text, Touchable, View} from 'react-native';
import {TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CalculateFitra = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            আপনার নির্বাচিত খাদ্য দ্রব্যের ১ কাজির মূল্য নিচের ঘরে লিখুন?
          </Text>
          <View>
            <TextInput style={styles.input} keyboardType="numeric" />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>কত জনের ফিতরা দিতে চান?</Text>
          <View>
            <TextInput style={styles.input} keyboardType="numeric" />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>হিসাব</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1.0,
    backgroundColor: '#FAF1E6',
  },
  contents: {
    alignItems: 'center',
    marginTop: '20%',
  },
  inputGroup: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: '700',
    margin: 5,
    textAlign: 'center',
  },
  input: {
    height: 60,
    width: 250,
    margin: 12,
    borderWidth: 1,
    borderColor: '#333333',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
  },
  btn: {
    width: 150,
    height: 50,
    backgroundColor: '#5528BD',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default CalculateFitra;
