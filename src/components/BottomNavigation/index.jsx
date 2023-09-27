import { Favorite, Home, Person } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React, { useState } from "react";

const MuiBottomNavigation = () => {
  const [value, setValue] = useState(0);
  console.log(value);

  return (
    <BottomNavigation
      sx={{ width: "100%", position: "absolute", bottom: 0 }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      // showLabels
    >
      <BottomNavigationAction label="Home" icon={<Home />} />
      <BottomNavigationAction label="Home" icon={<Favorite />} />
      <BottomNavigationAction label="Home" icon={<Person />} />
    </BottomNavigation>
  );
};

export default MuiBottomNavigation;
