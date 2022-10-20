import React from 'react'
import { useState } from 'react'
import './NewEventForm.css'

const NewEventForm = () => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')

  return (
    <form className='new-event-form'>
      <label>
        <span>Event Title:</span>
        <input type='text' onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        <span>Event Date:</span>
        <input type='date' onChange={(e) => setDate(e.target.value)} />
      </label>
      <button type='submit'>Submit</button>
      <p>
        title - {title} | date - {date}
      </p>
    </form>
  )
}

export default NewEventForm
