import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const DayDetailsScreen = ( { params }) => {
  const { day } = params;
  return (
    <View>
      <Stack.Screen options={ { title: `Day ${day}` }} />

      <Text style={{ fontFamily: 'AmaticBold', fontSize: 100 }}>
        Day Details Screen
      </Text>
    </View>
  );
};

export default DayDetailsScreen;
