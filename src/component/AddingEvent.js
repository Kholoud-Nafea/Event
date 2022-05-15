import React, {useContext, useState} from 'react'
import { EventContext } from './EventsContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Modal, Button} from 'react-bootstrap'


function AddingEvent() {
   const contextEvent = useContext(EventContext)

   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  return (
    <div>
         <Button variant="primary" onClick={handleShow}>
        Add Event
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Creating Event</Modal.Title>
         
        </Modal.Header>
        <Modal.Body>
          <form >
            <div>
              <label>Name </label>
              <input type='text' required 
              value={contextEvent.settingEvent.name}
               onChange={e => contextEvent.settingEvent({...contextEvent.events, name: e.target.value})} 
               />
            </div>
            <div>
              <label>Description </label>
              <input type='text'required
               onChange={e => contextEvent.settingEvent({...contextEvent.events, description: e.target.value})} 
               />
            </div>
            <div>
              <label>Date </label>
              <input type='text' 
               onChange={e => contextEvent.settingEvent({...contextEvent.events, date: e.target.value})} 
               />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={contextEvent.savingEvent}>
            Save Event
          </Button>
        </Modal.Footer>
      </Modal>
      <div>
      <ul style={{listStyleType: "none"}} >
        {contextEvent.eventFromClicking.map( element =>
          <li  key={contextEvent.eventFromClicking.indexOf(element)}>
             <div>
                {element.name}
                <Button variant="primary">Update Event</Button>
                <Button variant="primary" onClick={()=> delete contextEvent.eventFromClicking.indexOf(element)}>Delete Event</Button>
             </div>
          </li>)}
          </ul>
      </div>
    </div>
 
  )
}

export default AddingEvent