import React from 'react';
import {StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import Option from '../components/option';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTS} from '../constants';

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
          data={PRODUCTS}
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
