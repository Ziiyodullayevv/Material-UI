import { Avatar, AvatarGroup, Stack } from "@mui/material";
import React from "react";

const MuiAvatar = () => {
  return (
    <Stack direction={"row"}>
      <Avatar sx={{ bgcolor: "primary.light" }}>BM</Avatar>
      <Avatar sx={{ bgcolor: "success.light" }}>BL</Avatar>
      <Avatar src={"https://randomuser.me/api/portraits/women/79.jpg"}></Avatar>

      <Stack spacing={"row"}>
        <AvatarGroup max={3}>
          <Avatar
            src={"https://randomuser.me/api/portraits/women/79.jpg"}
          ></Avatar>
          <Avatar
            src={"https://randomuser.me/api/portraits/women/79.jpg"}
          ></Avatar>
          <Avatar
            src={"https://randomuser.me/api/portraits/women/79.jpg"}
          ></Avatar>
          <Avatar
            src={"https://randomuser.me/api/portraits/women/79.jpg"}
          ></Avatar>
        </AvatarGroup>
      </Stack>
    </Stack>
  );
};

export default MuiAvatar;
