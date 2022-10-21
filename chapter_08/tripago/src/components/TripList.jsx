import React, { useCallback, useEffect, useState } from 'react'
import './TripList.css'

const TripList = () => {
  const [trips, setTrips] = useState([])
  const [url, setUrl] = useState('http://localhost:3000/trips')

  const fetchTrips = useCallback(async () => {
    const response = await fetch(url)
    const json = await response.json()
    setTrips(json)
  }, [url])

  useEffect(() => {
    fetchTrips()
  }, [fetchTrips])

  return (
    <div className='trip-list'>
      <h2>Trip List</h2>
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
        {trips &&
          trips.map((trip) => {
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
