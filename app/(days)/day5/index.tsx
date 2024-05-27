import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import Header from '@/components/header/Header';
import { Ionicons, Octicons } from '@expo/vector-icons';
import { Link, useNavigation, useRouter } from "expo-router";
import { Stack } from 'expo-router';
import MarkdownDisplay from '@/components/day3/MarkdownDisplay';


const description = `
# Air bnb with React Native
`;

const DayDetailsScreen = () => {
	const router = useRouter();
  const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<Stack.Screen options={{ headerShown: false }} />
			<Header
				leftButton={{ child: <Ionicons name="arrow-back-outline" size={30} color="#9b4521" />, onPress: () => navigation.goBack() }}
				rightButton={{ child: <Octicons name="info" size={30} color="#9b4521" />, onPress: () => alert('Info') }}
				middleButton={{ child: <Text style={{ fontSize: 25, fontFamily: 'SpaceMono' }}>Day 5</Text> }}
			/>
			<MarkdownDisplay>{description}</MarkdownDisplay>
			<View style={styles.button}>
			<Link href="/day5/airbnb" asChild >
        <Button  title="Go to Animation" />
      </Link>
			</View>
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

	button: {
		bottom: 100

	}

});