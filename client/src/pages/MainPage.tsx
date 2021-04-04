/* eslint-disable no-underscore-dangle */
import React, { FC, useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { useHistory } from "react-router-dom";
import { pickRandom } from "../utils/pick-random";
import ArtsView, { ArtsState } from "../views/ArtsView";

const quotes = [
  "“Energy and motion made visible – memories arrested in space” ― Jackson Pollock",
  "“Art should look like art, trees and flowers and people, not weird shapes and splotches of color all smeared together.” ― Jennifer Estep, Deadly Sting",
  "“Art has a voice - let it speak.” ― Rochelle Carr",
  "“Before, I could only guess of who I was. Now, thanks to my art, I know who I am” ― Luhraw",
  "“Life is an abstract art, and it’s up to you to make sense of it.” ― Talismanist Giebra, Talismanist: Fragments of the Ancient Fire. Philosophy of Fragmentism Series.",
];

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/glebbash">
        Glebbash
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const MainPage: FC = () => {
  const history = useHistory();
  const classes = useStyles();

  const [arts, setArts] = useState<ArtsState>({ type: "loading" });

  const getArts = async () => {
    const res = await fetch("http://127.0.0.1:4000/arts");
    const data = await res.json();
    setArts({ type: "ready", data });
  };

  useEffect(() => {
    getArts();
  }, []);

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Abstract art gallery
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Abstract art gallery
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              {pickRandom(quotes)}
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            <ArtsView arts={arts} />
          </Grid>
          <Fab
            className={classes.fab}
            color="primary"
            aria-label="add"
            onClick={() => history.push("/arts/create")}
          >
            <AddIcon />
          </Fab>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Abstract art gallery
        </Typography>
        <Copyright />
      </footer>
    </>
  );
};

export default MainPage;
