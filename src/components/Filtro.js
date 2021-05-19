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
                        <br></br>
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
                        <br></br>
                        <FormLabel component="legend">Tipo Inmueble</FormLabel>
                        <br></br>
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
                    <br></br>
                    <FormLabel component="legend">Habitaciones</FormLabel>
                    <br></br>
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
                                label="1"
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
                                label="2"
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
                                label="Mas de 2"
                            />
                        </FormGroup>
                    </FormControl>
                    <FormControl>
                    <br></br>
                    <FormLabel component="legend">Zonas</FormLabel>
                    <br></br>
                        <FormGroup row>
                            <FormControlLabel
                                control={
                                <Checkbox 
                                    checked={tipos.checkedZona1} 
                                    onChange={handleTipos} 
                                    name="checkedZona1" 
                                    color="primary"
                                />}
                                label="Zona A"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={tipos.checkedZona2}
                                    onChange={handleTipos}
                                    name="checkedZona2"
                                    color="primary"
                                />
                                }
                                label="Zona B"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={tipos.checkedZona3}
                                    onChange={handleTipos}
                                    name="checkedZona3"
                                    color="primary"
                                />
                                }
                                label="Zona C"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={tipos.checkedZona4}
                                    onChange={handleTipos}
                                    name="checkedZona4"
                                    color="primary"
                                />
                                }
                                label="Zona D"
                            />
                        </FormGroup>
                        <br></br>
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