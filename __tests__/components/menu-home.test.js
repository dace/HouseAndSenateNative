import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import MenuHome from '../../src/components/MenuHome';

it('renders correctly', () => {
  const tree = renderer.create(
    <MenuHome />,
  );
});
