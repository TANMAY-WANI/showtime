import Home from '@/components/Home'
import { HeroParallax } from '@/components/ui/hero-parallax'
import { movies } from '@/lib/data'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import React from 'react'


const LandingPage = () => {
  return (
    <main className=''>
      <SignedIn>
        <Home/>
      </SignedIn>
      <SignedOut>
      <HeroParallax movies={movies}/>
      </SignedOut>
    </main>
  )
}

export default LandingPage