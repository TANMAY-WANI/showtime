import React from 'react'
import { AppleCard } from './AppleCard'

const CurrentlyPlaying = () => {
  return (
    <div className='my-4 px-4'>
    <AppleCard title='Currently Playing'/>
    <AppleCard title='Upcomming Movies'/>
    </div>
  )
}

export default CurrentlyPlaying