import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'

const useRequestData = (initialData, endpoint) => {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    axios.get(`${BASE_URL}${endpoint}`, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then((response) => {
        setData(response.data.posts)
      })
      .catch((error) => {
        console.log(error)
        alert('Ocorreu um erro, tente novamente')
      })
  }, [endpoint])

  return (data.posts)
}

export default useRequestData
