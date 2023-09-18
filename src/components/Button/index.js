import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ThemeProvider,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  createTheme,
} from "@mui/material";
import React, { useState } from "react";

// Material ui Icons
import AdbIcon from "@mui/icons-material/Adb";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

// Mui orqali color tanlash:

let theme = createTheme({
  palette: {
    primary: {
      main: "#0F1924",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
});

theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
});

const ButtonMaterial = () => {
  const [formats, setFormats] = useState([]);
  console.log(formats);
  const handleFormatChange = () => {
    setFormats(formats);
  };
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={4}>
        <Stack spacing={4} direction={"row"}>
          <Button color="error" variant="contained">
            click me
          </Button>
          <Button variant="contained">click me</Button>
          <Button variant="contained">click me</Button>
        </Stack>

        <Stack
          alignItems={"center"}
          spacing={4}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Button size="small" variant="contained">
            Click Me!
          </Button>
          <Button size="medium" variant="contained">
            {/* default large*/}
            Click Me!
          </Button>
          <Button size="large" variant="contained">
            Click Me!
          </Button>
          <Button variant="contained">Click Me!</Button>
          <Button
            size="large"
            variant="contained"
            endIcon={<AdbIcon />}
            disableRipple
          >
            {/*faqat shadow qoladi*/}
            Click Me!
          </Button>
          <Button variant="contained" startIcon={<AdbIcon />} disableElevation>
            {/*shadowni olib tashlaydi*/}
            Me!
          </Button>
        </Stack>

        <Stack spacing={2} direction={"row"}>
          <IconButton aria-label="send" color="error" size="large">
            <AdbIcon />
          </IconButton>
        </Stack>
      </Stack>

      <Typography variant="h2">Button Group</Typography>

      <Stack spacing={3} direction="row">
        <ButtonGroup
          variant="outlined"
          orientation="vertical"
          aria-label="alignment button group"
        >
          <Button>Left</Button>
          <Button>center</Button>
          <Button>Reght</Button>
        </ButtonGroup>
      </Stack>

      <Typography variant="h4">Toggle Button</Typography>

      <Stack spacing={3} direction={"row"}>
        <ToggleButtonGroup
          value={formats}
          onChange={handleFormatChange}
          aria-label="text formatting"
          exclusive // typscirpt organib keyin koramiz
        >
          <ToggleButton value={"bold"}>
            <FormatBoldIcon />
          </ToggleButton>

          <ToggleButton value={"italic"}>
            <FormatItalicIcon />
          </ToggleButton>

          <ToggleButton value="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </ThemeProvider>
  );
};

export default ButtonMaterial;
