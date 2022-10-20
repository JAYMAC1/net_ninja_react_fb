import React from 'react'
import './NewEventForm.css'

const NewEventForm = () => {
  return (
    <form className='new-event-form'>
      <label>
        <span>Event Title:</span>
        <input type='text' />
      </label>
      <label>
        <span>Event Date:</span>
        <input type='date' />
      </label>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default NewEventForm
