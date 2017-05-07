import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import StatesList from '../../src/components/StatesList';

it('renders correctly', () => {
  const tree = renderer.create(
    <StatesList />,
  );
});
