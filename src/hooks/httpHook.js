import { useState, useCallback, useRef, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  const activeHttpRequests = useRef([])
  const [searchParams, setSearchParams] = useSearchParams()

  const sendRequest = useCallback(
    async (url, method = 'GET', body, headers = {}) => {
      setIsLoading(true)
      const httpAbortCtrl = new AbortController()
      activeHttpRequests.current.push(httpAbortCtrl)

      try {
        let token = searchParams.get('token')

        if (!token) {
          token = localStorage.getItem('token')
          if (!token) {
            console.log('no token')
            return null
          }
        } else {
          localStorage.setItem('token', token)
        }

        const params = new URLSearchParams()
        params.append('token', token)

        const response = await fetch(
          process.env.REACT_APP_ENDPOINT + url + '?' + params.toString(),
          {
            method,
            body,
            headers,
            signal: httpAbortCtrl.signal,
          }
        )

        const responseData = await response.json()

        activeHttpRequests.current = activeHttpRequests.current.filter(
          reqCtrl => reqCtrl !== httpAbortCtrl
        )

        if (!response.ok) {
          setIsLoading(false)
          throw new Error(responseData.message)
        }

        if (response.status === 401) {
          localStorage.removeItem('data')
          window.location.reload()
        }

        setIsLoading(false)
        return responseData
      } catch (err) {
        setError(err.message)
        setIsLoading(false)
        throw err
      }
    },
    [searchParams]
  )

  const clearError = () => {
    setError(null)
  }

  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      activeHttpRequests.current.forEach(abortCtrl => abortCtrl.abort())
    }
  }, [])

  return { isLoading, error, sendRequest, clearError }
}
