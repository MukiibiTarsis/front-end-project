
import React, {useState} from 'react';
import { EventsContext } from '../EventsContext';
import Presidents from './presidents/presidents';
import StudentDashboard from './StudentDashboard';
import Student from './student/student';
function MyApp() {const [events, setEvents] = useState([]);
  return (
    <EventsContext.Provider value={{ events, setEvents }}>
      <div>
      <Presidents />
      <Student/>
      </div>
    </EventsContext.Provider>
  );
}

export default MyApp;