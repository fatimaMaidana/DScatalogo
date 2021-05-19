import React from 'react';
import {Button, TextField, makeStyles, Grid} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
        width: 469,
    },
  }));


const Contacto = () => {
    const classes = useStyles();

    const [state, setState] = React.useState();

    const handleForm = (event) => {
        setState({ ...state, [event.target.id]: event.target.value });
    };

    return (
        <Grid
        container
        spacing={3}
        direction="column"
        alignItems="center"
        justifyContent="center"
        padding= "1rem"

        style={{ minHeight: '100vh' }}
        >
    
        <Grid item xs={9} xm={6}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h2>Contacta con Nosotros</h2>
            <form className={classes.root}>
                
                    <TextField id="nombre" label="Nombre" variant="outlined" />
                    <TextField id="apellido" label="Apellido" variant="outlined" />
                <div></div>
               
                    <TextField id="email" label="Email" variant="outlined" />
                    <TextField id="telefono" label="Telefono" variant="outlined" />

                <div></div>
                     <TextField id="asunto" multiline rows={4} fullWidth label="Asunto" variant="outlined" />

                
                <div>
                    <Button variant="contained" color="primary">
                        Enviar
                    </Button>
                </div>
                
            </form>
        </Grid>   
    
        </Grid> 
    );


}

export default Contacto;