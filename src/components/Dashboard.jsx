import React, { useEffect, useState } from 'react'
import { useUserStore } from '../zustand/userStore'

import statsSJpg from '../assets/imgs/stats-small.png'
import statsBJpg from '../assets/imgs/stats-big.jpg'
import { useMediaQuery } from 'react-responsive'
import useStats from '../hooks/useStats'




function Dashboard() {


const { statsData } = useStats();
const usersData = useUserStore(state => state.usersData)



  return (
    <div className=' border-0 border-blue-400 self-center w-full sm:w-3/4 max-w-2xl    '>
      <div className="card md:card-side bg-base-200 shadow-xl w-full">
        {/* <div className='min-w-20'>       */}
        <figure className=' w-full sm:max-w-52   sm:border-0 border-blue-400  object-fill'>
          <img className="  h-40 md:h-full border-0 border-blue-800 md:h-full w-full sm:w-full object-cover"
          src={ useMediaQuery({ query  : '(min-width: 752px'}) ? statsBJpg : statsSJpg  }
          alt="Album" />
        </figure>
        {/* </div> */}
        <div className="card-body">
          <h1 className="card-title text-2xl underline underline-offset-0 italic">Statistics</h1>
   

          
          <div className='flex flex-col gap-3   border-0 w-2/3 min-w-72 sm:w-full border-blue-400'>

          
          <div className="card bg-base-100    h-12 sm:h-14  shadow-xl">
            <div className="card-body p-3 sm:p-4 ">
              <h2 className="card-title text-md sm:text-lg font-normal "> Total Users : <span className='font-semibold'>  {usersData?.length} </span> </h2>
            </div>
          </div>

          <div className='grid grid-cols-3  gap-1 justify-start'>


            {statsData && Object.keys(statsData).length > 0 && Object.keys(statsData).map((role) => (
              <div key={role} className="card bg-base-100  h-10 sm:h-12 shadow-xl w-max">
            <div className="card-body h-10 border-0 border-blue-500 p-3  ">
              <h2 className="card-title text-xs sm:text-base font-normal border-blue-500 p-0 text-center  "> {role}s : {statsData[role]} </h2>
            </div>
          </div>
          

            ))
            }

          </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard