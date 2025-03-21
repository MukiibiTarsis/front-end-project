import React, { createContext, useState } from 'react';
export const EventsContext = createContext({events: [],           // Default empty array
    setEvents: () => {},  // Default no-op function
});

// export const EventsProvider = ({ children }) => {
//   const [events, setEvents] = useState([
//     { name: "Web Development Workshop", chapter: "Chapter 1", date: "Mar 15, 2025", expectedParticipants: 30, actualParticipants: 28 },
//     { name: "AI Hackathon", chapter: "Chapter 2", date: "Mar 20, 2025", expectedParticipants: 50, actualParticipants: 45 },
//     { name: "Cybersecurity Seminar", chapter: "Chapter 3", date: "Mar 25, 2025", expectedParticipants: 40, actualParticipants: 38 },
//     { name: "Data Science Workshop", chapter: "Chapter 4", date: "Apr 5, 2025", expectedParticipants: 35, actualParticipants: 32 },
//     { name: "Mobile App Development", chapter: "Chapter 5", date: "Apr 10, 2025", expectedParticipants: 25, actualParticipants: 22 },
//   ]);

//   return (
//     <EventsContext.Provider value={{ events, setEvents }}>
//       <Presidents />
//     </EventsContext.Provider>
//   );
// };