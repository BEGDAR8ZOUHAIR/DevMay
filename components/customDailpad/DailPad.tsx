import React from 'react';
import { View, StyleSheet, SafeAreaView, Dimensions, ViewStyle, TextStyle } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

const { width } = Dimensions.get('window');

type CustomDialpadProps = {
	onKeyPress?: (item: string | number) => void;
	containerStyle?: ViewStyle;
	buttonStyle?: ViewStyle;
	textStyle?: TextStyle;
	deleteButtonStyle?: ViewStyle;
	deleteButtonTextStyle?: TextStyle;
	customDialPad?:[];
	dialPadSize?: number;
	dialPadTextSize?: number;
	showDeleteIcon?: boolean;
}
	

const CustomDialpad: React.FC<CustomDialpadProps> = ({
	onKeyPress,
	containerStyle,
	buttonStyle,
	textStyle,
	deleteButtonStyle,
	deleteButtonTextStyle,
	customDialPad,
	dialPadSize = width * 0.29,
	dialPadTextSize,
	showDeleteIcon = true,
}) => {
	const dialPad = customDialPad || [1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0, 'X'];
	const dialPadText = dialPadTextSize || dialPadSize / 3;

	const handlePress = (item: string | number) => {
		if (onKeyPress) {
			onKeyPress(item);
		}
		console.log('Pressed', item);
	};

	return (
		<View style={[styles.dialpadContainer, containerStyle]}>
			{dialPad.map((item, index) => (
				<TouchableRipple
					key={index}
					onPress={() => handlePress(item)}
					borderless
					style={[
						styles.dialpadButton,
						{ width: dialPadSize, height: dialPadSize / 1.5 },
						buttonStyle,
						item === 1 && styles.topLeftButton,
						item === 3 && styles.topRightButton,
						item === '.' && styles.bottomLeftButton,
						item === 'X' && [styles.deleteButton, deleteButtonStyle],
					]}
				>
					<Text
						style={[
							styles.dialpadText,
							{ fontSize: dialPadText },
							textStyle,
							item === 'X' && [styles.deleteButtonText, deleteButtonTextStyle],
						]}
					>
						{item === 'X' && showDeleteIcon ? (
							<FontAwesomeIcon icon={faDeleteLeft} size={dialPadText * 0.8} color="#ffffff" />
						) : (
							item
						)}
					</Text>
				</TouchableRipple>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	dialpadContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
	dialpadButton: {
		borderRadius: 15,
		backgroundColor: '#F4F6F8',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 3,
	},
	dialpadText: {
		color: '#2D3748',
		fontFamily: "Quicksand-bold",
	},
	topLeftButton: {
		borderTopLeftRadius: 30,
	},
	topRightButton: {
		borderTopRightRadius: 30,
	},
	bottomLeftButton: {
		borderBottomLeftRadius: 30,
	},
	deleteButton: {
		backgroundColor: '#2D3748',
		borderBottomRightRadius: 30,
	},
	deleteButtonText: {
		color: '#ffffff',
	},
});

export default CustomDialpad;