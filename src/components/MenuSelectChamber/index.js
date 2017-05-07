import React from 'react';
import { 
  View,
  StyleSheet,
} from 'react-native';
import MenuSection from '../MenuSection';

const menuSelectChamber = () => {
  return (
    <View style={styles.wrapper}>
      <MenuSection title="House" />
      <MenuSection title="Senate" />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
});

export default menuSelectChamber;
