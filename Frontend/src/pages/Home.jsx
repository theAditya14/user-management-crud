import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  
  const navigation = useNavigate()

   async function formHandling(e){
    e.preventDefault()
    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const imageUrl = formData.get('imageUrl');
   
    const  userData = {name,email,imageUrl}
 
try{

  const res  = await axios.post("http://localhost:3000/create", userData, {
     headers:{
       "Content-Type": "application/json"
     }
   })
   navigation('/users')
  
} catch(err){
  console.log(err)
}

      


    

  }

 



  return (
 <>

       <div className='w-7xl mx-auto  h-screen flex flex-col items-center justify-center '>

        <div className=' flex gap-5 '> 
          <button  className='border'>sfd</button>  



          <br />
          <button onClick={() => navigation('/users')} className='rounded-xl bg-yellow-400 text-white font-bold px-3 py-2 '>All Users</button>
        </div>

        <form  onSubmit={formHandling} className='flex flex-col items-center justify-center  w-100 h-120 rounded-2xl shadow-2xl gap-5 '>

          <input  className=" bg-gray-100  rounded-sm p-2 hover:bg-transparent  hover:text-black w-70 " type="text"  placeholder='name' name='name' required/>
          <input  className=" bg-gray-100  rounded-sm p-2 hover:bg-transparent hover:text-black w-70" type="email"  placeholder='email' name='email' required/>
          <input  className=" bg-gray-100  rounded-sm p-2 hover:bg-transparent hover:text-black w-70" type="text"  placeholder='image url' name='imageUrl' required/>

          <button type='submit' className='border py-2 px-4 rounded-2xl bg-blue-500 hover:bg-blue-700 active:scale-95 text-xl text-white font-bold cursor-pointer'>submit</button>



        </form>

        


       </div>


       {/* <Users/> */}


 </>
  )
}
