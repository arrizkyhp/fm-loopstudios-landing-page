import React from 'react'
import virtualReality from 'assets/images/desktop/image-interactive.jpg'

const Interactive = () => {
  return (
    <section className='flex relative'>
        <img  src={virtualReality} alt="man using vr" />
        <div className="flex  flex-col gap-8 bg-white px-20 py-20 absolute w-[640px] -right-[460px] -bottom-[90px]">
            <h1 className='text-black uppercase text-5xl font-josefin-sans'>The leader in interactive VR</h1>
            <p className='text-very-dark-gray font-alata leading-7'>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
        </div>
    </section>
  )
}

export default Interactive