import React, { FC, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { useHistory } from "react-router-dom";
import { ArtsView, Arts } from "../views/ArtsView";
import { PageBase } from "../views/PageBase";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const getArts = async (): Promise<Arts> => {
  const res = await fetch("http://127.0.0.1:4000/arts");
  const data = await res.json();
  return data;
};

export const MainPage: FC = () => {
  const history = useHistory();
  const classes = useStyles();

  const [arts, setArts] = useState<Arts>();

  useEffect(() => {
    getArts().then(setArts);
  }, []);

  return (
    <PageBase hideBackButton>
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
    </PageBase>
  );
};
