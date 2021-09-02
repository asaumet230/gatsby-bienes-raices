import { useStaticQuery, graphql } from 'gatsby';


 
const useInicio = () => {

    const consulta = useStaticQuery(graphql`
             query {
                allStrapiPaginas(filter: {nombre: {eq: "Inicio"}}) {
                    nodes {
                        id
                        nombre
                        contenido
                        imagen {
                        localFile {
                            childImageSharp {
                            gatsbyImageData( width: 1200)
                        }
                    }
                }
            }
        }
      }
    `);

    return consulta.allStrapiPaginas.nodes.map( inicio => ({
        id: inicio.id,
        nombre: inicio.nombre,
        contenido: inicio.contenido,
        imagen: inicio.imagen
    }));

}
 
export default useInicio;