import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Register from '../Auth/components/Register';
const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
        color: 'white',
    },
    title: {
        textDecoration: 'none',
        fontSize: '30px',
        color: 'white',
    },
    dialogTitle: {
        textAlign: 'center',
        fontWeight: 'bolder',
    },
});
export default function Header() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <NavLink className={classes.title} to="/">
                            Shop
                        </NavLink>
                    </Typography>

                    <NavLink className={classes.link} to="/todos">
                        <Button color="inherit">Todos</Button>
                    </NavLink>

                    <NavLink className={classes.link} to="/albums">
                        <Button color="inherit">Albums</Button>
                    </NavLink>
                    <NavLink className={classes.link} to="/color">
                        <Button color="inherit">Color</Button>
                    </NavLink>

                    <Button onClick={handleClickOpen} color="inherit">
                        Register
                    </Button>
                </Toolbar>
            </AppBar>

            <Dialog open={open} disableEscapeKeyDown onClose={handleClose}>
                <DialogTitle className={classes.dialogTitle}>Register</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Register />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
