import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState} from "react";
import { Calendar, dateFnsLocalizer, } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import { BackgroundStatiscal } from "./StatiscalStyle";

// function Statistical() {
//   const locales = {
//     "en-US": require("date-fns/locale/en-US"),
//   };
//   const localizer = dateFnsLocalizer({
//       format,
//       parse,
//       startOfWeek,
//       getDay,
//       locales,
//   });

// // //   const events = [
// // //       {
// // //           title: "Big Meeting",
// // //           allDay: true,
// // //           start: new Date(2021, 6, 0),
// // //           end: new Date(2021, 6, 0),
// // //       },
// // //       {
// // //           title: "Vacation",
// // //           start: new Date(2021, 6, 7),
// // //           end: new Date(2021, 6, 10),
// // //       },
// // //       {
// // //           title: "Conference",
// // //           start: new Date(2021, 6, 20),
// // //           end: new Date(2021, 6, 23),
// // //       },
// // //   ];
//     const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
//     const [allEvents, setAllEvents] = useState();

// //     function handleAddEvent() {
// //         // console.log(newEvent.start);
// //         setAllEvents([...allEvents, newEvent]);
        
// //     }

//     return (
//         <div className="App">
//             {/* <h1>Calendar</h1>
//             <h2>Add New Event</h2>
//             <div>
//                 <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
//                 <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
//                 <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
//                 <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
//                     Add Event
//                 </button>
//             </div> */}
//             <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
//         </div>
//     );
// }

// export default Statistical;
// import React from 'react'

export default function Statistical() {
    const locales = {
      "en-US": require("date-fns/locale/en-US"),
  };
  const localizer = dateFnsLocalizer({
      format,
      parse,
      startOfWeek,
      getDay,
      locales,
  });
  const getLocal =()=>{
    let list=localStorage.getItem('allArchievement');
    if (list){
        return JSON.parse(list);
    }
    else return [];
  }
  const [items, setItems] = useState(getLocal());
    let date=[];
    let events=[];
    let localData=items;
    // {(items.items).forEach((item)=>{
    //   date.push(item.date);
    // })}
    localData.forEach(item => {
      date.push(item.date);
    });
    for (let index = 0; index < date.length; index++) {
      events.push({title:"chạy bộ",end:date[index],start:date[index]})
    }
  return (
    <BackgroundStatiscal>
        <Calendar localizer={localizer} events={events}  style={{ height:"600px", padding: "50px"}} />
    </BackgroundStatiscal>
  )
}
