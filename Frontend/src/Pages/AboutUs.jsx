import React from 'react'
import Hero from '../components/hero'

function AboutUs() {
  return (

    <>

<div className=' h-screen bg-white'>
<Hero title="About Us"></Hero>

<div className='lg:flex lg:h-screen h-auto   bg-zinc-300 '>
  
          <div className='lg:w-3/6 w-full pt-20  content-center flex items-center justify-center '>

          <img src="../public/about-1.jpg" className='h-[70%] w-[65%] ' alt="" />

          </div>

          <div className='lg:w-3/6 w-full  py-8 px-20 content-center'>
                        <h1 className='text-3xl py-6 text-red-700'>
                        Welcome to BHukkad dost
                        </h1>

                        <p className='text-lg text-zinc-900 py-3'>
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
                        </p>

                        <p className='text-lg text-zinc-900 py-3'>
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                        </p>

          </div>

            

            
</div>
</div>

    </>
    
  )
}

export default AboutUs