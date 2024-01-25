import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { usePokemon } from "../hooks/usePokemon";

interface ActionAreaCardProps {
  title: string;
  image: string;
  type: string;
  typeName: string;
  secondType?: string;
  secondTypeName?: string;
  stats: { atk: number; def: number; hp: number; spe_atk: number; spe_def: number; vit: number };
  id: number;
}
//export const ID_POKEMON = "ID_POKEMON";

export const ActionAreaCard = ({
  title,
  image,
  type,
  typeName,
  secondType,
  secondTypeName,
  stats,
  id,
}: ActionAreaCardProps) => {
  // const history = useHistory();
  // const dispatch = useDispatch();
  // const handleClick = () => {
  //   dispatch({ type: PokemonActionTypes.ID_POKEMON, pokemon_id: id });
  //   history.push(`/Pokemon/${id}`);
  // };
  const { handleClick } = usePokemon();
  return (
    <Card sx={{ maxWidth: 345 }} onClick={() => handleClick(id)}>
      <CardActionArea>
        <CardMedia component="img" height="160" image={image} alt={title} style={{ objectFit: "contain" }} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" gap={1} display="flex">
            <img src={type} alt={typeName} style={{ width: "30px" }} />
            {secondType && <img src={secondType} alt={secondTypeName} style={{ width: "30px" }} />}
          </Typography>
          <Box display="flex" gap={1} mt={1}>
            <table>
              <tbody>
                <tr>
                  <td>Attaque: </td>
                  <td>{stats.atk}</td>
                </tr>
                <tr>
                  <td>Point de vie: </td>
                  <td> {stats.hp}</td>
                </tr>
                <tr>
                  <td>Defence spécial: </td>
                  <td>{stats.spe_def} </td>
                </tr>
              </tbody>
            </table>
            <table>
              <tbody>
                <tr>
                  <td>Defence: </td>
                  <td> {stats.def}</td>
                </tr>
                <tr>
                  <td> Attaque spécial:</td>
                  <td> {stats.spe_atk}</td>
                </tr>
                <tr>
                  <td> Vitesse:</td>
                  <td>{stats.vit} </td>
                </tr>
              </tbody>
            </table>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
