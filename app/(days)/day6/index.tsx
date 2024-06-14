import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import Book from './components/book';
import axios from 'axios';

const Home = () => {

  const getListOfBooks = async () => {
    const response = await axios.get("https://66687199f53957909ff80d93.mockapi.io/books")
    console.log(response.data);
    
    setData(response.data)
  }

  const [data, setData] = useState([])

  useEffect(() => {
    getListOfBooks()
  }, []) 
 
  return ( 
    <View style={styles.container}> 
      <FlatList
      numColumns={2}
      contentContainerStyle={styles.content}
      columnWrapperStyle={styles.col}
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => <Book author={item.author}  nameOfBook={item.name_of_book}
        price={item.price} coverURL={item.cover}
        />}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    padding: 5,
    backgroundColor: '#000',
  },
  
});