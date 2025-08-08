import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <AppBar sx={{ flexGrow: 1 }}>
            <Toolbar >
                <Typography variant='h4'  sx={{ flexGrow: 1 }}>BlogApp</Typography>

                <Link to={'/'}> <Button variant='contained' style={{backgroundColor:'black'}}>Products</Button></Link> &nbsp;&nbsp;
                <Link to={'/AddBlog'}> <Button variant='contained' style={{backgroundColor:'black'}}>Add</Button></Link> &nbsp;&nbsp;
                <Link to={'/Blog'}><Button variant='contained' style={{backgroundColor:'black'}}>View Posts</Button></Link>

               
            </Toolbar>
        </AppBar>
        <br /><br /><br />

    </div>
  )
}

export default Nav