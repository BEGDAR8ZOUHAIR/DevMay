import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming, runOnJS } from 'react-native-reanimated';

type DayListItemProps = {
  day: number;
  imageUrl: string;
};

export default function DayListItem({ day, imageUrl }: DayListItemProps) {

  return (
    <Link href={`/day${day}`} asChild>
      <Pressable style={styles.box}>
        <Animated.Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.text}>{day}</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#F9EDE3',
    flex: 1,
    aspectRatio: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'gray',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  text: {
    color: '#fff',
    fontSize: 70,
    fontFamily: 'AmaticSC_Bold',
  },
});
