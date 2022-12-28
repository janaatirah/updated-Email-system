import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(fName, lname, email, user) {
  return { fName, lname, email, user };
}

const rows = [
  createData('iyman', 'wani', 'iymanwani07@gmail.com', 'iyman'),
  createData('aatirah', 'jan', 'iymanwan@gmail.com', 'atirah'),
  createData('minha', 'wani', 'iyman07@gmail.com', 'minha'),
  createData('Abrar', 'ahmad', 'iymani07@gmail.com', 'Abstract'),
  createData('ishrat', 'jan', 'iymani07@gmail.com', 'ishrat'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">FirstName</TableCell>
            <TableCell align="right">LastName</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Username</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.lname}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell align="right">{row.fName}</TableCell>
              <TableCell align="right">{row.lname}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.user}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}