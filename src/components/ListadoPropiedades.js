import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';


import usePropiedades from '../hooks/usePropiedades';
import PropiedadesPreview from '../components/propiedadesPreview';

import useFiltro from '../hooks/useFiltro';


const ListadoPropiedadesDiv = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 4rem auto 0 auto;
    
    @media (min-width: 600px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 2rem;
        column-gap: 2rem;
    }

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
}
`

const ListadoPropiedades = () => {

    const resultado = usePropiedades();
    const [ propiedades ] = useState(resultado); // En este state el valor inicial son las propiedades
    const [ filtradas, guardarFiltradas ] = useState([]);

    // Filtro personlizado:
    const { categoria, FiltroUI } = useFiltro();
    
    useEffect(() => {

        if(categoria) {

            // Filtras
            const filtro = propiedades.filter( propiedad => propiedad.categoria.nombre === categoria);
            guardarFiltradas(filtro);

        } else {

            guardarFiltradas( propiedades ) // Porque son todas las propiedades
            
        }
    }, [ categoria, propiedades ])

    return ( 
        <>
            <h2 css={
                css`
                    margin-top: 5rem;
                `
            }>Nuestras Propiedades</h2>
            
            { FiltroUI() }
            
            <ListadoPropiedadesDiv>
                {filtradas.map( propiedad => (
                        <PropiedadesPreview 
                            key= {propiedad.id}
                            propiedad={propiedad}/>
                ))}
            </ListadoPropiedadesDiv>
        </>
     );
}
 
export default ListadoPropiedades;