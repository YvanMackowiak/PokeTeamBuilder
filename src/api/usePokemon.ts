import { useState, useEffect } from "react";
import axios from "axios";

interface ApiResponse {
  data: any;
}

export const useApiCall = (apiUrl: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiResponse>(`https://tyradex.vercel.app/api/v1/${apiUrl}`, {
          headers: {
            "e-mail": "yvansimpson@gmail.com",
          },
        });
        setData(response.data);
      } catch (error) {
        setError("Une erreur s'est produite lors de la récupération des données.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  return { data, loading, error };
};
