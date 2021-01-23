import React from 'react';
import { render } from '@testing-library/react';
import Event from '../components/Event';

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

it('renders without crashing', () => {
  render(<Event record={record} />);
});