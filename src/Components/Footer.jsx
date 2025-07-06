import { Box } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div>
         <Box style={{  backgroundColor:"black",
                        position:"fixed",
                        padding:"1px",
                        bottom:"0px",
                        left:"0px",
                        right:"0px"
                        }}>
            
            
                  
                <h6
                style={{
                    color: "white",
                    textAlign: "center",
                    marginTop: "10px"
                }}
            >
               All rights reserved &copy; 2025
            </h6>
                    
                
        </Box>

    </div>
  )
}

export default Footer