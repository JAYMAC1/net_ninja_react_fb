import React, { useState } from 'react'
import './App.css'
import Modal from './components/Modal'
import Title from './components/Title'

function App() {
  const [showModal, setShowModal] = useState(false)
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

  const handleClose = () => {
    setShowModal(false)
  }

  const title = 'Events in Your Area'
  const subtitle = 'All the latest events in Marioland'

  return (
    <div className='App'>
      <Title title={title} subtitle={subtitle} />
      <br />
      <button onClick={() => setShowModal(true)}>show modal</button>
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
          <React.Fragment key={event.id}>
            <h2>
              {index} - {event.title}
            </h2>
            <button onClick={() => handleClick(event.id)}>delete event</button>
          </React.Fragment>
        ))}

      {showModal && (
        // <Modal handleClose={handleClose}>
        //   <h2>10% Off Coupon Code!!</h2>
        //   <p>Use the code NINJA10 at the checkout....</p>
        // </Modal>
        <Modal handleClose={handleClose}>
          <h2>Terms and Conditions</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis maxime doloribus quae sunt corporis, debitis
            laudantium. Consectetur repellat et ipsa cum totam consequuntur eum
            iste similique voluptatum sit? Nam, distinctio.
          </p>
        </Modal>
      )}
    </div>
  )
}

export default App
