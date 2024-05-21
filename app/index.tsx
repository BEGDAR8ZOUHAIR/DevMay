import { StyleSheet, View, FlatList, Text } from 'react-native';
import DayListItem from '@/components/dayListItem/DayListItem';
import Header from '@/components/header/Header';
import { Ionicons, Octicons } from '@expo/vector-icons';
import {  useNavigation } from "expo-router";

const days = [...Array(24)].map((val, index) => index + 1);

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

      <Header
        leftButton={{ child: <Ionicons name="arrow-back-outline" size={30} color="#9b4521" />, onPress: () => navigation.goBack() }}
        rightButton={{ child: <Octicons name="info" size={30} color="#9b4521" />, onPress: () => alert('Info') }}
        middleButton={{ child: <Text style={{ fontSize: 25, fontFamily: 'SpaceMono' }}>Days</Text> }}
      />
      <FlatList
        data={days}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        renderItem={({ item }) => <DayListItem day={item} />}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  },

  content: {
    gap: 10,
    padding: 10,
  },
  column: {
    gap: 10,
  },
});
