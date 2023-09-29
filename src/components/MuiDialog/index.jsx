import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";

const MuiDialog = () => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <Button onClick={() => setOpen(true)}>Open Dealog</Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="dialog-titlte"
      >
        <DialogTitle id={"dialog-title"}>Submit the test?</DialogTitle>
        <DialogContent
          id="dialog-description"
          aria-describedby="dialog-description"
        >
          <DialogContentText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            praesentium eaque, commodi distinctio repellendus modi iure ab
            officiis ea quas.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default MuiDialog;
