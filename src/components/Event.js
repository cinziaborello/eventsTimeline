import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import EditEvent from './EditEvent.js';


const Event = ({ record }) => {
  const [editStatus, setEditStatus] = useState(false);

  const handleEdit = () => {
    setEditStatus(true);
  };

  const colors = ['#9E1946', '#D16014', '#0D3B66', '#553E4E', '#297373', '#710627', '#3943B7', '#4DA167'];
  const randomColor = (colors) => {
    return colors[Math.floor(Math.random() * colors.length)];
  };
  const color = useMemo(() => { return randomColor(colors) }, colors);

  if (editStatus) {
    return (
      <EditEvent
        record={record}
        color={color}
      />
    );
  } else {
    return (
      <div className='events'
           style={{backgroundColor: `${color}`, gridColumnStart: `${record.distanceFromStart + 1}`, gridColumnEnd: `span ${record.lengthInDays + 1}`}}
           onClick={handleEdit}>
        {record.fields.Activity}
      </div>
    );
  }

}

Event.propTypes = {
  record: PropTypes.object.isRequired
};

export default Event;