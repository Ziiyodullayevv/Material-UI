import { Grid, Paper, Skeleton, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

const MuiSkeleton = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <React.Fragment>
      <Stack sx={{ textAlign: "center" }} m={5} spacing={1} width={"250px"}>
        <Skeleton variant="text" />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton
          variant="rectangular"
          width={250}
          height={125}
          animation={"pulse"}
        />
      </Stack>

      <Grid className="container" container>
        {loading ? (
          // Skeletonning chiqarish qismi
          <React.Fragment>
            {Array.from({ length: 20 }).map((_, index) => (
              <Grid key={index} xs={3}>
                <Paper sx={{ margin: "10px", padding: "20px", height: 300 }}>
                  <Skeleton variant="rectangular" height={"80px"} />
                  <Skeleton sx={{ marginTop: "20px" }} variant="text" />
                  <Skeleton variant="text" width="80%" />
                  <Skeleton variant="text" width="60%" />
                </Paper>
              </Grid>
            ))}
          </React.Fragment>
        ) : (
          // Backenddan kelgan malumotlarni chiqarish qismi
          data &&
          data.map((post) => (
            <Grid item key={post.id} xs={3}>
              <Paper sx={{ margin: "10px", padding: "20px", height: 300 }}>
                <Typography>{post.title.slice(0, 50)}</Typography>
                <Typography>{post.body.slice(0, 100)}</Typography>
              </Paper>
            </Grid>
          ))
        )}
      </Grid>
    </React.Fragment>
  );
};

export default MuiSkeleton;
