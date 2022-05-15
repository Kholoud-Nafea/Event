import React, {useContext, useState} from 'react'
import AddingEvent from './AddingEvent'

export const EventContext = React.createContext()

function EventsComponent() {
   const [event, setEvent] = useState({name: '', description: '', date: ''})
   const [eventFromClick, setEventFromClick] = useState([])
  
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);

   const saveEvent = () => {
      setEventFromClick([...eventFromClick, event])
      handleClose()
     }

  return (
     <EventContext.Provider value={{settingEvent: setEvent,savingEvent: saveEvent, events: event, eventFromClicking: eventFromClick}}>
      <div>
       <AddingEvent />
      </div>
     </EventContext.Provider>

  )
}

export default EventsComponent