import React from 'react'
import { Link } from 'react-router-dom'
import Trashcan from '../assets/trashcan.svg'
import { useHistory } from 'react-router-dom'
import { projectFirestore } from '../firebase/config'

// styles
import './RecipeList.css'

// hooks
import { useTheme } from '../hooks/useTheme'

const RecipeList = ({ recipes }) => {
  const { mode } = useTheme()
  const history = useHistory()
  console.log(recipes.length)
  if (recipes.length === 0) {
    return <div className='error'>No recipes to load....</div>
  }

  const handleDelete = (id) => {
    projectFirestore
      .collection('recipes')
      .doc(id)
      .delete()
      .then(() => {
        console.log(id, ' has been deleted')
      })
      .catch((error) => {
        console.log('Error removing document: ', error)
      })
    setTimeout(() => {
      history.push('/')
    }, 1000)
    console.log(id)
  }
  return (
    <div className='recipe-list'>
      {recipes.map((recipe) => (
        <div className={`card ${mode}`} key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
          <img
            className='delete'
            src={Trashcan}
            onClick={() => handleDelete(recipe.id)}
          />
        </div>
      ))}
    </div>
  )
}

export default RecipeList
