import CustomDialpad from '@/components/customDailpad/DailPad';

import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
const { width } = Dimensions.get('window');

const YourScreen = () => {
  const handleKeyPress = (key: any) => {
    console.log('Key pressed:', key);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <CustomDialpad
        onKeyPress={handleKeyPress}
        containerStyle={styles.dialpadContainer}
        dialPadSize={width * 0.25}
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
    marginTop: '80%',
  },
});

export default YourScreen;