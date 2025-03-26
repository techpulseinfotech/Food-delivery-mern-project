import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FoodCard from './FoodCard';

function AllFoodItem() {
    const [FoodItems, setFoodItems] = useState([]);

    useEffect(() => {
        const getFoodItem = async () => {
            try {
                const response = await axios.get("http://localhost:4000/recently-added");
                setFoodItems(response.data.data);
            } catch (error) {
                console.error(error);
            }
        };

        getFoodItem();
    }, []);

    return (
        <div className=' p-10 bg-zinc-700'>
                 <div className='m-0 px-4  ' >
         <div className='my-8 grid md:grid-cols-4 gap-4 sm:grid-cols-3 grid-cols-1'>
                {FoodItems && FoodItems.map((items,i)=>
                <div key={i}>
                    <FoodCard data={items}></FoodCard>
                </div>
                ) }
            </div>
        </div>

        </div>
   
    );
}

export default AllFoodItem;
