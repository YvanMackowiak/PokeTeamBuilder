import { Box, Typography } from "@mui/material";
import React from "react";
import pokemonImage from "../assets/img/pokemonSpectre.jpg";

export const Error = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
      <img
        src={pokemonImage}
        alt="effrayante d'un Dresseur perdu, entouré de Pokémon Spectre."
        style={{ width: "500px", height: "500px" }}
      />
      <Box p={3}>
        <Typography>
          Oh non ! Il semble que tu aies erré dans une zone mystérieuse de la Route 404, où même les Dresseurs les plus
          courageux hésitent à s'aventurer. Les Pokémon Spectre rôdent dans l'ombre, et les Phénomènes Divergents
          causent des distorsions effrayantes.
        </Typography>
        <Typography>
          Mais ne crains rien, cher Dresseur ! Pour échapper à cette étrange dimension, retourne sur la Voie Principale
          en cliquant sur le bouton magique ci-dessous. Il t'escortera en toute sécurité vers la page d'accueil, loin
          des mystères inquiétants de la Route 404.
        </Typography>
      </Box>
      [Retourner à la Page d'Accueil]
    </Box>
  );
};
