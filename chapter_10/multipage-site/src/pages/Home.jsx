import React from 'react'
import { useFetch } from '../hooks/useFetch'

const Home = () => {
  const {
    data: articles,
    isPending,
    error,
  } = useFetch('http://localhost:3000/articles')
  return (
    <div className='home'>
      <h2>Articles</h2>
      {isPending && <div>Loading....</div>}
      {error && <div> {error} </div>}
      {articles &&
        articles.map((article) => (
          <div key={article.id}>
            <p>{article.title}</p>
          </div>
        ))}
    </div>
  )
}

export default Home
