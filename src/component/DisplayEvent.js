import React, {useState} from 'react'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function DisplayEvent() {
   const [event, setEvent] = useState({name: '', decription: ''})
    
  return (
    <div>
        {/* <Button variant="primary">Add Event</Button> */}
       {/* <ul style={{listStyleType: "none"}}>
          <li>
             <div>
                Event 1
                <Button variant="primary">Update Event</Button>
                <Button variant="primary">Delete Event</Button>
             </div>
          </li>
          </ul> */}
    </div>
  )
}

export default DisplayEvent