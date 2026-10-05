import { useState,useEffect } from "react";

export function useFetch(fetchFunction){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {

        async function fetchData() {
          
            try{
              setLoading(true);
              setError("");

              const result = await fetchFunction();

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
    }, [fetchFunction]);   

    return{
      data,
      loading,
      error
    };
}