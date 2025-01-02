import { Calendar } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css"
import { CalendarEvent, CalendarModal, FabAddNew, FabDelete, NavBar } from "../"
import { getMessagesEs, localizer } from '../../helpers';
import { useEffect, useMemo, useState } from 'react';
import { useAuthStore, useCalendarStore, useUiStore } from '../../hooks';

export const CalendarPage = () => {

  const { user } = useAuthStore();
  const { openDateModal } = useUiStore();
  const { events, setActiveEvent, startLoadingEvents } = useCalendarStore();
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');


  const eventStyleGetter = (event, start, end, isSelected) => {
    const isMyEvent = (user.uid === event.user._id) || (user.uid === event.user.uid);

    let style; // Declarar la variable fuera del bloque

    if (isMyEvent) {
        style = {
            backgroundColor: '#347CF7',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white'
        };
    } else {
        style = {
            backgroundColor: '#465660',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white'
        };
    }

    return {
        style
    };
};

  const onDoubleClick = () => {
    // console.log('onDoubleClick')
    openDateModal();
  }

  const onSelect = ( event ) => {
    setActiveEvent( event )
  }

  const onViewChanged = ( event ) => {
    localStorage.setItem('lastView', event );
  }

  useEffect(() => {
    startLoadingEvents();
  }, [])
  

  return (
    <>
      <NavBar />

      <Calendar
        culture='es'
        localizer={localizer}
        events={ events }
        defaultView={ lastView }
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={ getMessagesEs() }
        eventPropGetter={ eventStyleGetter }
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={ onDoubleClick }
        onSelectEvent={ onSelect }
        onView={ onViewChanged }
      />

      <CalendarModal />

      <FabAddNew />

      <FabDelete />
    </>
  )
}
