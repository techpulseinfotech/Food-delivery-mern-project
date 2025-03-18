import React from 'react'
import Bnr from '../components/Bnr'
import AllFoodItem from '../components/AllFoodItem'


function Home() {
  return (
    <>
    <div className='h-auto w-full py-10 lg:p-0 '>
            <Bnr></Bnr>
            <AllFoodItem></AllFoodItem>
            
    </div>
    </>
  )
}

export default Home