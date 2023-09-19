import { Switch } from "@mui/material";
import React, { useState } from "react";

const label = { inputProps: { "aria-label": "Switch demo" } };

const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  console.log({ checked });

  const handleSwitch = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Switch {...label} defaultChecked />
      <Switch
        {...label}
        checked={checked}
        size="small"
        color="success"
        onChange={handleSwitch}
      />
      <Switch {...label} disabled defaultChecked />
      <Switch {...label} disabled />
    </div>
  );
};

export default MuiSwitch;
