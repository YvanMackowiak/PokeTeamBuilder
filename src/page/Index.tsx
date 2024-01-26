import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import pokemonImage from "../assets/img/evolution.jpg";
import { useApiCall } from "../api/usePokemonApi";
import { ActionAreaCard } from "../components/Card";
import pikapika from "../assets/img/pikapika.gif";
import { useResetState } from "../hooks/usePokemon";

export const Index = () => {
  const [randomPokemonId, setRandomPokemonId] = useState<number | null>(null);
  const [secondRandomPokemonId, setSecondRandomPokemonId] = useState<
    number | null
  >(null);
  const { handleClick } = useResetState();

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 1007) + 1;
    let secondRandomNumber;
    do {
      secondRandomNumber = Math.floor(Math.random() * 1007) + 1;
    } while (secondRandomNumber === randomNumber);

    setRandomPokemonId(randomNumber);
    setSecondRandomPokemonId(secondRandomNumber);
  }, []);

  useEffect(() => {
    handleClick();
  }, [handleClick]);

  const { data, loading } = useApiCall(
    `pokemon/${randomPokemonId}`,
    randomPokemonId !== null
  );
  const { data: secondData, loading: secondLoading } = useApiCall(
    `pokemon/${secondRandomPokemonId}`,
    secondRandomPokemonId !== null
  );
  console.log("data", randomPokemonId, data);
  console.log("second", secondRandomPokemonId, secondData);

  return (
    <Box>
      <img
        src={pokemonImage}
        alt="evolution premier gen"
        style={{ width: "100%" }}
      />
      <Box
        gap={1}
        p={3}
        textAlign="justify"
        width={"75%"}
        display="flex"
        flexDirection="column"
        margin="auto"
        fontSize={"1.1rem"}
      >
        <Box gap={1}>
          <Typography
            variant="h1"
            sx={{ fontSize: "2rem", fontWeight: "bold", mb: 2 }}
          >
            Bienvenue sur votre site Pokémon, jeune dresseur en quête
            d'aventures !
          </Typography>
          <Typography>
            Plonge au cœur de l'univers Pokémon avec nous, où l'art de créer des
            équipes d'exception devient réalité. Que tu sois un stratège
            ambitieux visant l'équipe ultime en attaque, un défenseur acharné
            désireux de résister à toute adversité, ou même un dresseur
            téméraire en quête d'originalité, tu es au bon endroit !
          </Typography>
          <Typography>
            Explorer votre site et découvre des outils puissants qui te
            permettront de concevoir des équipes Pokémon inoubliables. Fais
            preuve de créativité pour élaborer des stratégies uniques, que ce
            soit pour surprendre tes rivaux avec une équipe atypique, garantir
            une défense impénétrable, ou tout simplement régner en maître sur
            tous les terrains.
          </Typography>
          <Typography>
            Que tu ambitionnes le titre de Champion de la Ligue Pokémon ou que
            tu souhaites simplement t'amuser avec des équipes hors du commun,
            votre site est là pour t'accompagner dans chaque étape de ton
            aventure. Prépare-toi à explorer l'infini de l'univers Pokémon et à
            créer des équipes qui entreront dans la légende !
          </Typography>
          <Typography>
            Attrape-les tous, jeune dresseur, et que ton voyage sur votre site
            soit aussi grandiose qu'un combat entre deux Pokémon légendaires !
          </Typography>
          <Typography>
            Maintenant, va de l'avant, jeune dresseur ! Crée ta première équipe
            et commence ton périple vers la victoire !
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" mt={2}>
          {loading ? (
            <img src={pikapika} alt="pikatchu" style={{ width: "150px" }} />
          ) : (
            data &&
            data.types &&
            data.sprites && (
              <ActionAreaCard
                id={data.pokedexId}
                title={data?.name.fr}
                image={data.sprites.regular}
                type={data.types[0].image}
                typeName={data.types[0].name}
                secondType={data.types[1] && data.types[1].image}
                secondTypeName={data.types[1] && data.types[1].name}
                stats={data.stats}
              />
            )
          )}
          {secondLoading ? (
            <img src={pikapika} alt="pikatchu" style={{ width: "150px" }} />
          ) : (
            secondData &&
            secondData.types &&
            secondData.sprites && (
              <ActionAreaCard
                id={secondData.pokedexId}
                title={secondData?.name.fr}
                image={secondData.sprites.regular}
                type={secondData.types[0].image}
                typeName={secondData.types[0].name}
                secondType={secondData.types[1] && secondData.types[1].image}
                secondTypeName={secondData.types[1] && secondData.types[1].name}
                stats={secondData.stats}
              />
            )
          )}
        </Box>
      </Box>
    </Box>
  );
};
