import React from 'react'
// import Home from '../pages/Home'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

export default function Update() {
    const navigation = useNavigate()
    const {id} = useParams()
    console.log(id);
    



   async function formHandling(e){
    e.preventDefault()
    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const imageUrl = formData.get('imageUrl');
   
    const  userData = {name,email,imageUrl}
    // console.log(userData)
 
try{

  const res  = await axios.patch(`http://localhost:3000/users/${id}`, userData)
   navigation('/users')
  
} catch(err){
  console.log(err)
}
    

  }




  return (
    <>
       <div className='w-7xl mx-auto  h-screen flex flex-col items-center justify-center '>

        <div className=' flex gap-5 mb-5  items-center '> 
          <button  onClick={()=> navigation('/users')}  className='px-2 hover:bg-gray-500 active:scale-95  rounded-2xl bg-gray-200  mt-2  text-center flex items-center justify-center font-extrabold text-3xl '> ← </button>  



          <br />

           <button onClick={()=> navigation('/')} className='bg-[#1c86b6] text-white  hover:text-black hover:bg-blue-400 p-3   ms-20 rounded-xl'>Home</button>

        </div>

        <form  onSubmit={formHandling} className='flex flex-col items-center justify-center  w-100 h-120 rounded-2xl shadow-2xl gap-5 '>

          <input  className=" bg-gray-100  rounded-sm p-2 hover:bg-transparent  hover:text-black w-70 " type="text"  placeholder='name' name='name'   />

          <input  className=" bg-gray-100  rounded-sm p-2 hover:bg-transparent hover:text-black w-70" type="email"  placeholder='email' name='email' />

          <input  className=" bg-gray-100  rounded-sm p-2 hover:bg-transparent hover:text-black w-70" type="text"  placeholder='image url' name='imageUrl'   />


          <button type='submit' className='border py-2 px-4 rounded-2xl bg-blue-800 hover:bg-blue-900 active:scale-95 text-xl text-white font-bold cursor-pointer'>Update</button>



        </form>

        


       </div>
    
    
    </>
  )
}
