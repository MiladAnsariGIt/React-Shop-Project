
import { useState, useEffect, useCallback } from "react";

export function useFetch(fetchFunction, initialData = null) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retryCount, setRetryCount] = useState(0);

  const refetch = useCallback(() => {
    setRetryCount(count => count + 1);
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      try {
        setLoading(true);
        setError("");

        const result = await fetchFunction();

        if (!cancelled) {
          setData(result);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || "Something went wrong");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [fetchFunction, retryCount]);

  return { data, loading, error, refetch };
}
