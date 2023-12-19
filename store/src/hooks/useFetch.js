import { useState,useEffect } from "react";

function useFetch(url) {

  const [isLoading,setIsLoading] = useState(true);
  const [error,setError] = useState(null);
  const [data,setData] = useState(null)

  useEffect(() => {
    const fetchData = async() => {
      setIsLoading(true)
      try{
        const res = await fetch(url)
        const json = await res.json();
        setData(json);
  
      }
      catch (error){
        setError(error);
      }
      setIsLoading(false)
    };
    fetchData()
  },[])
  return {isLoading,error,data}
}

export default useFetch