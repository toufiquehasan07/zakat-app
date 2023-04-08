import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import Option from '../components/option';
import {useNavigation} from '@react-navigation/native';

const DATA = [
  {
    id: 1,
    title: 'খেজুর',
  },
  {
    id: 2,
    title: 'কিসমিস',
  },
  {
    id: 3,
    title: 'গম/আটা',
  },
  {
    id: 4,
    title: 'যব',
  },
  {
    id: 5,
    title: 'পনির',
  },
  {
    id: 6,
    title: 'চাল',
  },
];

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>
            {/* Select an Option on which you want to calculate */}
            কোন খাদ্য দ্রব্যের ভিত্তিতে ফিতেরা দিতে চান?
          </Text>
        </View>
        <FlatList
          data={DATA}
          numColumns={2}
          renderItem={({item}) => (
            <Option item={item} navigation={navigation} />
          )}
        />
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
  titleWrapper: {
    marginBottom: '5%',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default Home;
