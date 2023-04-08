import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const Result = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>
            আপনার নির্বাচিত খাদ্য দ্রব্য "___", যার এক সা'আ অনুযায়ী রাসুল (সাঃ)
            ফিতরা দিতেন।
          </Text>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>
            উক্ত খাদ্য দ্রব্যের এক সা'আ এর মূল্য অনুযায়ী
          </Text>
          <Text style={styles.text}>___ জনের জন্য আপনাকে</Text>
          <Text style={styles.text}>___ টাকা ফিতরা দিতে হবে।</Text>
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
});
export default Result;
