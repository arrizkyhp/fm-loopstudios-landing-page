import Hero from 'layout/Hero'
import Interactive from 'layout/Interactive'
import NavBar from 'layout/NavBar'
import React from 'react'

const Home = () => {
  return (
    <>
        <div className="flex flex-col items-center bg-hero-gradient h-[80vh] bg-no-repeat w-full bg-cover">
            <div className='container max-w-[80vw] mx-auto h-[90.5%]'>
                <NavBar />
                <Hero />
            </div>
        </div>
        <div className="flex h-[100vh] items-center container max-w-[80vw] mx-auto ">
            <Interactive />
        </div>

    </>
  )
}

export default Home