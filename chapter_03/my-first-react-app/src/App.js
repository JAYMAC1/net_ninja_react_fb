import { useState } from 'react'
import './App.css'

function App() {
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "bowser's live stream", id: 2 },
    { title: 'race on moo moo farm', id: 3 },
  ])

  const handleClick = (id) => {
    setEvents((prevState) => {
      return prevState.filter((event) => {
        return id !== event.id
      })
    })
  }
  return (
    <div className='App'>
      <div>
        <button onClick={() => setShowEvents(false)}>hide events</button>
      </div>
      <div>
        <button onClick={() => setShowEvents(true)}>show events</button>
      </div>
      {showEvents &&
        events.map((event, index) => (
          <div key={event.id}>
            <h2>
              {index} - {event.title}
            </h2>
            <button onClick={() => handleClick(event.id)}>delete event</button>
          </div>
        ))}
    </div>
  )
}

export default App
