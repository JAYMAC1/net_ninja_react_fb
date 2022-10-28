import React from 'react'
import { useLocation } from 'react-router-dom'

const Contact = () => {
  const queryString = useLocation().search
  const urlParams = new URLSearchParams(queryString)
  const name = urlParams.get('name')

  return (
    <div>
      <h2>Hey {name}, Contact us here....</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempore
        voluptate quaerat eveniet accusamus, delectus ex hic minima consequuntur
        facere voluptatem mollitia nobis molestias quis! Aliquam, qui! Illum,
        recusandae molestiae.
      </p>
    </div>
  )
}

export default Contact
