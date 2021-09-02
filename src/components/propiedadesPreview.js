import React from 'react'
import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import urlSlug from 'url-slug';

import Iconos from './Iconos';

const Boton = styled(Link)`
    display: block;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    text-decoration: none;
    color: #fff;
    margin-top: 2rem;
    padding: 1rem;
    background-color: #75AB00;
`;

const Card = styled.div`
    border: 1px solid #e1e1e1;
    
    @media (max-width: 500px){
      margin-top: 2rem;
    }

    img{
        max-width: 100%;
    }
`;

const Contenido = styled.div`
    padding: 2rem;

    h3 {
        font-family: 'Lato', sans-serif;
        margin: 0 0 2rem 0;
        font-size: 2.4rem;
    }

    .precio {
        font-size: 2rem;
        color: #75AB00;
    }

`;

const PropiedadesPreview = ({propiedad}) => {
  
    const{nombre, habitaciones, wc, precio, imagen, estacionamiento} = propiedad;

    const imagenPropiedad = imagen.localFile.sharp.gatsbyImageData;

    return ( 
        <Card>
            <GatsbyImage image={imagenPropiedad} alt={nombre}/>
            <Contenido>
                <h3>{nombre}</h3>
                <p className="precio">${precio}</p>
                <Iconos
                    wc={wc}
                    estacionamiento = {estacionamiento}
                    habitaciones={habitaciones}
                />
            </Contenido>

            <Boton to = { `/${urlSlug(nombre)}` }>
                Visitar Propiedad
            </Boton>
        </Card>
     );
}
 
export default PropiedadesPreview;