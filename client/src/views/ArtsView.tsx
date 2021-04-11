/* eslint-disable no-underscore-dangle */
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { ArtWithId } from "../types/art";

export type ArtsState =
  | { type: "loading" }
  | { type: "ready"; data: ArtWithId[] };

const useStyles = makeStyles(() => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
    "&:last-child": {
      paddingBottom: 16,
    },
  },
}));

export type ArtsViewProps = { arts: ArtsState };

export const ArtsView: FC<ArtsViewProps> = ({ arts }) => {
  const classes = useStyles();
  const history = useHistory();

  if (arts.type === "loading") {
    return <p> Loading... </p>;
  }

  if (arts.data.length === 0) {
    return <p> Oops, so empty </p>;
  }

  return (
    <>
      {arts.data.map((art) => (
        <Grid item key={art._id} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={art.image}
              title="Image title"
              onClick={() => history.push(`/arts/${art._id}`)}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {art.name}
              </Typography>
              <Typography>by {art.author}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
};
