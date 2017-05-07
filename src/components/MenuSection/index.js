import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const SectionBox = ({ title, action }) => {
  return (
    <View style={styles.wrapper}>
      <Text onPress={action}>{title.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SectionBox;
