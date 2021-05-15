import React from 'react';

import { AppBar, Toolbar, Typography,makeStyles, Container, Slider, FormGroup, FormControlLabel,Checkbox, FormControl, FormLabel,Button  } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
      width: 400,
    },
  });

export default function Filtro() {
    const classes = useStyles();
    const [value, setValue] = React.useState([0, 100000]);

    const [tipos, setTipos] = React.useState({
        checkedAlquiler: true,
        checkedVentas: true,
        checkedCasa: true,
        checkedDpto: true,
        
    });
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleTipos = (event) => {
        setTipos({ ...tipos, [event.target.name]: event.target.checked });
    };

    return (
        <>
            <Container maxWidth="sm">
                <div className={classes.root}>
                    <FormControl>
                        <FormLabel component="legend">Tipo de Contrato</FormLabel>
                        <FormGroup row>
                            <FormControlLabel
                                control={
                                <Checkbox 
                                    checked={tipos.checkedAlquiler} 
                                    onChange={handleTipos} 
                                    name="checkedAlquiler" 
                                    color="primary"
                                />}
                                label="Alquiler"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={tipos.checkedVentas}
                                    onChange={handleTipos}
                                    name="checkedVentas"
                                    color="primary"
                                />
                                }
                                label="Venta"
                            />
                        </FormGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel component="legend">Tipo Inmueble</FormLabel>
                        <FormGroup row>
                            <FormControlLabel
                                control={
                                <Checkbox 
                                    checked={tipos.checkedCasa} 
                                    onChange={handleTipos} 
                                    name="checkedCasa" 
                                    color="primary"
                                />}
                                label="Casa"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={tipos.checkedDpto}
                                    onChange={handleTipos}
                                    name="checkedDpto"
                                    color="primary"
                                />
                                }
                                label="Departamento"
                            />
                        </FormGroup>
                    </FormControl>
                    <FormControl>
                    <FormLabel component="legend">Habitaciones</FormLabel>
                        <FormGroup row>
                            <FormControlLabel
                                control={
                                <Checkbox 
                                    checked={tipos.checkedMono} 
                                    onChange={handleTipos} 
                                    name="checkedMono" 
                                    color="primary"
                                />}
                                label="Monoambiente"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={tipos.checked1hab}
                                    onChange={handleTipos}
                                    name="checked1hab"
                                    color="primary"
                                />
                                }
                                label="1 habitacion"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={tipos.checked2hab}
                                    onChange={handleTipos}
                                    name="checked2hab"
                                    color="primary"
                                />
                                }
                                label="2 habitaciones"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={tipos.checkedmashab}
                                    onChange={handleTipos}
                                    name="checkedmashab"
                                    color="primary"
                                />
                                }
                                label="Mas de 2 habitaciones"
                            />
                        </FormGroup>
                    </FormControl>
                    <div>
                    <Button variant="contained" color="primary">
                        Buscar
                    </Button>
                </div>
                </div>
            </Container>
        </>
    );
}