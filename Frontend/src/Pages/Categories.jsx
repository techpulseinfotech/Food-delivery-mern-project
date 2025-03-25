import React,{useState,useEffect} from 'react'
import Hero from '../components/hero'
import axios from 'axios'



function Categories() {
    const [FoodItems, setFoodItems] = useState([]);
    
 

  const [FilterData, setFilterData] =useState([]);

console.log(FilterData);


  
      useEffect(() => {
          const getFoodItem = async () => {
              try {
                  const response = await axios.get("http://localhost:4000/get-food-item");
                  setFoodItems(response.data.data);
                  setFilterData(response.data.data)
              } catch (error) {
                  console.error(error);
              }
          };
  
          getFoodItem();

          
      }, []);
  
   

async function handleClick(item)
{
  try {

   

    if(item=="All")
    {
      setFilterData(FoodItems);
    }
    else
       {
        setFilterData(  FoodItems.filter(d => d.FoodCategory == item));
       }

console.log(FilterData);


    
  } catch (error) {
    
  }
}

const CategoryItem =["All","Pizza","Burger","Cold-Coffie","French-Frice","Sweets"]

  return (
    <>

 
    <div className='h-screen bg-zinc-700'>
      <Hero title="Categories"></Hero>

<div className='flex gap-4 justify-center  py-8 text-2xl'>
{
  CategoryItem.map((item,i)=>(
    <button key={i} className='bg-yellow-400 px-4 py-2 rounded-xl' onClick={()=>handleClick(item)}>
        {item}
    </button>
  ))
}

    </div>

    </div>

<div className='h-screen bg-yellow-400'>
{
  FilterData.map((item,i)=>(
    <div key={i}>
      <h1>
      {item.FoodName}
      </h1>

      <h1>
        {item.FoodCategory}
      </h1>
     
    </div>
    
  ))
}
 
 
</div>

    
    </>
  )
}

export default Categories