import React from 'react'
import { ApiStatus } from '../types'
import { dataMapper } from './dataMapper'

const URLFirstChunk = process.env.REACT_APP_URL_FIRST_CHUNK
const URLLastChunk = process.env.REACT_APP_URL_LAST_CHUNK

export function fetchApiData (
  apiToFetch: string,
  callback: React.Dispatch<React.SetStateAction<ApiStatus>>
) {
  fetch(`${URLFirstChunk}${apiToFetch}${URLLastChunk}`)
    .then(res => {
      if (res.status !== 200) {
        const errorResponse = {
          success: false,
          message: 'Error',
          hostname: '',
          time: '',
          responseStatus: res.status,
          responseMessage: res.statusText
        }
        callback(errorResponse)
      }
      return res.json()
    })
    .then(data => {
      dataMapper(data)
      callback(data)
    })
    .catch(err => console.log(err))
}
