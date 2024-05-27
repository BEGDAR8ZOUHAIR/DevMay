import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

type HeaderButton = {
  child: JSX.Element;
  onPress?: () => void;
};

type Props = {
  leftButton?: HeaderButton;
  rightButton?: HeaderButton;
	middleButton?: HeaderButton;
};

 const Header = (props: Props) => {
  const {leftButton, rightButton, middleButton} = props;

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {leftButton && (
          <TouchableOpacity onPress={leftButton.onPress}>
            {leftButton.child}
          </TouchableOpacity>
        )}
      </View>
			{middleButton && <Text style={styles.middleContainer}>{middleButton.child}</Text>}
      <View style={styles.rightContainer}>
        {rightButton && (
          <TouchableOpacity onPress={rightButton.onPress}>
            {rightButton.child}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};


export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  middleContainer: {
    flex: 1,
    alignItems: 'center',
		textAlign: 'center',
    color: 'black',
  },
});