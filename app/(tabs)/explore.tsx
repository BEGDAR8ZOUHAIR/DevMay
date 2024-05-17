import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image,Text ,  Platform, View } from 'react-native';

export default function TabTwoScreen(){
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Explore </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
  }
  
});
