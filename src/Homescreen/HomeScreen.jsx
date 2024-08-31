import React, { useState } from 'react'

function HomeScreen() {
    const data=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    //const block=[0];
const [idx,setIndex]=useState(-1);
  return (
    <div className='w-full min-h-screen grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4  lg:grid-cols-7 gap-4 '>
        {
            data.map((item,index)=>{
                return (
                    <div onMouseEnter={()=>{
                        setIndex(index);
                    }}
                    onMouseLeave={()=>{
                        setIndex(-1);
                    }}
                     className={`w-auto flex flex-row text-lg max-w-[300px] min-w-[200px] mx-auto justify-center font-bold items-center text-red-900  md:hidden ${index===idx?"bg-red-200":"bg-blue-200"} `}>
                        <p>Smaller Screen</p>
                    </div>
                )
            })
        }
        {
            data.map((item,index)=>{
                return (
                    <div onMouseEnter={()=>{
                        setIndex(index);
                    }}
                    onMouseLeave={()=>{
                        setIndex(-1);
                    }}
                     className={`w-auto  hidden md:flex md:flex-row md:text-[1.5vw] md:font-semibold md:justify-center text-white md:items-center ${index!==idx?"bg-red-500":"bg-blue-500"} `}>
                        <p className=''>Medium Screen</p>
                    </div>
                )
            })
        }
    </div>

  )
}

export default HomeScreen