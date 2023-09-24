import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Switch,
} from "@mui/material";
import React, { useState } from "react";

const label = { inputProps: { "aria-label": "Switch demo" } };

const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);

  const handleSwitch = (event) => {
    setChecked(event.target.checked);
  };

  //------------------------------

  const [state, setState] = useState({
    gilad: true,
    jason: false,
    antoine: true,
  });

  console.log(state);

  const handleSwitchChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
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

      <FormGroup row>
        <FormControlLabel control={<Switch defaultChecked />} label="Label" />
        <FormControlLabel required control={<Switch />} label="Required" />
        <FormControlLabel disabled control={<Switch />} label="Disabled" />
      </FormGroup>

      <FormControl component="fieldset" variant="standard">
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={state.gilad}
                onChange={handleSwitchChange}
                name="gilad"
              />
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.jason}
                onChange={handleSwitchChange}
                name="jason"
              />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.antoine}
                onChange={handleSwitchChange}
                name="antoine"
              />
            }
            label="Antoine Llorca"
          />

          <FormControlLabel
            control={
              <Switch
                checked={state.antoine}
                onChange={handleSwitchChange}
                name="antoine"
              />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
    </div>
  );
};

export default MuiSwitch;
