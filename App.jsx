import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {
  const[data,setData]=useState([])
  const getData=async()=>{
    const response=await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
 
  }
  useEffect(() => {
    getData()
  }, [])
  
  return (
    <div className='p-10'>
      
      <div className='p-5 mt-5 bg-green-950'>
        {data.map(function(elem,idx){
          return <div key ={idx} className='bg-green-50 text-black flex items-center justify-between w-full px-7 py-6 rounded mt-3'> 
         <img className='h-40' src={elem.download_url} alt=''/>
         <h1>{elem.author}</h1>
          </div>

        })}
      </div>
    </div>
  )
}

export default App 
