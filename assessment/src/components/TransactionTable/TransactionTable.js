import React from 'react';
import { createRandomUser } from '../../mocks/transactions';
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const data = [
  createRandomUser(),
  createRandomUser(),
  createRandomUser(),
  createRandomUser(),
  createRandomUser(),
  createRandomUser(),
  createRandomUser(),
  createRandomUser(),
  createRandomUser(),
  createRandomUser(),
  createRandomUser(),
  createRandomUser(),
  createRandomUser(),
  createRandomUser(),
  createRandomUser(),
  createRandomUser(),
  createRandomUser(),
  createRandomUser(),
]

const TransactionTable = () => {

  return (
    <div className="transactionTable">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Customer Name</TableCell>
              <TableCell align="right">Order Date</TableCell>
              <TableCell align="right">Order Total</TableCell>
              <TableCell align="right">Order Rewards</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{row.firstName} {row.lastName}</TableCell>
                <TableCell align="right">{row.transactions[0].orderDate.toDateString()}</TableCell>
                <TableCell align="right">{row.transactions[0].orderTotal}</TableCell>
                <TableCell align="right">{row.transactions[0].orderRewards}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>    
    </div>
  );
}

export default TransactionTable;
