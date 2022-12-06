import {View, Text, FlatList, Image, SafeAreaView} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {styles} from './styles';
import {HomeReducer} from '../../../Store/Reducers/HomeReducer';

const Home = () => {
  const {data} = useSelector(state => state.HomeReducer as HomeReducer);

  const renderItem = ({item}) => {
    return (
      <View style={styles.card}>
        <Image style={styles.image} source={{uri: item.imageUrl}} />
        <Text>{item.name}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <FlatList
        onRefresh={() => console.log('refreshed')}
        refreshing={false}
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Home;
