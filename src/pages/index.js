import React from 'react'
import Layout from '../components/Layout';
import { css } from '@emotion/react';

import useInicio from '../hooks/useInicio';

import ImagenBienesRaices from '../components/ImagenBienesRaices';
import Encuentra from '../components/encuentra';
import ListadoPropiedades from '../components/ListadoPropiedades';


const Inicio = () => {

    const inicio = useInicio();
    const { nombre, contenido } = inicio[0];


    return (  
        <Layout>
            <ImagenBienesRaices/>
            <main>
                <div 
                css={
                    css`
                        max-width: 800px;
                        margin: 0 auto;
                    `
                }>
                    <h1>{nombre}</h1>
                    <p 
                    css={
                        css`
                            text-align: justify;
                        `
                    }>{contenido}</p>
                </div>
            </main>
            
            <Encuentra/>
            <ListadoPropiedades/>
        </Layout>
    );
}
 
export default Inicio;