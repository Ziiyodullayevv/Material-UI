import { CopyAll, Edit, PrintRounded, Share } from "@mui/icons-material";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import React from "react";

const MuiSpeedDail = () => {
  return (
    <SpeedDial
      color={"info"}
      ariaLabel="Navigation speed dail"
      sx={{
        position: "absolute",
        bottom: 16,
        right: 16,
      }}
      icon={<SpeedDialIcon openIcon={<Edit />} />}
    >
      <SpeedDialAction icon={<CopyAll />} tooltipTitle={"Copy"} />
      <SpeedDialAction
        icon={<PrintRounded />}
        tooltipTitle={"Print"}
        tooltipOpen
      />
      <SpeedDialAction icon={<Share />} tooltipTitle={"Share"} tooltipOpen />
      <SpeedDialAction icon={<Share />} tooltipTitle={"Share"} tooltipOpen />
      <SpeedDialAction icon={<Share />} tooltipTitle={"Share"} tooltipOpen />
    </SpeedDial>
  );
};

export default MuiSpeedDail;
