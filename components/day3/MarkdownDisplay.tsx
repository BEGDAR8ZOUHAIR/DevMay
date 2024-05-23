import { View, Text, StyleSheet, Button , ScrollView } from 'react-native'
import React, { PropsWithChildren } from 'react'
import Header from '@/components/header/Header';
import { Ionicons, Octicons } from '@expo/vector-icons';
import { Link, useNavigation, useRouter } from "expo-router";
import { Stack } from 'expo-router';
import Markdown, { MarkdownIt } from 'react-native-markdown-display';



const MarkdownDisplay = ({children}: PropsWithChildren) => {
  
  const navigation = useNavigation();
	return (
      <ScrollView>
      <View style={styles.page}>
      <Markdown
       style={{
        body: {color: 'black', fontSize: 12, fontFamily: 'SpaceMono'},
        heading1: {color: 'green', fontSize: 20, fontWeight: 'bold'},
        code_block: {color: 'blue', fontSize: 14}
				
      }}
      >
			 {children}
       </Markdown>
      </View> 
      </ScrollView>
	)
}

export default MarkdownDisplay

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  }
	

});