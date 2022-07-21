import React from "react";
import {
  Card,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemSecondaryAction,
  IconButton,
  CardContent,
} from "@mui/material";
import { Grid } from "@mui/material";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { GetPostDetailsById } from "../../../HttpServices/Posts";
import { AiOutlineMore } from "react-icons/ai";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { DialogComponents } from "../../Common/DialogComponents";

export const SinglePostDetails = () => {
  const [postData, setPostData] = useState({});
  const [data, setData] = useState({});
  const [dialogOpen, setDialogOpen] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    GetPostDetailsById({ id }).then(({ data }) => setData(data));
    console.log("data", data);
  }, []);

  // menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <Container maxWidth="lg">
      <DialogComponents />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to={`/posts/edit/${id}`}>Edit</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to={`/posts/delete/${id}`}>Delete</Link>
        </MenuItem>
      </Menu>
      <Grid container>
        {!Object.keys(data).length ? (
          <Grid></Grid>
        ) : (
          <Grid item xs={12} sm={8}>
            <Card>
              <List>
                <ListItem>
                  <ListItemText>
                    <Typography variant="h6" color="textPrimary">
                      {data.title}
                    </Typography>
                  </ListItemText>
                  <ListItemSecondaryAction>
                    <IconButton onClick={handleClick}>
                      <AiOutlineMore />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
              <img src={data.imageFileSet} alt={data.title} />
              <CardContent>
                <Typography variant="h6" color="textSecondary">
                  {data.body}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};
