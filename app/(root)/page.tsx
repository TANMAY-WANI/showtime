import { HeroParallax } from '@/components/ui/hero-parallax'
import { handleUser } from '@/lib/actions/user.actions'
import { movies } from '@/lib/data'
import { SignedIn, SignedOut, SignOutButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

const Home = () => {
  const { userId } = auth()
  return (
    <main className=''>
      <SignedIn>
        <h1>Congratulations</h1>
        <SignOutButton />
      </SignedIn>
      <SignedOut>

      <HeroParallax movies={movies}/>
      </SignedOut>
    </main>
  )
}

export default Home