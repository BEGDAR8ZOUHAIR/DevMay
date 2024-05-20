import { View, Text , StyleSheet} from 'react-native'
import React from 'react'

const DayDetailsScreen = () => {
	return (
		<View style={styles.container}>
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
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold',
	},
 
});