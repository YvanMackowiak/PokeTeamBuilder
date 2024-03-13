import { useState, useEffect } from "react";
import axios from "axios";

export interface ApiResponse {
  catch_rate: number;
  category: string;
  egg_groups: string[];
  evolution: {
    mega: null | {
      /* structure si non null */
    };
    next: Array<{
      pokedex_id: number;
      name: string;
      condition: string;
    }>;
    pre: null | {
      /* structure si non null */
    };
  };
  forme: null | {
    /* structure si non null */
  };
  generation: number;
  height: string;
  level_100: number;
  name: {
    fr: string;
    en: string;
    jp: string;
  };
  pokedex_id: number;
  resistances: Array<{
    name: string;
    multiplier: number;
  }>;
  sexe: {
    male: number;
    female: number;
  };
  sprites: {
    gmax: null | string;
    regular: string;
    shiny: string;
  };
  stats: {
    hp: number;
    atk: number;
    def: number;
    spe_atk: number;
    spe_def: number;
    vit: number;
    // autres stats si nécessaire
  };
  talents: Array<{
    name: string;
    tc: boolean;
  }>;
  types: Array<{
    name: string;
    image: string;
  }>;
  weight: string;
}

export const useApiCall = (apiUrl: string, shouldCallApi: boolean) => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          `https://tyradex.vercel.app/api/v1/${apiUrl}`,
          {
            headers: {
              "e-mail": "yvansimpson@gmail.com",
            },
          }
        );
        console.log("Réponse de l'API:", response.data);
        setData(response.data);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          setError(
            `Erreur ${error.response.status} : ${error.response.data.message}`
          );
        } else {
          setError(
            "Une erreur s'est produite lors de la récupération des données."
          );
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl, shouldCallApi]);

  return { data, loading, error };
};
