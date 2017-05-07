import 'react-native';
import React from 'react';
import fetchData from '../../src/utils/api/fetch-data';
import endpoints from '../../src/utils/api/config/endpoints';

it('expects house members endpoint to be valid', () => {
  expect(endpoints.members.house)
    .toEqual('https://api.propublica.org/congress/v1/115/house/members.json');
});

it('expects senate members endpoint to be valid', () => {
  expect(endpoints.members.senate)
    .toEqual('https://api.propublica.org/congress/v1/115/senate/members.json');
});
