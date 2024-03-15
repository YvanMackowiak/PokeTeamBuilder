import { Box, IconButton, Typography } from "@mui/material";
import { useApiCall } from "../api/usePokemonApi";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useEffect, useState } from "react";
import { logos } from "../logos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { pokemonId } from "../store/pokemon/pokemonSlice";
import { useHistory } from "react-router-dom";
import BartChart from "../components/BartChart";

export const Pokemon = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const idPokedex = useAppSelector((state) => state.poke.id);
  const [id, setId] = useState(idPokedex);
  const { data, loading } = useApiCall(`pokemon/${id}`);
  const [underneath, setUnderneath] = useState<
    { name: string; multiplier: number }[]
  >([]);
  const [underneathTwo, setUnderneathTwo] = useState<
    { name: string; multiplier: number }[]
  >([]);

  console.log("data", data);

  useEffect(() => {
    if (data && data?.resistances) {
      const taille1 =
        data?.resistances && Math.ceil(data?.resistances.length / 2);
      const taille2 = data?.resistances.length - taille1;

      const arrayRes = data?.resistances.slice(0, taille1);
      const arrayResTwo = data?.resistances.slice(taille1, taille1 + taille2);
      setUnderneath(arrayRes);
      setUnderneathTwo(arrayResTwo);
    }
  }, [data]);

  const hanleClickArrowBack = () => {
    const newId = (data?.pokedex_id ?? 0) - 1;
    setId(newId);
    dispatch(pokemonId(newId));
    history.push(`/Pokemon/${newId}`);
  };

  const handleClickArrowForward = () => {
    const newId = (data?.pokedex_id ?? 0) + 1;
    setId(newId);
    dispatch(pokemonId(newId));
    history.push(`/Pokemon/${newId}`);
  };

  return (
    <>
      {loading && data ? (
        "chargement"
      ) : (
        <>
          <Box
            display="flex"
            gap={1}
            p={3}
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            <Box display="flex" alignItems="center" gap={1}>
              <Typography variant="h3">{data?.name.fr}</Typography>
              <Typography variant="h5">{data?.name.jp}</Typography>
              <Typography variant="h5">{data?.pokedex_id}</Typography>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <IconButton onClick={hanleClickArrowBack}>
                <ArrowBackIosNewIcon /> {(data?.pokedex_id ?? 0) - 1}
              </IconButton>
              <img
                src={data?.sprites.regular}
                alt={data?.name.fr}
                style={{ width: 200 }}
              />
              <IconButton onClick={handleClickArrowForward}>
                {(data?.pokedex_id ?? 0) + 1} <ArrowForwardIosIcon />
              </IconButton>
            </Box>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box>
              <Box display="flex" gap={1} alignItems="center">
                <Box>
                  <Box display="flex" gap={0.5}>
                    <Typography>Pokémon de type:</Typography>
                    {data?.types.map((type) => (
                      <Typography>{type.name}</Typography>
                    ))}
                    <BartChart stats={data?.stats} />
                  </Box>
                </Box>
                <Box
                  display="flex"
                  justifyContent="center"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Typography p={2}>Resistances et faiblesse:</Typography>
                  <Box display="flex" gap={2}>
                    <Box>
                      {underneath.map((res) => (
                        <Typography gap={1} display="flex" pb={0.5}>
                          <img
                            src={
                              (
                                logos.find((logo) => logo.type === res.name) ||
                                {}
                              ).path
                            }
                            alt={res.name}
                            width={24}
                            height={24}
                          />
                          x {res.multiplier}
                        </Typography>
                      ))}
                    </Box>
                    <Box>
                      {underneathTwo.map((res) => (
                        <Typography gap={1} display="flex" pb={0.5}>
                          <img
                            src={
                              (
                                logos.find((logo) => logo.type === res.name) ||
                                {}
                              ).path
                            }
                            alt={res.name}
                            width={24}
                            height={24}
                          />
                          x {res.multiplier}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};
