// imported dependences
import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

// styles
import './Create.css'

const Create = () => {
  const [title, setTitle] = useState()
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])

  const history = useHistory()

  const ingredientInput = useRef(null)
  const { postData } = useFetch('http://localhost:3000/recipes', 'POST')

  const handleSubmit = (e) => {
    e.preventDefault()
    postData({
      title,
      ingredients,
      method,
      cookingTime: cookingTime + ' minutes',
    })

    history.push('/')
  }

  const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim().toLowerCase()

    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevState) => {
        return [...prevState, ing]
      })
      setNewIngredient('')
      ingredientInput.current.focus()
    }
  }

  return (
    <div className='create'>
      <h2 className='page-title'>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title:</span>
          <input
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe Ingredients:</span>
          <div className='ingredients'>
            <input
              type='text'
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button onClick={handleAdd} className='btn'>
              add
            </button>
          </div>
        </label>
        <p>
          Current ingredients:{' '}
          {ingredients && ingredients.map((ing) => <em key={ing}>{ing}, </em>)}
        </p>
        <label>
          <span>Recipe Method:</span>
          <textarea
            type='text'
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>
        <label>
          <span>Cooking Time (minutes):</span>
          <input
            type='number'
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default Create
