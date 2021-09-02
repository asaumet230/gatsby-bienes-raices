import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

const Formulario = styled.form`
    width: 80%;
    display: flex;
    margin-top: 2rem;
    border: 3px solid #e1e1e1;
    margin: 2rem auto 0 auto;
`;

const Select = styled.select`
    appearance: none;
    border: none;
    flex: 1;
    padding: 1rem;
    font-family: 'Lato', sans-serif;
`;

const useFiltro = ()=> {

    const [categoria, guardarCategoria] = useState('');

    const resultado = useStaticQuery(graphql`
        query MyQuery {
         allStrapiCategorias {
            nodes {
                nombre
                id
            }    
        }
    }
    `);

   const categorias = resultado.allStrapiCategorias.nodes;

    const FiltroUI = () => (
        <Formulario >
            <Select 
                onChange= {e => guardarCategoria(e.target.value)}
                value = {categoria}
            >
                <option value="" defaultChecked>-- Filtrar --</option>
                { categorias.map( opcion => (
                    <option value={opcion.nombre} key={opcion.id}>{opcion.nombre}</option>
                ))}
            </Select>
        </Formulario>
    );

    return {
        categoria,
        FiltroUI
    }
}

export default useFiltro;