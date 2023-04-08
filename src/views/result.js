import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const Result = ({route}) => {
  const {item, result, noOfPerson} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>
            আপনার নির্বাচিত খাদ্য দ্রব্য
            <Text style={styles.hint}> {item.title} </Text>, যার{' '}
            <Text style={styles.hint}>
              {item.id == 0 || item.id == 1 ? 'আধা' : 'এক'}
            </Text>{' '}
            সা'আ অনুযায়ী রাসুল (সাঃ) ফিতরা দিতেন।
          </Text>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>
            উক্ত খাদ্য দ্রব্যের এক সা'আ এর মূল্য অনুযায়ী
          </Text>
          <Text style={styles.text}>
            <Text style={styles.hint}> {noOfPerson} </Text>জনের জন্য আপনাকে
          </Text>
          <Text style={styles.text}>
            <Text style={styles.hint}> {result} </Text>টাকা ফিতরা দিতে হবে।
          </Text>
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
  textWrapper: {
    marginVertical: '10%',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },

  hint: {
    color: 'tomato',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
export default Result;
