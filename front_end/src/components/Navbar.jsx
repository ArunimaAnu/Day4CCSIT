import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
          <AppBar>
              <Toolbar>
                  <Typography variant='h6' component="div" align='left' color="black" sx={{ flexGrow: 1 }}>My App</Typography>&nbsp;&nbsp;&nbsp;

                  <Link to='/a'>
                      <Button variant="contained">ADD</Button></Link>&nbsp;&nbsp;&nbsp;
                  <Link to='/v'>
                      <Button variant="contained">VIEW</Button></Link>&nbsp;&nbsp;&nbsp;
                  <Link to='/'>
                      <Button variant="contained">HOME</Button></Link>
                  

              </Toolbar>
          </AppBar>
          <br /><br /><br />
    </div>
  )
}

export default Navbar
