import {useState, useEffect} from "react";

export const useJsonFetch = (url, opts) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    fetch(url, opts)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => setError(err))
      .finally(() => setIsLoading(false))
  }, [])

  return [data, isLoading, error]
}
