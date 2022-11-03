import React from 'react'
import { useFetch } from '../../hooks/useFetch'
// styles
import './Home.css'
const Home = () => {
  const {
    data: recipes,
    isPending,
    error,
  } = useFetch(' http://localhost:3000/recipes')
  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading....</div>}
      {recipes &&
        recipes.map((recipe) => <h1 key={recipe.id}>{recipe.title}</h1>)}
    </div>
  )
}

export default Home
