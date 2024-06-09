import { View, Text, StyleSheet, Button, ScrollView, Pressable, TextInput } from 'react-native'
import React from 'react'
import Header from '@/components/header/Header';
import { Ionicons, Octicons } from '@expo/vector-icons';
import { Link, useNavigation, useRouter } from "expo-router";
import { Stack } from 'expo-router';
import Markdown, { MarkdownIt } from 'react-native-markdown-display';
import MarkdownDisplay from '@/components/day3/MarkdownDisplay';


const template = `# 🎉 Fun with Markdown!

## 🚀 Introduction
Welcome to this **fun and exciting** markdown guide! Let's dive into the world of Markdown and discover how it makes text formatting cool and easy!

## 🎈 Basics: Add Some Flair

- **Bold and Beautiful:** Make your text stand out! Use \`**\` or \`__\`. Example: **Look at me!**
- *Sassy Italics:* Add a slant with \`*\` or \`_\`. Example: *I'm leaning!*

### 🍔 Let's List Some Fun Things!

1. 🌟 Star gazing
2. 🏖 Beach parties
3. 🍕 Pizza nights

- 🎮 Video games
- 📚 Reading a good book
- 🧘 Yoga time

### 🖼 Adding Images and Links

A cute pic: 

![Cute Cat](https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/6.jpg)

Visit a fun site: [Fun Site](https://example.com)

### 🎶 Code Block Party

\`\`\`javascript
// JavaScript party trick
function partyTime() {
    console.log("Let's dance 💃🕺!");
}
\`\`\`

## 🎤 Conclusion
Markdown is not just for formatting; it's for having fun while expressing yourself! Keep exploring and enjoy the markdown party! 🎊

> Enjoy crafting your own fun markdown documents! 🎨🎉
`;

const EditorScreen = () => {
	const navigation = useNavigation();
	const [content, setContent] = React.useState(template);
	const [tab, setTab] = React.useState('edit');
	return (
		<View style={styles.container}>
			<Stack.Screen options={{ headerShown: false }} />
			<Header
				leftButton={{ child: <Ionicons name="arrow-back-outline" size={30} color="#9b4521" />, onPress: () => navigation.goBack() }}
				rightButton={{ child: <Octicons name="info" size={30} color="#9b4521" />, onPress: () => alert('Info') }}
				middleButton={{ child: <Text style={{ fontSize: 25, fontFamily: 'SpaceMono' }}>Editor</Text> }}
			/>
			<ScrollView>
				<View style={styles.page}>
					<View style={styles.tabsContainer}>
						<Pressable
							onPress={() => setTab('edit')}
							style={[
								styles.tab,
								{ borderColor: tab === 'edit' ? 'mediumorchid' : 'gray' },
							]}
						>
							<Text style={styles.tabText}>Edit</Text>
						</Pressable>
						<Pressable
							onPress={() => setTab('preview')}
							style={[
								styles.tab,
								{ borderColor: tab === 'preview' ? 'mediumorchid' : 'gray' },
							]}
						>
							<Text style={styles.tabText}>Preview</Text>
						</Pressable>
					</View>

					{tab === 'edit' ? (
						<TextInput
							value={content}
							onChangeText={setContent}
							multiline
							numberOfLines={50}
							style={styles.input}
						/>
					) : (
						<MarkdownDisplay>{content}</MarkdownDisplay>
					)}

				</View>
			</ScrollView>

		</View>
	)
}

export default EditorScreen

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

	page: {
		backgroundColor: 'whitesmoke',
		flex: 1,
		padding: 10,
	},
	input: {
		backgroundColor: 'white',
		flex: 1,
		padding: 20,
		paddingTop: 20,
		borderRadius: 10,
		fontSize: 16,
	},

	tabsContainer: {
		flexDirection: 'row',
		gap: 10,
		marginVertical: 10,
	},
	tab: {
		flex: 1,
		padding: 10,
		borderColor: 'gray',
		borderWidth: 2,
		borderRadius: 10,
		alignItems: 'center',
	},
	tabText: {
		fontFamily: 'InterBold',
	},

});