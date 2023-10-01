import React from "react";
import "./style.css";

// Material-ui
import { ThemeProvider, Typography } from "@mui/material";
import { theme } from "../MuiTypography/index";

const MuiTypography = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="poster">Hello world!</Typography>
      <Typography variant="h1">Hello world!</Typography>
      <Typography variant="h3">Hello world!</Typography>
      <Typography variant="h4">Hello world!</Typography>
      <Typography variant="h5">Hello world!</Typography>
      <Typography variant="h6">Hello world!</Typography>
      <div>----------------------------------</div>
      <Typography variant="subtitle1">Hello world!</Typography>
      <Typography variant="subtitle2">Hello world!</Typography>
      <div>-----------------------------------</div>
      <Typography variant="body1">
        {/*normal text p*/}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error tempora
        temporibus quam repudiandae nisi quidem similique enim dolor rem ratione
        labore, odio ad dignissimos saepe ipsum et magnam officiis! Nam quasi
        dolorum, nesciunt dignissimos eum sed magnam iusto assumenda quo. Quia
        cumque omnis laboriosam a molestias minus minima beatae ratione!
      </Typography>
      <br />
      {/*small text p*/}
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe laborum
        deserunt sit, obcaecati at ratione dolor tempore atque ullam mollitia
        placeat quia quidem veniam in necessitatibus consectetur rerum maiores
        sed ad explicabo minima unde hic exercitationem inventore? Repudiandae
        eius cupiditate ipsa! Omnis excepturi minima explicabo laborum
        perferendis quasi itaque laudantium.
      </Typography>

      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe laborum
        deserunt sit, obcaecati at ratione dolor tempore atque ullam mollitia
        placeat quia quidem veniam in necessitatibus consectetur rerum maiores
        sed ad explicabo minima unde hic exercitationem inventore? Repudiandae
        eius cupiditate ipsa! Omnis excepturi minima explicabo laborum
        perferendis quasi itaque laudantium.
      </Typography>

      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe laborum
        deserunt sit, obcaecati at ratione dolor tempore atque ullam mollitia
        placeat quia quidem veniam in necessitatibus consectetur rerum maiores
        sed ad explicabo minima unde hic exercitationem inventore? Repudiandae
        eius cupiditate ipsa! Omnis excepturi minima explicabo laborum
        perferendis quasi itaque laudantium.
      </Typography>
    </ThemeProvider>
  );
};

export default MuiTypography;
