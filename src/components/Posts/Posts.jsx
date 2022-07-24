import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Container, Grid } from "@mui/material";
import { SinglePost } from "./Post/SinglePost";
import { GetAllPosts } from "./../../HttpServices/Posts";


export const Posts = () => {
  const [postData, setPostData] = useState([]);

  const GetAllPostRequest = () =>
    GetAllPosts()
      .then(({data}) => {
        console.log(data);
        setPostData(data)})
      .catch((err) => console.log(err));

  useEffect(() => {
    GetAllPostRequest();
  }, []);

  return (
    <Container>
      <Grid container>
        {postData.length ? (
          postData.map((item, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <SinglePost item={item} />
            </Grid>
          ))
        ): (
          <Box
          p={5}
          mt={5}
          display='flex'
          justifyContent='center'
          alignItems='center' 
          >
            <CircularProgress/>
          </Box>
        )
        }
      </Grid>
    </Container>
  );
};
