import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Update from '../pages/Update'

export default function Users() {
  const navigation = useNavigate()

  const[userData,setUserData] = useState([])




    async function userId(id){
      // console.log("Ok it is work")
      // console.log(id);
      try{
        let res =  await axios.delete(`http://localhost:3000/users/${id}`)
        // console.log(res)
        // navigation('/')
           setUserData((prevUsers) =>
      prevUsers.filter((user) => user._id !== id)
    );
  
      } 
      catch(error){
        console.log(error);
        
      }
  
      
  
    }


   async function updateId(id){
       try{
      
      navigation(`/update/${id}`)
           
   
      } 
      catch(error){
        console.log(error);
        
      }

    console.log(id);
    
  
    }





  
    useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await axios.get('http://localhost:3000/read')
        setUserData(res.data)
        // console.log(res.data._id)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }

    fetchUsers()
  }, [])

    return (
      <>
      <button onClick={()=> navigation('/')} className='bg-[#1c86b6] text-white  hover:text-black hover:bg-blue-400 p-3  mt-10 ms-20 rounded-xl'>Home</button>
    <div className='w-7xl  mx-auto mt-10 rounded-2xl flex flex-wrap gap-10 '>
   
         {  userData.length>0 ? (userData.map((user,idx) => (
             <div key={idx} className='w-70  bg-zinc-100 rounded-2xl h-90 flex  flex-col items-center shadow-xl/30 transition delay-0 duration-400 ease-in-out hover:-translate-y-1 hover:scale-110 '>

  <div className='w-30 h-30 overflow-hidden  mt-3'>
    {/* <h1>{user._id}</h1> */}

    <img src={user.imageUrl} alt="null" className='w-full h-full rounded-full ' />
  </div>

  <div className='mt-5  px-2 text-center  gap-5'>
    <h1 className='text-xl font-extrabold'> <span className='text-xl font-bold text-gray-700'>name:</span> {user.name}  </h1>

    <h1 className='font-bold text-sm truncate text-gray-700 mt-5'> 
      <span className=' font-light text-gray-900 text-sm'>email : </span>{user.email}</h1>
  </div>


<div className='  px-3 w-full mt-25 flex justify-between '>


  <button onClick={()=> updateId(user._id)} className='px-2 rounded-xl text-white font-bold  bg-mist-700  hover:bg-mist-800 '>Edit</button>
  <button onClick={() => userId(user._id) } className='p-1 rounded-xl text-white font-bold  bg-red-500  hover:bg-red-800 '>Delete</button>
</div>

</div>  



        
          )) ) : (<h1 className='text-xl text-gray-400 font-bold'>no User Yet</h1>)  }



    </div>
      </>
  )
}
