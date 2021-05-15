import {Link, Router} from "react-router-dom";
import React from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography,makeStyles, Button } from "@material-ui/core";
import 'fontsource-roboto';
import ApartmentIcon from '@material-ui/icons/Apartment';
const useStyles= makeStyles (theme=>({
    offset: theme.mixins.toolbar,
    
    appBar: {
        marginLeft:240,
    },
    button: {
      color: 'white'
    }
}
))

const Navbar = () => {
    const classes = useStyles()
    return (  
        <nav className = "Navbar">
           
                <AppBar className={classes.appBar}>
                    <Toolbar>
                      <ApartmentIcon></ApartmentIcon>
                        <Typography variant = 'h5' className={classes.title}>
                          Domus Inmoviliaria
                        </Typography>
                        <div className= "links">
                
                        <Link to="/">
                          <Button className={classes.button}>Inicio</Button>
                        </Link>
                        <Link to="/catalogo">
                          <Button className={classes.button}>Catalogo</Button>
                        </Link>
                        <Link to="/contacto">
                          <Button className={classes.button}>Contacto</Button>
                        </Link>
                        </div>
                    
                    </Toolbar>
                </AppBar>
         
            
        </nav>
    );
}
 
export default Navbar;