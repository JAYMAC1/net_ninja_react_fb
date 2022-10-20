import React from 'react'
import { useState } from 'react'
import './NewEventForm.css'

const NewEventForm = ({ newEvent }) => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('glasgow')

  const resetForm = () => {
    setTitle('')
    setDate('')
    setLocation('glasgow')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const event = {
      title,
      date,
      location,
      id: Math.floor(Math.random() * 10000),
    }
    newEvent(event)
    resetForm()
  }

  return (
    <form className='new-event-form' onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input
          type='text'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Event Date:</span>
        <input
          type='date'
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <label>
        <span>Event Location:</span>
        <select onChange={(e) => setLocation(e.target.value)}>
          <option value='manchester'>Manchester</option>
          <option value='glasgow'>Glasgow</option>
          <option value='edinburgh'>Edinburgh</option>
        </select>
      </label>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default NewEventForm
