import React from 'react'

// custom hooks
import { useFetch } from '../../hooks/useFetch'

// components
import RecipeList from '../../components/RecipeList'

// styles
import './Home.css'
const Home = () => {
  const {
    data: recipes,
    isPending,
    error,
  } = useFetch(' http://localhost:3000/recipes')
  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading....</p>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  )
}

export default Home
