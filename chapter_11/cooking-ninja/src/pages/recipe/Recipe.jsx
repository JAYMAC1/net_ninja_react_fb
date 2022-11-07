import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

// styles
import './Recipe.css'

const Recipe = () => {
  const { id } = useParams()
  console.log(id)
  const {
    data: recipe,
    isPending,
    error,
  } = useFetch(`http://localhost:3000/recipes/${id}`)
  return (
    <div className='recipe'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {recipe && <h2>{recipe.title}</h2>}
    </div>
  )
}

export default Recipe
