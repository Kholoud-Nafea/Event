import './App.css';
import AddEvent from './component/AddEvent';
import DisplayEvent from './component/DisplayEvent';
import { EventContext } from './component/EventsContext';

function App() {
  return (
    <div className="App">
      {/* <DisplayEvent /> */}
      <AddEvent />
      {/* <EventContext /> */}
    </div>
  );
}

export default App;
