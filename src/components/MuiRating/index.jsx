import { Rating, Stack } from "@mui/material";
import React, { useState } from "react";

const MuiRating = () => {
  const [value, setValue] = useState(3);
  console.log({ value });

  const handleChange = (event) => {
    setValue(Number(event.target.value));
  };
  return (
    <div>
      <Stack spacing={1}>
        <Rating
          name="half-rating"
          defaultValue={3}
          value={value}
          onChange={handleChange}
          precision={1}
        />
        <Rating
          name="half-rating-read"
          defaultValue={2.5}
          precision={0.5}
          readOnly
        />

        <Rating
          name="half-rating-read"
          defaultValue={2.5}
          precision={0.5}
          readOnly
        />

        <Rating
          name="half-rating-read"
          defaultValue={2.5}
          precision={0.5}
          readOnly
        />
      </Stack>
    </div>
  );
};

export default MuiRating;
