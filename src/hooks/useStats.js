import React, { useEffect, useState } from 'react'
import { useUserStore } from '../zustand/userStore'
import useRoleStore from '../zustand/rolesStore';

function useStats() {

  const usersData = useUserStore(state => state.usersData)
  const roles = useRoleStore((state) => state.roles);


  const [statsData, setStatsData] = useState({})

  useEffect(()=> {

    const stats =  usersData.reduce((acc, user) => {
      acc[user['role']] =  (acc[user['role']] || 0 ) + 1;
      return acc;
    },{}  )

    console.log(stats)

    setStatsData(stats);


  },[usersData,roles])
    
  return { statsData : statsData }
}

export default useStats