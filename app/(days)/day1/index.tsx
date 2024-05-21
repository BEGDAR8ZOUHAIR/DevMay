import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '@/components/header/Header';
import { Ionicons, Octicons } from '@expo/vector-icons';
import { Link, useNavigation, useRouter } from "expo-router";
import { Stack } from 'expo-router';


const DayDetailsScreen = () => {
	const router = useRouter();
  const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<Stack.Screen options={{ headerShown: false }} />
			<Header
				leftButton={{ child: <Ionicons name="arrow-back-outline" size={30} color="#9b4521" />, onPress: () => navigation.goBack() }}
				rightButton={{ child: <Octicons name="info" size={30} color="#9b4521" />, onPress: () => alert('Info') }}
				middleButton={{ child: <Text style={{ fontSize: 25, fontFamily: 'SpaceMono' }}>Day 1</Text> }}
			/>
			<Text style={styles.text}>
				DayDetails day 1
			</Text>
		</View>
	)
}

export default DayDetailsScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
    paddingTop: 50,
		backgroundColor: '#fff',
		
	},
	text: {
		fontSize: 44,
		fontWeight: 'bold',
		fontFamily: 'AmaticSC_Bold',
	},

});