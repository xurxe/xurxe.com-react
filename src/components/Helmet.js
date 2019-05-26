import React from 'react';
import Helmet from 'react-helmet';

const HelmetComponent = (/* { title, description, keywords, image, url, slug } */) => {

    const jsx = (
        <Helmet>

            <html 
            lang='en'
            ></html>

{/*             <title>
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
            /> */}

            <link 
            href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono" 
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
};

export default HelmetComponent;