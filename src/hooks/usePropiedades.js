import { useStaticQuery, graphql } from 'gatsby';




const usePropiedades = ()=> {

    const consulta = useStaticQuery(graphql`
    
       query{
            allStrapiPropiedades{
                nodes {
                    id
                    wc
                    nombre
                    descripcion
                    precio
                    habitaciones
                    estacionamiento
                    categoria {
                        nombre
                    }
                    agentes {
                        Nombre
                        Telefono
                        Email
                    }
                    imagen {
                        localFile{
                            sharp: childImageSharp {
                                gatsbyImageData( width: 600, height: 400)
                                }
                            }
                        }
                    }
                }
            }
    `);

    return consulta.allStrapiPropiedades.nodes.map( propiedad => ({
        
            id : propiedad.id,
            agentes: propiedad.agentes,
            categoria: propiedad.categoria,
            habitaciones: propiedad.habitaciones,
            precio: propiedad.precio,
            imagen: propiedad.imagen,
            wc: propiedad.wc,
            nombre: propiedad.nombre,
            estacionamiento: propiedad.estacionamiento
        
    }));
    
}

export default usePropiedades;