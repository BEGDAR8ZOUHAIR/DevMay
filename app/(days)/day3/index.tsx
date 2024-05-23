import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import Header from '@/components/header/Header';
import { Ionicons, Octicons } from '@expo/vector-icons';
import { Link, useNavigation, useRouter } from "expo-router";
import { Stack } from 'expo-router';
import MarkdownDisplay from '@/components/day3/MarkdownDisplay';


const description = `
# Markdown

Integrate Markdown content in **React Native**

📚 Today's Agenda:
- Introduction to Markdown
- Markdown Syntax Overview
- Setting Up React Native for Markdown
- Implementing Markdown Rendering
- Styling Markdown Content
- Using Markdown in React Native Components
- Recap and Q&A Session
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
				middleButton={{ child: <Text style={{ fontSize: 25, fontFamily: 'SpaceMono' }}>Day 3</Text> }}
			/>
			<MarkdownDisplay>{description}</MarkdownDisplay>
			<View style={styles.button}>
			<Link href="/day3/editor" asChild >
        <Button  title="Go to Editor" />
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