import React from 'react'
import {Link} from 'react-router-dom'

function FoodCard({data}) {
  return (


    <>
    <Link to={`/food-item-details/${data._id}`}>
    <div className='bg-zinc-800 rounded px-4 flex flex-col text-white  '>

      <div className='bg-zinc-900 rounded items-center flex justify-center'>
      <img src={`http://localhost:4000/uploads/${data.FoodImage}`} alt={data.FoodName} className='h-[25vh]' />

      </div>
      <div>
      <h1 className='font-semibold'> {data.FoodName} </h1>
       {data.FoodCategory} <br/>
        <br/>
        &#x20B9; {data.FoodPrice} <br/>

      </div>
      
     

    </div>
    </Link>
    
    </>
   
  )
}

export default FoodCard