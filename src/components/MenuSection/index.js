import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

const SectionBox = ({ title }) => {
  return (
    <View style={styles.wrapper}>
      <Text>{title.toUpperCase()}</Text>
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
