import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import './TripList.css'

const TripList = () => {
  const [url, setUrl] = useState('http://localhost:3000/trips')

  const { data, isPending, error } = useFetch(url)

  return (
    <div className='trip-list'>
      <h2>Trip List</h2>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      <div className='filters'>
        <button
          onClick={() => setUrl('http://localhost:3000/trips?loc=europe')}>
          European Trips
        </button>
        <button onClick={() => setUrl('http://localhost:3000/trips')}>
          All Trips
        </button>
      </div>
      <ul>
        {data &&
          data.map((trip) => {
            return (
              <li key={trip.id}>
                <h3> {trip.title}</h3>
                <p>{trip.price}</p>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default TripList
