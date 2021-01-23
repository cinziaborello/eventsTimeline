import React, { useState } from 'react';
import timelineItems from '../data/timelineItemsAPIformat';
import '../style/index.css';
import { buildTimeline } from '../helpers/timelineFunc';
import { updateRecords } from '../helpers/layoutFunc';
import Event from './Event';
import Day from './Day';


const App = () => {
  const [data, setData] = useState(timelineItems);

  const days = buildTimeline(data);
  const records = updateRecords(data);

  return (
    <div>
      <div id='container'>
        <div id='timeline'>
          {days.map((day, idx) => (
            <Day
              key={idx}
              day={day}
            />
          ))}
          {records.map((record) => (
            <Event
              key={record.id}
              record={record}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
