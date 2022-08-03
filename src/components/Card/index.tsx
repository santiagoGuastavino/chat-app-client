import React, { useState, useEffect } from 'react'
import './styles.css'
import { fetchApiData } from '../../helper/fetchData'
import { ApiStatus } from '../../types'
import { useTimeoutValue } from '../../hooks/useTimeoutValue'

interface Props {
  endpoint: string
}

const INITIAL_STATE: ApiStatus = {
  success: undefined,
  message: '',
  hostname: '',
  time: ''
}

export default function Card ({ endpoint }: Props) {
  // set timeout value. Input in seconds
  const timeoutValueInSeconds = useTimeoutValue(15)

  const [apiStatus, setApiStatus] = useState<ApiStatus>(INITIAL_STATE)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    fetchApiData(endpoint, setApiStatus)
    setTimeout(() => {
      fetchApiData(endpoint, setApiStatus)
    }, timeoutValueInSeconds)
  }, [endpoint])

  useEffect(() => {
    apiStatus.success === false &&
    setIsError(true)
  }, [apiStatus])

  return (
    <article className='card'>
      <h3 className='card-title'>{endpoint}</h3>
      {apiStatus === INITIAL_STATE &&
        <p className='card-loading'>Loading...</p>
      }
      {apiStatus !== INITIAL_STATE &&
        <>
          <p
            className={'card-status ' + (apiStatus.success === false ? 'status-error' : '')}
          >
            {apiStatus.message}
          </p>
          <div className='card-databox'>
            {isError
              ? <p className='card-error-s'>{apiStatus.responseStatus}</p>
              : <p className='card-hostname'>{apiStatus.hostname}</p>
            }
            {isError
              ? <p className='card-error-m'>{apiStatus.responseMessage}</p>
              : <p className='card-time'>{apiStatus.time}</p>
            }
          </div>
        </>
      }
    </article>
  )
}
