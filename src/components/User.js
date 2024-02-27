// User.js
import React, { useState } from 'react';
import { TableRow, TableCell, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteUser, updateUser } from '../userSlice';

const User = ({ user }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState({ name: user.name, email: user.email });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleUpdateUser = () => {
    dispatch(updateUser({ id: user.id, ...userData }));
    handleClose();
  };

  const handleDeleteUser = () => {
    dispatch(deleteUser(user.id));
  };

  return (
    <TableRow key={user.id} style={{ backgroundColor: '#f9f9f9' }}>
      <TableCell style={{ fontWeight: 'bold' }}>{user.name}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>
        <Button variant="contained" color="primary" style={{ marginRight: '8px' }}onClick={handleOpen}>Edit</Button>
        <Button variant="contained" color="secondary" onClick={handleDeleteUser} style={{ color: 'white', backgroundColor: 'maroon' }}>Delete</Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit User</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              name="name"
              value={userData.name}
              onChange={handleChange}
              style={{ marginBottom: '16px' }}
            />
            <TextField
              margin="dense"
              id="email"
              label="Email"
              type="email"
              fullWidth
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleUpdateUser} color="primary">Update</Button>
          </DialogActions>
        </Dialog>
      </TableCell>
    </TableRow>
  );
};

export default User;
