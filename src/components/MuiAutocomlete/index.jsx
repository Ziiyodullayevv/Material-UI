import { Autocomplete, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const skills = ["Html", "Css", "JavaScript", "TypeScript", "React"];

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

const MuiAutoComplate = () => {
  const [value, setValue] = useState(null);
  const [skill, setSkill] = useState(null);
  console.log(skill?.label);

  return (
    <Stack spacing={2} width={300}>
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        freeSolo // qidirilayotgan malumot mavjud bolmasa ham newValue ga biriktirib borderRadius:
      />

      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={(event, newValue) => {
          setSkill(newValue);
        }}
      />
    </Stack>
  );
};

export default MuiAutoComplate;
