'use client'
import { HeaderProps } from '@/types'
import { SignOutButton, UserButton } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import { FaLocationPin, FaBars } from 'react-icons/fa6'
import { AiOutlineClose } from 'react-icons/ai'

const Header = ({ user }: HeaderProps) => {
  const [city, setCity] = useState<string | null>(null)
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)  

  useEffect(() => {
    if (localStorage.getItem('city')) {
      setCity(localStorage.getItem('city'))
    }
  }, [])

  const fetchCityName = async (latitude: number, longitude: number) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&countrycodes=IN&zoom=10&addressdetails=1`
      )
      const data = await response.json()

      if (data.address && data.address.city) {
        setCity(data.address.city)
      } else if (data.address && data.address.town) {
        setCity(data.address.town)
      } else if (data.address && data.address.village) {
        setCity(data.address.village)
      } else if (data.address && data.address.state_district) {
        setCity(data.address.state_district)
      } else if (data.address && data.address.state) {
        setCity(data.address.state)
      } else {
        setError('City or nearby location not found in India.')
      }
    } catch (err) {
      setError('Failed to fetch city name.')
    } finally {
      setLoading(false)
    }
  }

  const handleGetLocation = () => {
    setLoading(true)
    setCity('')
    setError('')

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchCityName(position.coords.latitude, position.coords.longitude)
        },
        (err) => {
          setError(err.message)
          setLoading(false)
        }
      )
    } else {
      setError('Geolocation is not supported by this browser.')
      setLoading(false)
    }
  }

  if (city) {
    localStorage.setItem("city", city)
  }

  return (
    <div className='mt-5 mx-5 md:mt-10 md:mx-10 flex items-center justify-between mb-16 md:mb-2'>
      <h1 className='text-2xl md:text-5xl font-semibold text-center'>
        Welcome, <span className='text-purple-400'>{user.firstName}</span>
      </h1>

      {/* Hamburger menu button for mobile view */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <AiOutlineClose className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className='hidden md:flex gap-4 items-center'>
        <h2 className='text-2xl font-normal'>
          {city ? `${city}` : loading ? "Loading..." : "Location*"}
        </h2>
        <FaLocationPin className='w-5 h-5 cursor-pointer' onClick={handleGetLocation} />
      </div>

      <div className='hidden md:flex'>
      <UserButton />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-5 rounded-lg shadow-lg p-5 flex flex-col items-center space-y-4 md:hidden">
          <div className='flex'>
          <h2 className='text-xl font-normal'>
            {city ? `${city}` : loading ? "Loading..." : "Location*"}
          </h2>
          <FaLocationPin className='w-6 h-6 cursor-pointer' onClick={handleGetLocation} />
          </div>

          <SignOutButton/>

        </div>
      )}
    </div>
  )
}

export default Header
