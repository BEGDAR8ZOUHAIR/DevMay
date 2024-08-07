import { View, Text, Button } from 'react-native';
import LottieView from 'lottie-react-native';
import { useRef } from 'react';
import { Stack, useNavigation } from 'expo-router';
import Header from '@/components/header/Header';
import { Ionicons, Octicons } from '@expo/vector-icons';

const AnimationScreen = () => {
  const animation = useRef<LottieView>(null);
	const navigation = useNavigation();
  

  return (
    <View>
      	<Stack.Screen options={{ headerShown: false }} />
			<Header
				leftButton={{ child: <Ionicons name="arrow-back-outline" size={30} color="#9b4521" />, onPress: () => navigation.goBack() }}
				rightButton={{ child: <Octicons name="info" size={30} color="#9b4521" />, onPress: () => alert('Info') }}
				middleButton={{ child: <Text style={{ fontSize: 25, fontFamily: 'SpaceMono' }}>Editor</Text> }}
			/>
      <LottieView
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#eee',
        }}
				loop
				autoPlay
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('@/assets/lottie/netflix.json')}
      />

      <Button title="Play" onPress={() => animation.current?.play()} />
      <Button title="Pause" onPress={() => animation.current?.pause()} />
      <Button title="Reset" onPress={() => animation.current?.reset()} />
    </View>
  );
};

export default AnimationScreen;
