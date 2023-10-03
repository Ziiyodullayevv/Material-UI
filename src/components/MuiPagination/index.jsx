import {
  Box,
  Grid,
  Pagination,
  PaginationItem,
  Paper,
  Stack,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const MuiPagination = () => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  console.log({ page, posts });

  const loadPosts = async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}`
    );
    setPosts(res?.data);
  };

  useEffect(() => {
    loadPosts();
  }, [page]);

  return (
    <Stack>
      <Grid container spacing={2}>
        {posts?.map((value) => (
          <Grid key={value.id} item xs={3}>
            <Paper
              sx={{
                borderRadius: "10px",
                height: "200px",
                padding: "20px",
                bgcolor: "whitesmoke",
              }}
            >
              {value.id}. {value.title}
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Box
        component={"div"}
        sx={{ display: "flex", justifyContent: "center", margin: "20px" }}
        spacing={2}
      >
        <Pagination
          color={"secondary"}
          count={10}
          page={page}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBack, next: ArrowForward }}
              {...item}
            />
          )}
          onChange={(event, page) => setPage(page)}
        />
      </Box>
    </Stack>
  );
};

export default MuiPagination;
