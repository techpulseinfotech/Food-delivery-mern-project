import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'

function FoodItemDetails() {

    const [FoodItems, setFoodItems] = useState([]);
    let {id} = useParams();
  
    console.log(id)
      useEffect(() => {
          const getFoodItem = async () => {
              try {
                  const response = await axios.get(`http://localhost:4000/get-food-item-details/${id}`);
                  setFoodItems(response.data.data);
                  console.log("Response Data:", response.data);
              } catch (error) {
                  console.error("Error fetching food item details:", error);
              }
        
          
          };
  
          getFoodItem();
      }, []);
  

  return (
    <>
    <div className='h-full bg-zinc-950 text-white w-full  px-32 py-24 '>


<div className='bg-zinc-900 rounded-3xl h-[70vh] grid grid-cols-2 px-6 py-4 '>


  <div className='bg-white lg:w-8/12 content-center'>

  <img src={`http://localhost:4000/uploads/${FoodItems.FoodImage}`} alt="" />

  </div>

  <div>
  <Link to={'/'} className='float-end text-2xl bg-zinc-500 hover:bg-red-700  px-4 py-2 rounded-full'> 
  X
</Link>
    <h1 className='text-4xl'>
      {FoodItems.FoodName}

    </h1>

    <h1>
      {FoodItems.FoodCategory}
    </h1>

    <p>
      {FoodItems.FoodDesc}
    </p>

    <p>
      <b>
        Ingredients :
      </b><br/>

      {FoodItems.FoodIngredients}
    </p>

<h1>
&#x20B9;  {FoodItems.FoodPrice}
</h1>

<div className='py-8 flex gap-2'>



<Link className="bg-yellow-400 text-black px-6 py-2">
Add to Cart 
</Link>

<Link className="bg-yellow-400 text-black  px-6 py-2">
Buy Now
</Link>
</div>

  </div>

</div>
      
     
   </div>
    
    </>
  )
}

export default FoodItemDetails