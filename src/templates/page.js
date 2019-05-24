import React from "react";
import { graphql } from 'gatsby';

import RootDiv from '../components/RootDiv';
import Header from '../components/Header';
import Main from '../components/Main';
import EntryDiv from '../components/EntryDiv';

const Page = ({ data }) => {
    const { contentfulPage } = data;
    const { header, main } = contentfulPage;

    const jsx = (
        <RootDiv>
            <Header
            html={header.childMarkdownRemark.html}
            ></Header>

            <Main>

                {main && main.map(entry => 
                    <EntryDiv 
                    entry={entry} 
                    key={entry.id}
                    ></EntryDiv>
                )}

            </Main>
            
        </RootDiv>
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
        main {
            __typename
            ... on ContentfulSkillCategory {
                id
                name
                skills {
                    id
                    name
                    level
                }
            }
        }
    }
}
`