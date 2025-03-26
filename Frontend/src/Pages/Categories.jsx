import React,{useState,useEffect} from 'react'
import Hero from '../components/hero'
import axios from 'axios'
import FoodCard from '../components/FoodCard';



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

        <div className='lg:flex grid grid-cols-3 gap-4 lg:px-0 px-32 justify-center pt-20 py-1 lg:text-2xl '>
        {
          CategoryItem.map((item,i)=>(
            <button key={i} className='bg-yellow-400 lg:px-4 lg:py-2 px-2 py-2 rounded-xl' onClick={()=>handleClick(item)}>
                {item}
            </button>
          ))
        }

  </div>


  <div className=' p-10 bg-zinc-700'>
       <div className='m-0 px-4  ' >
                   <div className='my-8 grid md:grid-cols-4 gap-4 sm:grid-cols-3 grid-cols-1'>
                          
                          {FilterData.map((items,i)=>
                          (
                            <div key={i}>
                              <FoodCard data={items} />

                            </div>
                          )
                          )}
                     </div>
       </div>



</div>

 </div>


 







    


</>
  )
}



export default Categories