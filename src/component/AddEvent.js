import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Modal, Button} from 'react-bootstrap'


function AddEvent() {
  const initialState = {name: '', description: '', date: '', id: 1}

  const [inputsValue, setInputsValue] = useState(initialState)

  const [inputEvent, setInputEvent] = useState([])
  const [state, setState] = useState("create");
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false)
    reset()};
  const handleShow = (value) => {
    setShow(true)
    setState(value)
  };
   
  const reset = () => {
    setInputsValue(initialState)
   }
  const deletedEvent = (id) =>{
  const newEvents = inputEvent.filter(event => event.id !== id )
    setInputEvent(newEvents)
  }

  const saveEvent = () => {
     if(inputEvent.length) {
      setInputEvent([...inputEvent, {...inputsValue, id:inputEvent[inputEvent.length-1].id + 1}]) 
     } else { 
      setInputEvent([ {...inputsValue, id:0}])
     }
    handleClose()
  }
 
  const updateEvent = () => {
    const updatedEvents = inputEvent.map(event => event.id === inputsValue.id ? inputsValue : event)
    setInputEvent(updatedEvents)
    handleClose()
  }
  

  return (
    <div>
         <Button variant="primary" onClick={()=>handleShow("create")}>
        Add Event
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {state === "create" ? "Create Event" : "Update Event"}
          </Modal.Title>
         
        </Modal.Header>
        <Modal.Body >
          <form >
            <div>
              <label>Name </label>
              <input type='text' required
              value={inputsValue.name}
               onChange={e => setInputsValue({...inputsValue, name: e.target.value})} 
               />
            </div>
            <div>
              <label>Description </label>
              <input type='text' 
              value={inputsValue.description}
               onChange={e => setInputsValue({...inputsValue, description: e.target.value})} 
              required />
            </div>
            <div>
              <label>Date </label>
              <input type='text' 
              value={inputsValue.date}
               onChange={e => setInputsValue({...inputsValue, date: e.target.value})} 
               />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={state === "create" ? saveEvent : updateEvent}
            >
            Save Event
          </Button>
        </Modal.Footer>
      </Modal>
      <div>
      <ul style={{listStyleType: "none"}} >
        {inputEvent.map( (event,index) =>
          <li  key={index}>
             <div>
                {event.name} 
                <Button id='update' variant="primary" onClick={()=>{handleShow("update") 
                setInputsValue(event) }
                }> Update Event </Button>
                <Button variant="primary" onClick={() => deletedEvent(event.id)}>Delete Event</Button>
             </div>
          </li>)}
          </ul>
      </div>
    </div>
  )}
export default AddEvent