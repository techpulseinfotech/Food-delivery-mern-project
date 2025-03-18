import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Profile from './Pages/Profile'
import AboutUs from './Pages/AboutUs'
import Categories from './Pages/Categories'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import AddFoodItems from './Pages/AddFoodItems'
import Bnr from './components/Bnr'
function App() {


  return (
    <>
<Router>
  <Navbar></Navbar>
 
<Routes>
  <Route  path='/' element={<Home></Home>} />
  <Route  path='/cart' element={<Cart></Cart>} />
  <Route  path='/profile' element={<Profile></Profile>} />
  <Route  path='/about-us' element={<AboutUs></AboutUs>} />
  <Route  path='/categories' element={<Categories></Categories>} />
  <Route  path='/add-food-item' element={<AddFoodItems></AddFoodItems>} />
  <Route  path='/signUp' element={<SignUp></SignUp>} />
  <Route  path='/login' element={<Login></Login>} />
</Routes>


</Router>

   
    </>
  )
}

export default App
