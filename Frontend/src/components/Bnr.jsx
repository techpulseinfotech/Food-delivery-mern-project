import React from 'react'

function Bnr() {
  return (
    <>
    
    <div className='lg:h-screen h-auto w-full bg-[linear-gradient(to_right_bottom,rgba(0,0,4,0.8),rgba(0,0,25,0.8)),url(../public/bg-hero.jpg)] bg-cover bg-no-repeat lg:flex pt-10   lg:pt-20  '>

        <div className=' h-auto lg:w-3/6 w-full  text-white py-6 px-10  items-center flex lg:justify-start justify-center lg:text-left text-center '>
                    <div>
                <h1 className=' lg:text-6xl text-5xl font-semibold px-16 lg:px-10 py-6'>
                Enjoy Our
                Delicious Meal
                </h1>

                <p className='lg:px-10 pb-6'>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                </p>

                <button className='bg-yellow-400 ml-10 px-10 py-3 text-zinc-900'> Book A Table </button>
                </div>
        </div>

        <div className='h-auto lg:w-3/6 w-full flex items-center justify-center  '>
            <img src="../public/hero-1.png" className='  w-[65%] animate-spin slow-spin ' alt="hero" />
        </div>

    </div>
    
    
    
    </>
  )
}

export default Bnr