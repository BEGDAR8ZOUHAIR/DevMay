import CustomDialpad from '@/components/customDailpad/DailPad';
import CustomOtpInput from '@/components/custumOtpInput/OtpInput'; // Make sure to import the new component
import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { View } from 'react-native';
const { width } = Dimensions.get('window');

const YourScreen = () => {
  const [otp, setOtp] = React.useState('');
  const maxDigits = 4;

  const handleKeyPress = (key: string | number) => {
    if (key === 'X') {
      setOtp(prevOtp => prevOtp.slice(0, -1));
    } else if (typeof key === 'number' && otp.length < maxDigits) {
      setOtp(prevOtp => prevOtp + key.toString());
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
        <CustomOtpInput
          digits={maxDigits}
          value={otp}
          onChange={setOtp}
          containerStyle={styles.otpContainer}
        />
      <CustomDialpad
        onKeyPress={handleKeyPress}
        containerStyle={styles.dialpadContainer}
        dialPadSize={width * 0.28}
        showDeleteIcon
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',

  },
  dialpadContainer: {
    marginTop: 100,
  },
  otpContainer:{
    // marginBottom:100 

  }
});

export default YourScreen;