import React, { useState } from 'react';
import axios from 'axios';
const AddFoodItems = () => {

const [FoodName, setFoodName] = useState('');
const [FoodDesc, setFoodDesc] = useState('');  
const [FoodPrice, setFoodPrice] = useState('');
const [FoodCategory, setFoodCategory] = useState('');
const [FoodIngradients, setFoodIngradients] = useState('');
const [FoodImage, setFoodImage] = useState(null);


const handleSubmit = async (e) => {
  try {
      e.preventDefault();
      
    const formData = new FormData()
    formData.append('FoodName',FoodName);
    formData.append('FoodDesc',FoodDesc);
    formData.append('FoodPrice',FoodPrice);
    formData.append('FoodCategory',FoodCategory);
    formData.append('FoodIngradients',FoodIngradients);
    formData.append('FoodImage',FoodImage);
    
      const response = await axios.post('http://localhost:4000/add-food-item',formData);

      console.log(response.data.Message);

setFoodName('');
setFoodDesc('');
setFoodCategory('');
setFoodIngradients('');
setFoodPrice('');
setFoodImage('');


  } catch (error) {
      console.log(error);
  }
};



  return (
    <div className="min-h-screen bg-zinc-800 py-8  pt-28 ">
      <div className="max-w-2xl mx-auto bg-zinc-900 rounded-lg shadow-lg p-6 border border-zinc-700">
        <div className="mb-6 ">
          <h1 className="text-2xl font-bold text-yellow-400">Add New Food Item</h1>
          <p className="text-zinc-400">Complete the form below to add a new item to the menu</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
        
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-yellow-400 border-b border-zinc-700 pb-2">Basic Information</h2>
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1">
                Food Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={FoodName}
                onChange={(e)=>setFoodName(e.target.value)}
                required
                className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:border-yellow-400 text-zinc-200 placeholder-zinc-500"
                placeholder="add food name"
              />
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-zinc-300 mb-1">
                Description*
              </label>
              <textarea
                id="description"
                name="description"
                value={FoodDesc}
                onChange={(e)=>setFoodDesc(e.target.value)}
                required
                rows="3"
                className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:border-yellow-400 text-zinc-200 placeholder-zinc-500"
                placeholder="Describe the food item..."
              ></textarea>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-zinc-300 mb-1">
                  Price (Rs)*
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={FoodPrice}
                  onChange={(e)=>setFoodPrice(e.target.value)}
                  required
                  min="0"
                  step="1"
                  className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:border-yellow-400 text-zinc-200 placeholder-zinc-500"
                  placeholder="0"
                />
              </div>
              
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-zinc-300 mb-1">
                  Category*
                </label>
                <input type='text'
                  id="category"
                  name="category"
                  value={FoodCategory}
                  onChange={(e)=>setFoodCategory(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:border-yellow-400 text-zinc-200"
                >
                 
                </input>
              </div>
            </div>
          </div>

        
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-yellow-400 border-b border-zinc-700 pb-2">Detailed Information</h2>
            
            <div>
              <label htmlFor="ingredients" className="block text-sm font-medium text-zinc-300 mb-1">
                Ingredients*
              </label>
              <textarea
                id="ingredients"
                name="ingredients"
                value={FoodIngradients}
                onChange={(e)=>setFoodIngradients(e.target.value)}
                required
                rows="3"
                
                className="w-full px-3 py-2 bg-zinc-800 border  border-zinc-700 rounded-md focus:outline-none focus:border-yellow-400 text-zinc-200 placeholder-zinc-500"
                placeholder="List all ingredients separated by commas..."
              ></textarea>
            </div>
            
            
          </div>

          <div className="">

            <h2 className="text-lg font-semibold text-yellow-400  pb-2">Food Image</h2>
            
            <div className="mt-1 flex  justify-center px-6 pt-5 pb-6 border-2 border-zinc-700 border-dashed rounded-md bg-zinc-800 focus-within:border-yellow-400">
              <div className=" text-center">
               
                <div className="flex text-sm text-zinc-400">
                  <label 
                    htmlFor="image" 
                    className="relative cursor-pointer bg-zinc-800 rounded-md font-medium text-yellow-400 hover:text-yellow-300"
                  >
                    <span>Upload a file</span>
                    <input 
                      id="image" 
                      name="image" 
                      type="file" 
                      className="sr-only" 
                      accept="image/*"
                      onChange={(e)=>setFoodImage(e.target.files[0])}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-zinc-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              className="px-4 py-2 border border-zinc-700 rounded-md text-sm font-medium text-zinc-300 bg-zinc-800 hover:bg-zinc-700 focus:outline-none focus:border-yellow-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-zinc-900 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:border-yellow-400"
            >
              Add Food Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFoodItems;