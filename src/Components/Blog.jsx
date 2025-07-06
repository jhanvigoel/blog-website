import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Blog = () => {

   var [blog,setBlog] = useState([])

   axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{

    setBlog(res.data)
    //console.log(res.data)
    console.log(blog)
  })

  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Body</TableCell>
                    </TableRow>
                    
                </TableHead>
                <TableBody>
                    {blog.map((val)=>{
                        return(
                        <TableRow>
                            <TableCell>{val.id}</TableCell>
                            <TableCell>{val.title}</TableCell>
                            <TableCell>{val.body}</TableCell>
                        </TableRow>
                        )
                    })}
                   
                </TableBody>
            </Table>

        </TableContainer>
        <br /><br />

    </div>
  )
}

export default Blog