import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_API_URL}/api/blogs`;
    console.log('Attempting to fetch from:', apiUrl);
    
    axios.get(apiUrl)
      .then(res => {
        console.log('Success:', res.data);
        setBlogs(res.data);
      })
      .catch(err => {
        console.error("Error fetching blogs", err);
        console.error("Full error details:", {
          message: err.message,
          status: err.response?.status,
          statusText: err.response?.statusText,
          data: err.response?.data,
          url: err.config?.url
        });
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
