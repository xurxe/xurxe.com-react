import React from "react";
import { graphql } from 'gatsby';
import Parser from 'html-react-parser';

const IndexPage = ({ data }) => {

    const { contentfulIndex } = data;

    const jsx = (
        <div 
        className='BodyDiv'>
            <header>
                {Parser(contentfulIndex.header.childMarkdownRemark.html)}
            </header>
        </div>
    );

    return jsx;
};

export default IndexPage;

export const query = graphql`
query {
    contentfulIndex {
        id
        name
        header {
                id
                childMarkdownRemark {
                html
            }
        }
    }
}
`;