import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Viewemp = () => {
    var [user, setUser] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3004/view")
            .then((response) => {
                console.log(response.data)
                setUser(response.data)
            })
    }, [])
    const delValue = (id) => {
        axios.delete("http://localhost:3004/remove/" + id)
            .then((response) => {
                console.log(response.data.message)

            })
    }
        const upValue = (id) => {
            axios.delete("http://localhost:3004/update/" + id)
                .then((response) => {
                    console.log(response.data.message)

                })
        }
        return (
            <div>
                <Typography variant='h4' component="div">View Employee</Typography><br />
                <TableContainer>
                    <Table>
                        <TableHead>

                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Age</TableCell>
                                <TableCell>Department</TableCell>
                                <TableCell>Salary</TableCell>
                            </TableRow>

                        </TableHead>
                        <TableBody>
                            {user.map((val) => {
                                return (
                                    <TableRow>
                                        <TableCell>{val.Name}</TableCell>
                                        <TableCell>{val.Age}</TableCell>
                                        <TableCell>{val.Department}</TableCell>
                                        <TableCell>{val.Salary}</TableCell>
                                        <TableCell><Button size='small' variant='contained' onClick={() => {
                                            delValue(val._id)
                                        }}>Delete</Button></TableCell>
                                        <TableCell><Button size='small' variant='contained' onClick={() => {
                                            upValue(val._id)
                                        }}>Update</Button></TableCell>

                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }

export default Viewemp
