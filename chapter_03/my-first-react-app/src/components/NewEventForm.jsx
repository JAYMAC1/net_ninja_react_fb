import React from 'react'
import { useState } from 'react'
import './NewEventForm.css'

const NewEventForm = () => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')

  const resetForm = () => {
    setTitle('')
    setDate('')
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(title)
    console.log(date)
    resetForm()
  }

  return (
    <form className='new-event-form' onSubmit={onSubmit}>
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
      <button type='submit'>Submit</button>
      <p>
        title - {title} | date - {date}
      </p>
      <p onClick={() => resetForm()}>Reset Form</p>
    </form>
  )
}

export default NewEventForm
