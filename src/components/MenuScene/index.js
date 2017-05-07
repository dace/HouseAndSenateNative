import React from 'react';
import { 
  View, 
  StyleSheet 
} from 'react-native';
import MenuSection from '../MenuSection';

const HomeNav = () => {
  return (
    <View style={styles.wrapper}>
      <MenuSection title="Bills" />
      <MenuSection title="Members" />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
});

export default HomeNav;
