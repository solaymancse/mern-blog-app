import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export const SinglePost = ({item}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="140"
      image={item.imageFileSet}
      alt={item.title}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        <Link to={`/posts/${item.id}`}>
        {item.title}
        </Link>
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {item.body}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  )
}
