import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const MuiAccordion = () => {
  const [expended, setExpended] = useState(false);
  console.log(expended);
  const handleChange = (isExpended, label) => {
    setExpended(isExpended ? label : false);
  };
  return (
    <div>
      <Accordion
        expanded={expended === "panel1"}
        onChange={(event, isExpended) => handleChange(isExpended, "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            ex sit architecto nobis in velit consectetur ad dolore pariatur
            officiis odit, vitae, ut perferendis! Architecto et praesentium
            quaerat ex harum.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expended === "panel2"}
        onChange={(_, isExpended) => handleChange(isExpended, "panel2")}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            ex sit architecto nobis in velit consectetur ad dolore pariatur
            officiis odit, vitae, ut perferendis! Architecto et praesentium
            quaerat ex harum.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expended === "panel3"}
        onChange={(_, isExpended) => handleChange(isExpended, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            ex sit architecto nobis in velit consectetur ad dolore pariatur
            officiis odit, vitae, ut perferendis! Architecto et praesentium
            quaerat ex harum.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MuiAccordion;
