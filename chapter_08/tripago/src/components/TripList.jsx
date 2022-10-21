import React, { useEffect, useState } from 'react'

const TripList = () => {
  const [trips, setTrips] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/trips')
      .then((response) => response.json())
      .then((json) => setTrips(json))
  }, [])

  return (
    <div>
      <h2>Trip List</h2>
      <ul>
        {trips &&
          trips.map((trip) => {
            return <li key={trip.id}> {trip.title}</li>
          })}
      </ul>
    </div>
  )
}

export default TripList
