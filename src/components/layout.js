import React from 'react'
import Helmet from 'react-helmet';
import { Global, css } from '@emotion/react';

import Header from './Header';
 
const Layout = ({children}) => {
    return (  
        <>
            <Global 
                styles={
                    css`
                        html {
                            box-sizing: border-box;
                            font-size: 62.5%;
                        }
                        *, *:before, *:after {
                            box-sizing: inherit;
                        }
                        body {
                            font-size: 1.6rem;
                            line-height: 2;
                            font-family: 'Lato', sans-serif;
                        }
                        h1,h2,h3 {
                            margin: 0;
                            line-height: 1.5;
                        }   
                        h1,h2 {
                            font-family: 'Lato', sans-serif;
                            font-weight: 300;
                            text-align: center;
                        }
                        h3 {
                            font-family: 'Roboto', sans-serif;
                        }
                        ul{
                            list-style: none;
                            padding: 0;
                            margin: 0;
                        }
                        .contenedor {
                            max-width: 120rem;
                            width: 95%;
                            margin: 0 auto;
                        }
                        img {
                            width: 100%;
                        }
                    `
                }
            
            />
            <Helmet>
                <title>Bienes Raices Gatsby</title>
                <meta name="description" content="Sitio web de bienes raices en gatsby"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&family=Roboto:ital,wght@0,100;1,400;1,700&display=swap" rel="stylesheet"/>
            </Helmet>

            <Header/>
            
            {children}
        </>
    );
}
 
export default Layout;