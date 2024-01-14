import { Box, Typography } from "@mui/material";
import React from "react";
import pokemonImage from "../assets/img/evolution.jpg";
import { useApiCall } from "../api/usePokemon";

export const Index = () => {
  const { data } = useApiCall("pokemon/1");
  console.log(data);

  return (
    <Box>
      <img src={pokemonImage} alt="evolution premier gen" style={{ width: "100%" }} />
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
          <Typography variant="h1" sx={{ fontSize: "2rem", fontWeight: "bold", mb: 2 }}>
            Bienvenue sur votre site Pokémon, jeune dresseur en quête d'aventures !
          </Typography>
          <Typography>
            Plonge au cœur de l'univers Pokémon avec nous, où l'art de créer des équipes d'exception devient réalité.
            Que tu sois un stratège ambitieux visant l'équipe ultime en attaque, un défenseur acharné désireux de
            résister à toute adversité, ou même un dresseur téméraire en quête d'originalité, tu es au bon endroit !
          </Typography>
          <Typography>
            Explorer votre site et découvre des outils puissants qui te permettront de concevoir des équipes Pokémon
            inoubliables. Fais preuve de créativité pour élaborer des stratégies uniques, que ce soit pour surprendre
            tes rivaux avec une équipe atypique, garantir une défense impénétrable, ou tout simplement régner en maître
            sur tous les terrains.
          </Typography>
          <Typography>
            Que tu ambitionnes le titre de Champion de la Ligue Pokémon ou que tu souhaites simplement t'amuser avec des
            équipes hors du commun, votre site est là pour t'accompagner dans chaque étape de ton aventure. Prépare-toi
            à explorer l'infini de l'univers Pokémon et à créer des équipes qui entreront dans la légende !
          </Typography>
          <Typography>
            Attrape-les tous, jeune dresseur, et que ton voyage sur votre site soit aussi grandiose qu'un combat entre
            deux Pokémon légendaires !
          </Typography>
          <Typography>
            Maintenant, va de l'avant, jeune dresseur ! Crée ta première équipe et commence ton périple vers la victoire
            !
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
