import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import MenuSection from '../MenuSection';

const MenuHome = () => {
  return (
    <View style={styles.wrapper}>
      <MenuSection title="Bills" action={Actions.menuSelectChamber} />
      <MenuSection title="Members" action={Actions.statesList} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
});

export default MenuHome;
