import React, { FC } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ArtPage from "./pages/ArtPage";
import AddArtPage from "./pages/AddArtPage";

const App: FC = () => {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route exact path="/arts" component={MainPage} />
          <Route path="/arts/create" component={AddArtPage} />
          <Route path="/arts/:id" component={ArtPage} />
          <Redirect to="/arts" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
