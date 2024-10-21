import React, { useRef, useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Dimensions, ViewStyle } from 'react-native';

const { width } = Dimensions.get('window');

interface CustomOtpInputProps {
	digits: number;
	value: string;
	onChange: (value: string) => void;
	containerStyle?: ViewStyle;
}

const CustomOtpInput: React.FC<CustomOtpInputProps> = ({ digits, value, onChange, containerStyle }) => {
	const inputRefs = useRef<Array<TextInput | null>>([]);
	const [focusedIndex, setFocusedIndex] = useState<number>(-1);

	useEffect(() => {
		inputRefs.current = inputRefs.current.slice(0, digits);
	}, [digits]);

	const handleChange = (text: string, index: number) => {
		const newValue = value.split('');
		newValue[index] = text;
		onChange(newValue.join(''));

		if (text.length !== 0 && index < digits - 1) {
			inputRefs.current[index + 1]?.focus();
		}
	};

	const handleKeyPress = (event: any, index: number) => {
		if (event.nativeEvent.key === 'Backspace' && index > 0 && !value[index]) {
			inputRefs.current[index - 1]?.focus();
		}
	};

	const handleFocus = (index: number) => {
		setFocusedIndex(index);
	};

	const handleBlur = () => {
		setFocusedIndex(-1);
	};

	return (
		<View style={[styles.container, containerStyle]}>
			{[...Array(digits)].map((_, index) => (
				<TextInput
					key={index}
					ref={(ref) => (inputRefs.current[index] = ref)}
					style={[
						styles.input,
						focusedIndex === index && styles.focusedInput
					]}
					editable={false}
					maxLength={1}
					keyboardType="numeric"
					onChangeText={(text) => handleChange(text, index)}
					onKeyPress={(event) => handleKeyPress(event, index)}
					onFocus={() => handleFocus(index)}
					onBlur={handleBlur}
					value={value[index] || ''}
				/>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
	input: {
		width: width * 0.20,
		height: width * 0.20,
		borderRadius: 20,
		backgroundColor: '#F4F6F8',
		fontSize: 24,
		fontWeight: 'bold',
		color: '#2D3748',
		fontFamily: "Quicksand-bold",
		textAlign: 'center',
		margin: 5,
	},
	focusedInput: {
		backgroundColor: '#E2E8F0',
	},
});

export default CustomOtpInput;