import Creations from 'layout/Creations'
import Hero from 'layout/Hero'
import Interactive from 'layout/Interactive'
import NavBar from 'layout/NavBar'
import React from 'react'

const Home = () => {
  return (
    <>
        <div className="flex flex-col items-center bg-hero-gradient h-[80vh] bg-no-repeat w-full bg-cover mb-48">
            <div className='container max-w-[80vw] mx-auto h-[90.5%]'>
                <NavBar />
                <Hero />
            </div>
        </div>
        <div className="flex items-center container max-w-[80vw] mx-auto mb-52">
            <Interactive />
        </div>
        <div className="flex h-full items-center container max-w-[80vw] mx-auto mb-48">
          <Creations />
        </div>

    </>
  )
}

export default Home