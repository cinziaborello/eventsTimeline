import React, { useState } from 'react';
import PropTypes from 'prop-types';


const EditEvent = ({ record, color }) => {
  const [eventName, setEventName] = useState(record.fields.Activity);

  const handleChange= (event) => {
    setEventName(event.target.value);
  };

  const handleSave = (event, recordId) => {
    return;
  };

  return (
    <div className='events'
         style={{backgroundColor: `${color}`, gridColumnStart: `${record.distanceFromStart + 1}`, gridColumnEnd: `span ${record.lengthInDays + 1}`}}>
      <input className='eventInput'
             type='text'
             defaultValue={eventName}
             style={{backgroundColor: `${color}`}}
             onChange={handleChange}
             onKeyPress={(event) => {handleSave(event, `${record.id}`)}} />
    </div>
  );

}

EditEvent.propTypes = {
  record: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired
};

export default EditEvent;