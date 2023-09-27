import { Face } from "@mui/icons-material";
import { Avatar, Chip, Stack } from "@mui/material";
import React, { useState } from "react";

const MuiChip = () => {
  const [chips, setChips] = useState(["Chip-1", "Chip-2", "Chip-3"]);

  const handleDelete = (chipToDelete) => {
    setChips(chips.filter((chip) => chip !== chipToDelete));
  };

  return (
    <Stack direction={"row"} spacing={3}>
      <Chip label={"Chip"} color={"primary"} size="small" icon={<Face />} />
      <Chip
        label={"Chip out"}
        color={"primary"}
        size="small"
        variant="outlined"
        avatar={<Avatar>A</Avatar>}
      />
      <Chip
        sx={{ marginTop: 20 }}
        onClick={() => alert("Hello world")}
        label={"Click"}
        color={"success"}
        size="small"
        variant="outlined"
        avatar={<Avatar>A</Avatar>}
      />
      <Chip
        label="Delete"
        color="error"
        onDelete={() => alert("Delete handler")}
      />
      {chips.map((chip) => (
        <Chip
          color={"warning"}
          key={chip}
          label={chip}
          onDelete={() => handleDelete(chip)}
        />
      ))}
    </Stack>
  );
};

export default MuiChip;
