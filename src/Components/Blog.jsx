import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/blogs')
      .then(res => {
        setBlogs(res.data);
      })
      .catch(err => {
        console.error("Error fetching blogs", err);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      {blogs.map((blog) => (
        <Card key={blog._id} style={{ marginBottom: '20px' }}>
          <CardContent>
            <Typography variant="h6">ID: {blog.id}</Typography>
            <Typography variant="h5">Title: {blog.title}</Typography>
            <Typography variant="body1">Body: {blog.body}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Blog;
