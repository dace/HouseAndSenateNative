import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import HomeNav from '../src/components/MenuHome';

it('renders correctly', () => {
  const tree = renderer.create(
    <MenuHome />
  );
});
