import { Box } from "@mui/material";
import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Index } from "./page/Index";
import { Error } from "./page/Error";

function App() {
  return (
    <Router>
      <Box className="App">
        <Header />
      </Box>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
