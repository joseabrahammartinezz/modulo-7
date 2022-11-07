import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from './logo.svg';
import './App.css';
import { emails, Modal } from './components/Modal/Modal';
import { CustomDrawer } from './components/Drawer/CustomDrawer';

function App() {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>TRABAJO FINAL REACT JS</p>
        <p>JOSE ABRAHAM MARTINEZ SOLIZ</p>
       
        <div>
          <Typography variant="subtitle1" component="div">
            Seleccionado: {selectedValue}
          </Typography>
          <br />
          <Button variant="outlined" onClick={handleClickOpen}>
            Open simple dialog
          </Button>
          <Modal
            selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
          />
        </div>
        <CustomDrawer />
      </header>
    </div>
  );
}

export default App;
