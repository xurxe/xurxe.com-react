import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';


const HelmetComponent = (/* { title, description, keywords, image, url, slug } */) => {

    const staticQuery = (<StaticQuery 
        query={
            graphql`
            query {
                contentfulSeo {
                    image {
                        fixed(width: 1200, height: 630, quality: 100) {
                            src
                        }
                    }
                }
            }
            `
        }
        render={(data) => {

            const { contentfulSeo } = data;
            const jsx = (
                <Helmet>
        
                    <html 
                    lang='en'
                    ></html>
        
                    <title>
                        Xurxe Toivo García
                    </title>
        
                    <meta property="og:title" content="Xurxe Toivo García" />
                    <meta property="og:description" content="Xurxe makes still, moving, and interactive things." />
                    <meta property="og:image" content={contentfulSeo.image.src} />
                    <meta property="og:url" content="http://xurxe.com/" />
                    <meta name="twitter:card" content="summary_large_image" />
        
                    <meta
                    name="description"
                    content="Xurxe makes still, moving, and interactive things."
                    />
        
                    <meta 
                    name="keywords"
                    content="Xurxe, Xurxe Toivo, Xurxe Garcia, Xurxe Toivo García, web developer, web development, web designer, web design, illustration, animation, watercolor, Integrify, Finland, Helsinki"
                    />
        
                    <meta name="author" content="Xurxe Toivo Garcia" />
        
                    <link 
                    href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono|Abhaya+Libre|Abril+Fatface|Cantata+One|Marko+One|Shrikhand|Yeseva+One|PT+Mono|Anonymous+Pro|Cutive+Mono|Inconsolata|Rakkas|Rhodium+Libre" 
                    rel="stylesheet"
                    />
        
                    <link 
                    rel='stylesheet' 
                    href='https://use.fontawesome.com/releases/v5.8.2/css/all.css' 
                    integrity='sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay' 
                    crossorigin='anonymous' 
                    />
                
                </Helmet>
            );
        
            return jsx;
        }}
        />
    );

    return staticQuery;

    /* const jsx = (
        <Helmet>

            <html 
            lang='en'
            ></html>

            <title>
                {title}
            </title>

            <meta
            name='description'
            content={description}
            />

            <meta 
            name='keywords'
            content={keywords.join(', ')}
            />

            <meta
            property='og:title' 
            content={title} 
            />

            <meta 
            property='og:description' 
            content={description}
            />

            <meta 
            property='og:image' 
            content={image}
            />

            <meta 
            property='og:image:width' 
            content='1200'
            />

            <meta 
            property='og:image:height' 
            content='630'
            />

            <meta 
            property='og:url' 
            content={url}
            />

            <meta 
            property='og:type'
            content='website'
            />

            <meta name='twitter:card' 
            content='summary_large_image'/>        

            <meta 
            name='author' 
            content='Xurxe Toivo Garcia'
            />

            <link 
            href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono|Abhaya+Libre|Abril+Fatface|Cantata+One|Marko+One|Shrikhand|Yeseva+One|PT+Mono|Anonymous+Pro|Cutive+Mono|Inconsolata|Rakkas|Rhodium+Libre" 
            rel="stylesheet"
            />

            <link 
            rel='stylesheet' 
            href='https://use.fontawesome.com/releases/v5.8.2/css/all.css' 
            integrity='sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay' 
            crossorigin='anonymous' 
            />
        
        </Helmet>
    );

    return jsx; */
};

export default HelmetComponent;