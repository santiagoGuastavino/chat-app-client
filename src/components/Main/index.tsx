import React from 'react'
import './styles.css'
import Card from '../Card'
import { apiEndpoints } from '../../helper/apiEndpoints'

export default function Main () {
  return (
    <div className='main-container'>
      <main className='main'>
        {apiEndpoints.map((endpoint, i) => (
          <Card key={i} endpoint={endpoint} />
        ))}
      </main>
    </div>
  )
}
