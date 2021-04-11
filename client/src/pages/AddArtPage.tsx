import React, { FC, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { pickRandom } from "../utils/pick-random";
import { Art } from "../types/art";
import { PageBase, quotes } from "../views/PageBase";

export const AddArtPage: FC = () => {
  const history = useHistory();

  const [quote] = useState(pickRandom(quotes));

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");

  const addArt = async () => {
    const art: Art = { name, author, image };

    await fetch("http://127.0.0.1:4000/arts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(art),
    });

    history.push("/arts");
  };

  return (
    <PageBase subTitle={quote}>
      <Grid container spacing={4}>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Author"
          variant="outlined"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <TextField
          label="Link"
          variant="outlined"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Button variant="contained" onClick={addArt}>
          Create
        </Button>
      </Grid>
    </PageBase>
  );
};
