import { StyleSheet, View, FlatList, Text } from 'react-native';
import DayListItem from '@/components/dayListItem/DayListItem';
import Header from '@/components/header/Header';
import { Ionicons, Octicons } from '@expo/vector-icons';
import { useNavigation } from "expo-router";

const days = [...Array(24)].map((val, index) => index + 1);
const imageUrls = [...Array(24)].map((_, index) => `https://picsum.photos/200/300?random=${index + 1}`);

export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        renderItem={({ item, index }) => <DayListItem day={item} imageUrl={imageUrls[index]} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    padding: 5,
    backgroundColor: '#000',
  },
  content: {
    gap: 10,
    padding: 10,
  },
  column: {
    gap: 10,
  },
});


// AIzaSyBlq9I5WYjBOdB6NvT7LtjuMmQZ2221cZM
