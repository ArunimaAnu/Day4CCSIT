import { Typography, TextField, Button } from '@mui/material'
import React, { useState } from 'react'


const Addemp = () => {
     var [ename, setEname] = useState()
     const takeInput = (e) => {
         setEname(e.target.value)
     }
  return (
    <div>
          <Typography variant='h4' component="div">Add Employee&nbsp;{ename}</Typography><br />
          <TextField variant='outlined' label='Emplpyee Name' ></TextField><br /><br />
          <TextField variant='outlined' label='Emplpyee Age' ></TextField><br /><br />
          <TextField variant='outlined' label='Department' ></TextField><br /><br />
          <TextField variant='outlined' label='Salary ' ></TextField><br /><br />
          <Button variant="contained" onClick={takeInput}>Add</Button>
    </div>
  )
}

export default Addemp
