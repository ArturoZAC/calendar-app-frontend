import { createSlice } from "@reduxjs/toolkit"
// import { addHours } from "date-fns";

// const tempEvent = {
//   _id: new Date().getTime(),
//   title: 'Cumpleaños del jefe',
//   notes: 'Hay que comprar el pastel',
//   start: new Date(),
//   end: addHours( new Date(), 2),
//   bgColor: "#fafafa",
//   user: {
//     _id: '123',
//     name: 'Fernando'
//   }
// }


export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    isLoadingEvents: true,
    events: [
      // tempEvent
    ],
    activeEvent: null
  },
  reducers: {
    onSetActiveEvent: (state, action) => {
      state.activeEvent = action.payload
    },
    onAddNewEvent: (state, action) => {
      state.events.push(action.payload);
      state.activeEvent = null;
    },
    onUpdateEvent: (state, action) => {
      state.events = state.events.map( e => {
        if(e.id === action.payload.id) {
          return action.payload;
        }
        return e
      })
    },
    onDeleteEvent: ( state ) => {
      
      if( state.activeEvent ){
        state.events = state.events.filter( e => e.id !== state.activeEvent.id );
        state.activeEvent = null;
      }

    },
    onLoadEvents: (state, { payload = []}) => {
      state.isLoadingEvents = false;
      payload.forEach( event  => {
        const exists = state.events.some( dbEvent => dbEvent.id === event.id )
        if( !exists ){
          state.events.push( event );
        }
      });
    },
    onLogoutCalendar: (state) => {
      state.isLoadingEvents = true,
      state.events = [],
      state.activeEvent = null
    }
  }

})

export const {  onSetActiveEvent, 
                onAddNewEvent, 
                onUpdateEvent, 
                onDeleteEvent, 
                onLoadEvents,
                onLogoutCalendar
              } = calendarSlice.actions;
