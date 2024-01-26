import { Box, ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Index } from "./page/Index";
import { Error } from "./page/Error";
import { Footer } from "./components/Footer";
import SearchPokemon from "./page/SearchPokemon";
import Pokemon from "./page/Pokemon";

const theme = createTheme({
  palette: {
    primary: {
      main: "#393057", // Couleur principale
      light: "#EFDDFF",
    },
    secondary: {
      main: "#EFDDFF", // Couleur secondaire
    },
    error: {
      main: "#FF3B30", // Couleur d'erreur
    },
    background: {
      default: "#23272a", // Couleur de fond par défaut
    },
  },
  typography: {
    fontFamily:
      "Baskerville, Baskerville Old Face, Garamond, Times New Roman, serif",
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Box
          className="App"
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Header />
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/Accueil" exact component={Index} />
            <Route path="/Pokemon/" exact component={SearchPokemon} />
            <Route path="/Pokemon/:selectPokemon" exact component={Pokemon} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
