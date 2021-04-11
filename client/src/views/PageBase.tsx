import React, { FC } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import ArrowBack from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";
import { Copyright } from "./Copyright";
import { pickRandom } from "../utils/pick-random";

export const quotes = [
  "“Energy and motion made visible – memories arrested in space” ― Jackson Pollock",
  "“Art should look like art, trees and flowers and people, not weird shapes and splotches of color all smeared together.” ― Jennifer Estep, Deadly Sting",
  "“Art has a voice - let it speak.” ― Rochelle Carr",
  "“Before, I could only guess of who I was. Now, thanks to my art, I know who I am” ― Luhraw",
  "“Life is an abstract art, and it’s up to you to make sense of it.” ― Talismanist Giebra, Talismanist: Fragments of the Ancient Fire. Philosophy of Fragmentism Series.",
];

const useStyles = makeStyles((theme) => ({
  title: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 4),
  },
  content: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  backButton: {
    marginRight: theme.spacing(2),
  },
}));

type PageBaseProps = {
  title?: string;
  subTitle?: string;
  hideBackButton?: true;
};

export const PageBase: FC<PageBaseProps> = ({
  title = "Abstract art gallery",
  subTitle = pickRandom(quotes),
  hideBackButton = false,
  children,
}) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          {hideBackButton ? (
            false
          ) : (
            <IconButton
              className={classes.backButton}
              edge="start"
              color="inherit"
              aria-label="back"
              onClick={() => history.goBack()}
            >
              <ArrowBack />
            </IconButton>
          )}
          <Typography variant="h6" color="inherit" noWrap>
            Abstract art gallery
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.title}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              {subTitle}
            </Typography>
          </Container>
        </div>
        <Container className={classes.content} maxWidth="md">
          {children ?? false}
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
