import { useState } from 'react'
import './App.css'

function App() {
  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "bowser's live stream", id: 2 },
    { title: 'race on moo moo farm', id: 3 },
  ])

  const handleClick = (id) => {
    // console.log(id)
    // setEvents(
    //   events.filter((event) => {
    //     return id !== event.id
    //   })
    // )
    setEvents((prevState) => {
      return prevState.filter((event) => {
        return id !== event.id
      })
    })
  }
  return (
    <div className='App'>
      {events.map((event, index) => (
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
