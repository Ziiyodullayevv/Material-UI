import { createTheme } from "@mui/material";

export const theme = createTheme();
theme.typography.poster = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "1.2rem",
    color: "red",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "6rem",
    color: "red",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "6rem",
    color: "yellow",
  },
};

theme.typography.h1 = {
  [theme.breakpoints.up("lg")]: {
    fontSize: "6rem",
    fontFamily: "Arial, sans-serif",
    color: "red",
  },
};

theme.typography.h2 = {
  [theme.breakpoints.up("lg")]: {
    fontSize: "6rem",
    fontFamily: "Arial, sans-serif",
    color: "red",
  },
};
