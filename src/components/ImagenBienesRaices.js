import React from 'react'
import { useStaticQuery, graphql} from 'gatsby'
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';
import {imagenbn, titulo} from '../components/css/hero.module.css';

const ComponenteImagenHero = styled(BackgroundImage)`
    height: 600px;

`;

const ImagenBienesRaices = () => {

    const imagen = useStaticQuery(graphql`
        query {
            allStrapiPaginas(filter: {nombre: {eq: "Inicio"}}){
                    nodes{
                        imagen{
                        localFile{
                            childImageSharp {
                                fluid (quality: 90, maxWidth: 1920, duotone: {
                                    highlight: "#222222",
                                    shadow: "#192550",
                                    opacity: 30
                                }){
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                }
            }
        }`);

   const imagenBackground = imagen.allStrapiPaginas.nodes[0].imagen.localFile.childImageSharp.fluid;

    return (  
        <ComponenteImagenHero
            tag="section"
            fluid={imagenBackground}
            fadeIn="soft">
                <div className={imagenbn}>
                    <h1 className={titulo}>Venta de casas y departamentos exclusivos</h1>
                </div>
        </ComponenteImagenHero>

    );
}
 
export default ImagenBienesRaices;