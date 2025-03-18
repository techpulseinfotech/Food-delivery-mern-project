import React from 'react'

function Hero(props) {
  return (
    <>
    <div className='h-[65%] bg-[linear-gradient(to_right_bottom,rgba(0,0,4,0.8),rgba(0,0,25,0.8)),url(../public/bg-hero.jpg)] bg-cover bg-no-repeat content-center text-center text-white '>
        
        <h1 className='text-5xl font-semibold '>
          {props.title}
        </h1>
      
    
    </div>
    
    
    </>
  )
}

export default Hero