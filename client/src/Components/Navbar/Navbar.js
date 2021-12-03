import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {Link} from 'react-router-dom'
import TextField from '@mui/material/TextField';

import "./navbar.css";

const Navbar = () => {
  return (
    <>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
            
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Sauveteurs du Dunkerquois
             </Typography>

            {/* <TextField   style = {{width: "45%"}} id="outlined-basic" label="Chercher une personne" variant="outlined"/> */}

            <Link to='/'>
                    <Button color="inherit" style={{
                        borderRadius: 25,
                        backgroundColor: "#ffffff",
                        padding: "10px 10px",
                        fontSize: "18px"
                    }}>Accueil</Button>
            </Link>
            &nbsp;&nbsp;
            &nbsp;&nbsp;

            <Link to='/add'>
                    <Button color="inherit" style={{
                        borderRadius: 25,
                        backgroundColor: "#ffffff",
                        padding: "10px 10px",
                        fontSize: "18px"
                    }}>Ajouter du contenu</Button>
            </Link>
            &nbsp;&nbsp;
            &nbsp;&nbsp;
            <Link to='/admin'>
                    <Button color="inherit" style={{
                        borderRadius: 25,
                        backgroundColor: "#ffffff",
                        padding: "10px 10px",
                        fontSize: "18px"
                    }}>Administration</Button>
            </Link>
            
            </Toolbar>
        </AppBar>
        </Box>

                    {/* <div className="resultats-box">
                        <p>resultat 1 </p>
                        <p>resultat 2 </p>
                    </div> */}

    </>

  );
}

export default Navbar;