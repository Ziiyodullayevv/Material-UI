import { CatchingPokemon } from "@mui/icons-material";
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const MuiMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
            <Button color="inherit">Blog</Button>
            <Button color="inherit">Features</Button>
            <Button
              color="inherit"
              id="resources-button"
              onClick={handleClick}
              aria-controls={open ? "resource-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? true : undefined}
            >
              Resource
            </Button>
            <Button color="inherit">Features</Button>
          </Stack>
          <Menu
            anchorEl={anchorEl}
            id="resources-menu"
            open={open}
            MenuListProps={{
              "aria-labelledby": "resource-button",
            }}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Blog</MenuItem>
            <MenuItem onClick={handleClose}>Podcast</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MuiMenu;
