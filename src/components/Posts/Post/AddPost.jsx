import React, { useState } from "react";

import joi from "joi-browser";
import { Container, Grid, Box, Typography, Button } from "@mui/material";
import { TextInputField } from "./../../Common/TextInputField";
import { AddPosts } from "../../../HttpServices/Posts";
import FileBase64 from "react-file-base64";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AddPost = () => {
  const history = useNavigate();
  const [formValidationError, setFormValidationError] = useState("");
  const [state, setState] = useState({
    data: {
      title: "",
      imageFileSet: "",
      description: "",
    },
    errors: {},
  });
  const schema = {
    title: joi.string().required().label("Title").min(5),
    imageFileSet: joi.string().required().label("Image"),
    description: joi.string().required().label("Description"),
  };
  const handleChange = ({ target }) => {
    const { data, errors } = state;
    const { error } = joi.validate(data[target.name], schema[target.name], {
      abortEarly: true,
    });
    !error
      ? (errors[target.name] = "")
      : (errors[target.name] = error.details[0].message);
    data[target.name] = target.value;
    setState({ data, errors });
  };
  const validate = () => {
    let errorObj = {};
    let { error } = joi.validate(state.data, schema, { abortEarly: false });

    !error
      ? (errorObj = {})
      : error.details.map((item) => (errorObj[item.path] = item.message));
    return errorObj;
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    let errors = validate();
    let { data } = state;
    setState({ data, errors });

    if (Object.keys(errors).length === 0 && errors.constructor === Object) {
      ///app post request logic
      AddPosts({ data })
        .then(() => {
          console.log("Post Added Successfully");
          toast.success("Post Added Successfully");
          //reset Form
          setState({
            data: {
              title: "",
              imageFileSet: "",
              description: "",
            },
            errors: {},
          });
          //navigate to /posts
          history("/posts");
        })
        .catch((e) => {
          console.log("error", e);
          setFormValidationError(e.message);
        });
    }
  };
  return (
    <Container maxWidth="md">
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Box mt={2} mb={2}>
            <Typography variant="h6" color="primary" align="center">
              Add Blog Post
            </Typography>
            <Typography
              variant="subtitle2"
              color="error"
              align="center"
            > {formValidationError}</Typography>
          </Box>
          <form onSubmit={handleOnSubmit}>
            <Box mb={5}>
              <TextInputField
                state={state}
                name="title"
                onChange={handleChange}
              />
            </Box>
            <Box mb={5}>
              <FileBase64
                onDone={(e) => {
                  let { data, errors } = state;
                  data.imageFileSet = e.base64;
                  errors.imageFileSet = "";
                  setState({ data, errors });
                }}
              />
            </Box>
            <Box mb={5}>
              <TextInputField
                state={state}
                name="description"
                onChange={handleChange}
                multiline
                row={4}
              />
            </Box>
            <Box mt={2} mb={2}>
              <Button
                color="primary"
                variant="outlined"
                type="submit"
                fullWidth
              >
                Add Post
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};
