import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {CALCULATE_FITRA_VIEW} from '../../constants';

const Option = ({item, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.option}
      onPress={() => navigation.navigate(CALCULATE_FITRA_VIEW, {item})}>
      <Text style={styles.itemName}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  option: {
    width: 160,
    height: 90,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#e5e5e5',
    shadowOffset: {width: -2, height: 10},
    shadowOpacity: 0.2,
    elevation: 5,
    shadowRadius: 3,
  },
  itemName: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Option;
