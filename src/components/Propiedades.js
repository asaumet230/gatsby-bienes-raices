import React from 'react'
import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';

import Layout from './Layout';
import Iconos from './Iconos';

export const query = graphql`
    query ($id: String!) {
        allStrapiPropiedades(filter: {id: {eq: $id}}) {
            nodes {
            nombre
            estacionamiento
            descripcion
            wc
            precio
            habitaciones
            agentes {
                Email
                Telefono
                Nombre
            }
            imagen {
                localFile{
                    childImageSharp{
                            gatsbyImageData(width: 1200)
                            }
                        }
                    }
                }
            }
        }
`;

const Contenido = styled.div`
    
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

const Sidebar = styled.aside`
        .precio {
            font-size: 2rem;
            color: #75AB00;
        }

        .agentes {
            margin-top: 4rem;
            border-radius: 2rem;
            background-color:#75AB00;
            padding: 3rem;
            color: #fff;

             p {
                margin: 0;
            }
        }
       
`
 
const Propiedades = ({data :{ allStrapiPropiedades : { nodes }}}) => {
    
    // console.log(nodes);
    const {
        nombre,
        precio,
        wc,
        descripcion,
        estacionamiento,
        habitaciones,
        agentes,
        imagen
    } = nodes[0];

    const imagenPropiedad = (imagen.localFile.childImageSharp.gatsbyImageData);
    
    return ( 
        <Layout>
            <h1>{nombre}</h1>
            <Contenido>
                <main>
                    <GatsbyImage image={imagenPropiedad} alt={nombre}/>
                    <p>{ descripcion }</p>
                </main>
                <Sidebar>
                    <p className="precio">$ { precio }</p>
                       <Iconos
                            wc={wc}
                            estacionamiento = {estacionamiento}
                            habitaciones={habitaciones}
                        />

                        <div className="agentes">
                            <h2>Vendedor:</h2>
                            <p>{agentes.Nombre}</p>
                            <p>Tel: {agentes.Telefono}</p>
                            <p>Email: {agentes.Email}</p>
                        </div>
                </Sidebar>
            </Contenido>
        </Layout>
     );
}
 
export default Propiedades;