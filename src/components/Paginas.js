import React from 'react'
import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';

import Layout from './Layout';
import ListadoPropiedades from './ListadoPropiedades';

export const query = graphql`
  query ($id:String!){
    allStrapiPaginas (filter: { id: { eq: $id } } ){
        nodes {
        nombre
        id
        contenido
        imagen {
                localFile {
                    childImageSharp {
                        gatsbyImageData(width: 1200)
                }
            }
        }
    }
  }
}
`;

const ContenidoPagina = styled.div`
    
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media (min-width: 768px){
      
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }

    p {
        text-align: justify;
    }

`;

const Paginas = ({data :{ allStrapiPaginas : { nodes }}}) => {
    
    // console.log(nodes);
    const {
        nombre,
        contenido,
        imagen
    } = nodes[0];

    const imagenPagina= (imagen.localFile.childImageSharp.gatsbyImageData);
    
    return ( 
        <Layout>    
                <main>
                    <h1>{nombre}</h1>
                    <ContenidoPagina>
                        <GatsbyImage image={imagenPagina} alt={nombre}/>
                        <p>{ contenido }</p>
                    </ContenidoPagina> 
                </main>
                { nombre === "Bienes" && (<ListadoPropiedades/>)}
        </Layout>
     );
}
 
export default Paginas;