import { CatchingPokemon } from "@mui/icons-material";
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const MuiMenu = () => {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color={"inherit"}
            aria-label="logo"
          >
            <CatchingPokemon />
          </IconButton>
          <Typography variant="h6" component={"div"} sx={{ flexGrow: 1 }}>
            Pokeman
          </Typography>
          <Stack direction={"row"} spacing={2}>
            <Button color="inherit">Features</Button>
            <Button color="inherit">Features</Button>
            <Button color="inherit">Features</Button>
            <Button color="inherit">Features</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MuiMenu;
