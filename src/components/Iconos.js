import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

const ListadoIconos = styled.ul`
    display: flex;
    justify-content: space-between;
    flex: 1;
    max-width: 500px;
    margin: 3rem auto 0 auto;

    li {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        img{
            height: 40px;
            margin-right: 1rem;
        }
    }

`;


const Iconos = ({wc, estacionamiento, habitaciones}) => {

    const { iconos } = useStaticQuery(graphql`
    
        query {
           iconos: allFile(filter: {relativeDirectory: {eq: "iconos"}}){
                    edges {
                        node  {
                            id
                            publicURL
                        }
                    }
                }
        }

    `);

    // console.log(iconos.edges);
    const imagenes = iconos.edges;

    return ( 
        <ListadoIconos>
            <li>
                <img  src={imagenes[4].node.publicURL} alt="Icono Wc" />
                <p>{wc}</p>
            </li>
            <li>
                <img src={imagenes[3].node.publicURL} alt="Icono Estacionamiento" />
                <p>{estacionamiento}</p>
            </li>
            <li>
                <img src={imagenes[5].node.publicURL} alt="Icono Habitaciones" />
                <p>{habitaciones}</p>
            </li>
        </ListadoIconos>
     );
}
 
export default Iconos;