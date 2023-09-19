import { Bookmark, BookmarkBorder } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import React, { useState } from "react";

const MuiCheckbox = () => {
  const [acceptTc, setAcceptTc] = useState(false);
  const [skills, setSkills] = useState([]);
  console.log(skills);

  const handleChange = (event) => {
    console.log(event.target.value);
    setAcceptTc(event.target.checked);
  };

  //-------------------------------------------------

  const handleSkillsChange = (event) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      let skill = skills.filter((skill) => skill !== event.target.value);
      console.log(skill);
    }
  };

  const arr = "anor";
  console.log(arr);

  console.log(arr.indexOf("anor"));

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={<Checkbox checked={acceptTc} onClick={handleChange} />}
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorder />}
          checked={acceptTc}
          checkedIcon={<Bookmark />}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label={"HTML"}
              control={
                <Checkbox
                  value={"html"}
                  checked={skills.includes("html")}
                  onChange={handleSkillsChange}
                />
              }
            />

            <FormControlLabel
              label={"CSS"}
              value={"css"}
              control={
                <Checkbox
                  checked={skills.includes("css")}
                  onChange={handleSkillsChange}
                />
              }
            />

            <FormControlLabel
              label={"JavaScript"}
              value={"javascript"}
              control={
                <Checkbox
                  checked={skills.includes("javascript")}
                  onChange={handleSkillsChange}
                />
              }
            />
          </FormGroup>

          <FormLabel></FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Label"
            />
            <FormControlLabel
              required
              value={"javascript"}
              control={<Checkbox />}
              label="Required"
            />
            <FormControlLabel
              disabled={false}
              value={"css"}
              control={<Checkbox />}
              label="Disabled"
            />
            <FormControlLabel
              disabled={false}
              value={"reactjs"}
              control={<Checkbox />}
              label="Disabled"
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckbox;
