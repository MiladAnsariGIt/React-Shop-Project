import { useState,useEffect } from "react";

export function useFetch(url){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {

        async function fetchData() {
          
            try{
              setLoading(true);
              setError("");

              const response = await fetch(url);
              
              if(!response.ok)
                throw new Error("Server Error");

              const result = await response.json();
              setData(result);
            }
            catch(err){
              setError(err.message);
            }
            finally{
              setLoading(false);
            }
        }

        fetchData();
    }, [url]);   

    return{
      data,
      loading,
      error
    };
}