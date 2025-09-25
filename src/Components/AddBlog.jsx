import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'

const AddBlog = () => {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    body: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/blogs`, formData);
      alert('Blog added!');
      setFormData({ id: '', title: '', body: '' });
    } catch (err) {
      alert('Failed to add blog');
      console.error(err);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <form onSubmit={handleSubmit}>
        <TextField 
          name="id"
          variant='outlined' 
          label='ID' 
          value={formData.id}
          onChange={handleChange}
        /> <br /> <br />
        <TextField 
          name="title"
          variant='outlined' 
          label='Title' 
          value={formData.title}
          onChange={handleChange}
        /> <br /> <br />
        <TextField 
          name="body"
          variant='outlined' 
          label='Body' 
          value={formData.body}
          onChange={handleChange}
        /> <br /><br />
        <Button type="submit" variant='contained'>Submit</Button>
      </form>
    </div>
  )
}

export default AddBlog
