import React from 'react'
import { AppleCard } from './AppleCard'
import CityLocationComponent from './Header'
import Header from './Header'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { parseStringify } from '@/lib/utils'

const Home = async () => {
  const clerkUser = await currentUser();
  const user = parseStringify(clerkUser);
  if (!user){
    redirect("/sign-in");
  }
  return (
    <main>
      <Header user={user}/>
          {/* <h1 className='text-5xl font-semibold text-center'> 
            Welcome, <span className='text-purple-400'>Tanmay</span>
        </h1> */}

    <AppleCard title='Currently Playing'/>
    <AppleCard title='Upcomming Movies'/>
    </main>
  )
}

export default Home