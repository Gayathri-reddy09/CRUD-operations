import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUser } from '../userSlice';
import { Table, TableBody, TableContainer, TableHead, TableRow, Paper, Button, TableCell, CircularProgress } from '@mui/material';
import User from './User';

const Home = () => {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAddUser = () => {
    dispatch(addUser({ name: 'New User', email: 'newuser@example.com' }));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ width: '80%' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Users List</h1>
        <Button variant="contained" onClick={handleAddUser} style={{ marginBottom: '20px' }}>Add User</Button>
        {status === 'loading' && <CircularProgress />}
        {status === 'failed' && <div>Error: {error}</div>}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <User key={user.id} user={user} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Home;
