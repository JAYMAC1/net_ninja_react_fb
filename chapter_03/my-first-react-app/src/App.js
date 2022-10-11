import { useState } from 'react'
import './App.css'
import Title from './components/Title'

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

  const title = 'Events in Your Area'
  const subtitle = 'All the latest events in Marioland'

  return (
    <div className='App'>
      <Title title={title} subtitle={subtitle} />
      <div>
        {showEvents && (
          <button onClick={() => setShowEvents(false)}>hide events</button>
        )}
      </div>
      <div>
        {!showEvents && (
          <button onClick={() => setShowEvents(true)}>show events</button>
        )}
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
