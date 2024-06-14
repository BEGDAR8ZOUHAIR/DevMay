import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {FC} from 'react';

interface Props {
  author: string;
  nameOfBook: string;
  price: number;
  coverURL: string;
  categoryColor: string;
  item: any;
}

const Book: FC<Props> = ({
  author,
  nameOfBook,
  price,
  coverURL,
  categoryColor,
  item,
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.coloredSquare, {backgroundColor: categoryColor}]}>
        <Image source={{uri: coverURL}} style={styles.image} />
      </View>

      <Text>{author}</Text>
      <Text>{nameOfBook}</Text>
      <Text>{price}$</Text>
    </View>
  );
};

export default Book;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  coloredSquare: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
});