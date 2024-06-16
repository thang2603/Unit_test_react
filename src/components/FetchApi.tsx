import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { fetchUsers } from '../service/admin';


const FetchApi = () => {
    const {data,isLoading,error} =  useQuery({
        queryKey:["catApi"],
        queryFn: fetchUsers,
        
    })
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
  return (
    <div  onClick={() =>console.log(data)}>FetchApi
    {/* <p>{data?.data.fact}</p>
    <p>{data?.data.length}</p> */}
    </div>
  )
}

export default FetchApi