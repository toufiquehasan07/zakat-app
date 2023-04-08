import React from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput} from 'react-native';
import {PRODUCTS, RESULT} from '../constants';

const CalculateFitra = ({route, navigation}) => {
  let item = PRODUCTS[0]; // default  item is first item of the product list;
  if (typeof route.params != 'undefined') {
    item = route.params.item;
  }

  const [perKgPrice, setPerKgPrice] = React.useState(0);
  // const [result, setResult] = React.useState(0);
  const [noOfPerson, setNoOfPerson] = React.useState(0);

  const calculateFitra = (unitPrice, noOfPerson) => {
    if (noOfPerson == 0 || unitPrice == 0) {
      Alert.alert('দুঃখিত', 'সকল ফর্ম পূরণ করে পুনরায় চেষ্টা করুন।');
      return;
    }
    const {saaAmount} = item;
    const result = noOfPerson * unitPrice * saaAmount;
    navigation.navigate(RESULT, {
      item,
      result,
      noOfPerson,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            আপনার নির্বাচিত খাদ্য দ্রব্যের ১ কেজির মূল্য নিচের ঘরে লিখুন।
          </Text>
          <View>
            <TextInput
              onChangeText={val => setPerKgPrice(val)}
              style={styles.input}
              keyboardType="numeric"
              placeholder="0.0"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>কত জনের ফিতরা দিতে চান?</Text>
          <View>
            <TextInput
              onChangeText={val => setNoOfPerson(val)}
              style={styles.input}
              keyboardType="numeric"
              placeholder="0"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => calculateFitra(perKgPrice, noOfPerson)}>
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
    padding: 10,
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
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
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
