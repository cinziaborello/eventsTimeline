import React from 'react';
import { render } from '@testing-library/react';
import EditEvent from '../components/EditEvent';

const record = {
  id: 1,
  fields: {
    Start: '2018-01-01',
    Activity: 'Just an item',
    End: '2018-01-05'
  },
  lengthInDays: 4,
  distanceFromStart: 0,
  placed: true
};
const color = '#707070';

it('renders without crashing', () => {
  render(<EditEvent record={record} color={color} />);
});