import { makeStyles } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import Delete from "@material-ui/icons/Delete";
import React, { FC, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Art } from "../types/art";
import { PageBase } from "../views/PageBase";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const getArtInfo = async (id: string): Promise<Art> => {
  const res = await fetch(`http://127.0.0.1:4000/arts/${id}`);
  const data = await res.json();
  return data as Art;
};

const deleteArtById = async (id: string) => {
  await fetch(`http://127.0.0.1:4000/arts/${id}`, {
    method: "DELETE",
  });
};

export const ArtPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const classes = useStyles();

  const [artInfo, setArtInfo] = useState<Art>();

  useEffect(() => {
    getArtInfo(id).then(setArtInfo);
  }, [id]);

  const deleteArt = async () => {
    await deleteArtById(id);
    history.goBack();
  };

  if (!artInfo) {
    return <PageBase>Loading...</PageBase>;
  }

  return (
    <PageBase title={artInfo.name} subTitle={`by ${artInfo.author}`}>
      <Grid container justify="center">
        <Grid item>
          <img src={artInfo.image} alt={artInfo.name} />
        </Grid>
      </Grid>
      <Fab
        className={classes.fab}
        color="primary"
        aria-label="add"
        onClick={deleteArt}
      >
        <Delete />
      </Fab>
    </PageBase>
  );
};
