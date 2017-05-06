import React from 'react';
import { View, StyleSheet } from 'react-native';
import SectionBox from '../SectionBox';

const HomeNav = () => {
  return (
    <View style={styles.wrapper}>
      <SectionBox title="MEMBERS" />
      <SectionBox title="BILLS" />
      <SectionBox title="VOTES" />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
});

export default HomeNav;
