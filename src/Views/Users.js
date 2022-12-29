import * as React from 'react';
import userDialoug from './userDialoug'
import {Table, TableBody, TableCell, TableContainer, TableHead,TableRow, Paper }from '@mui/material';

const rows = [
  { fName: 'iyman', lname: 'wani', email: 'iymanwani07@gmail.com', user:'iyman' },
  { fName: 'ishrat', lname: 'jan', email: 'ishrat@gmail.com', user:'ishrat' },
  { fName: 'minha', lname: 'wani', email: 'minhawani@gmail.com', user:'minha' },
  { fName: 'aatirah', lname: 'jan', email: 'jaanaatirah@gmail.com', user:'aatirah' },
  { fName: 'mabia', lname: 'wani', email: 'mabiawani@gmail.com', user:'mabia' }
  
];

export default function BasicTable() {
   const addUser =()=>{
    alert ("user added successfully")
   }
  return (
    <TableContainer component={Paper} sx= {{height: 600}}>
      <button onClick={addUser}>Add new</button>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">FirstName</TableCell>
            <TableCell align="left">LastName</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Username</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.lname}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell align="left">{row.fName}</TableCell>
              <TableCell align="left">{row.lname}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.user}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}