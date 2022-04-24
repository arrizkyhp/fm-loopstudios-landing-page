import Creations from 'layout/Creations'
import Footer from 'layout/Footer'
import Hero from 'layout/Hero'
import Interactive from 'layout/Interactive'
import NavBar from 'layout/NavBar'
import React from 'react'

const Home = () => {
  return (
    <>
        <main className="flex flex-col items-center bg-hero-gradient-mobile md:bg-hero-gradient-desktop h-[100vh] md:h-[80vh] bg-no-repeat w-full bg-cover mb-10 md:mb-48">
            <div className='container max-w-[90vw] md:max-w-[80vw] mx-auto h-[90.5%]'>
                <NavBar />
                <Hero />
            </div>
        </main>
        <section className="flex items-center container max-w-[90vw] md:max-w-[80vw] h-[100vh] md:h-[50vh] mx-auto mb-10 md:mb-52">
            <Interactive />
        </section>
        <section className="flex h-full items-center container max-w-[90vw] md:max-w-[80vw] mx-auto mb-28 md:mb-48">
          <Creations />
        </section>
      
        <Footer />
    </>
  )
}

export default Home