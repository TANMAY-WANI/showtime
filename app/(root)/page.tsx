import { HeroParallax } from '@/components/ui/hero-parallax'
import { movies } from '@/lib/data'
import React from 'react'

const Home = () => {
  return (
    <HeroParallax movies={movies}/>
  )
}

export default Home