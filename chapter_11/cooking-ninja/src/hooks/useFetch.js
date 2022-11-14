import { useState, useEffect } from 'react'

export const useFetch = (url, method = 'GET') => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  const [options, setOptions] = useState(null)

  const postData = (postData) => {
    setOptions({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
  }

  useEffect(() => {
    const abortController = new AbortController()
    const fetchData = async (fetchOptions) => {
      setIsPending(true)

      try {
        const response = await fetch(url, {
          ...fetchOptions,
          signal: abortController.signal,
        })
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const json = await response.json()

        setIsPending(false)
        setData(json)
        setError(null)
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('the fetch was aborted')
        } else {
          setIsPending(false)
          setError('Could not fetch data')
          console.log(error.message)
        }
      }
    }

    if (method === 'GET') {
      fetchData()
    }

    if (method === 'POST' && options) {
      fetchData(options)
    }

    return () => {
      abortController.abort()
    }
  }, [url, options, method])

  return {
    data,
    isPending,
    error,
    postData,
  }
}
