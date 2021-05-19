import TitlebarGridList from './TitlebarGridList';
import Filtro from './Filtro';
import styled from 'styled-components/macro';

const EstiloFiltro= styled.div`
    position: absolute;
    top: 121px; left: 20px;
`;
const EstiloList= styled.div`
    position: relative;
    top: 100px; left: 500px;
`;
const Catalogo = () => {
    return (
    <div>    
    <EstiloFiltro>
        <Filtro/>
    </EstiloFiltro>
    <EstiloList>
        <TitlebarGridList></TitlebarGridList>
    </EstiloList>
    </div>
    );
}

export default Catalogo;