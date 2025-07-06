import { Button, TextField } from '@mui/material'
import React from 'react'

const AddBlog = () => {
  return (
    <div style={{textAlign:'center'}}>
        <TextField variant='outlined' label='ID'/> <br /> <br />
        <TextField variant='outlined' label='Title'></TextField> <br /> <br />
        <TextField variant='outlined' label='Body'></TextField> <br /><br />
        <Button variant='contained'>Submit</Button>

    </div>
  )
}

export default AddBlog