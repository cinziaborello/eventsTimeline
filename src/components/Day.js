import React from 'react';
import PropTypes from 'prop-types';


const Day = ({ day }) => (
  <div className='date'>
    {day}
  </div>
);

Day.propTypes = {
  day: PropTypes.string.isRequired
};

export default Day;