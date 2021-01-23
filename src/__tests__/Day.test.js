import React from 'react';
import { render } from '@testing-library/react';
import Day from '../components/Day';

const day = '2020-11-24';

it('renders without crashing', () => {
  render(<Day day={day} />);
});