import React from "react";
import { graphql } from 'gatsby';
import Parser from 'html-react-parser';

const Page = ({ data }) => {
    const { contentfulPage } = data;

    const jsx = (
        <div 
        className='BodyDiv'>
            <header>
                {Parser(contentfulPage.header.childMarkdownRemark.html)}
            </header>
        </div>
    );

    return jsx;
}

export default Page;

export const query = graphql`
query($slug: String!){ 
	contentfulPage (id: { eq: $slug }){
        id
        header {
            childMarkdownRemark {
                html
            }
        }
    }
}
`