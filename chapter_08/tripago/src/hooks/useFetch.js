import { useState, useEffect } from 'react'

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true)

      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const json = await response.json()

        setIsPending(false)
        setData(json)
        setError(null)
      } catch (error) {
        setIsPending(false)
        setError('Could not fetch data')
        console.log(error.message)
      }
    }
    fetchData()
  }, [url])

  return {
    data,
    isPending,
    error,
  }
}
