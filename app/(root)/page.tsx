import Home from '@/components/Home'
import { HeroParallax } from '@/components/ui/hero-parallax'
// import { handleUser } from '@/lib/actions/user.actions'
import { movies } from '@/lib/data'
import { SignedIn, SignedOut, SignOutButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
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