import React, { Component } from 'react'
import styled from 'styled-components'
import Layout from "../components/Layout/layout"
import TopNavigation from '../components/Layout/Navigation/Navigation'

class wpPage extends Component {
  render() {
    const { location, data} = this.props
    const pageNode = {
      title: data.wordpressPage.title,
      content: data.wordpressPage.content,
      id: data.wordpressPage.id,
      slug: data.wordpressPage.slug
    }

    return (
      <Layout location={location}>
        <TopNavigation />
        <MainContentContainer>
          <h1>{pageNode.title}</h1>
          <main>
            <div dangerouslySetInnerHTML={{ __html: pageNode.content }} />
          </main>
        </MainContentContainer>
      </Layout>
    )
  }
}

export default wpPage

const MainContentContainer = styled.main`
  max-width: 800px;
  margin: 50px auto;

  h1 {
    text-align: center;
    font-weight: 700;
    margin-bottom: 25px;
  }

  p {
    font-size: 16px;
    margin-bottom: 25px;
  }

  pre {
    background-color: grey;
  }
`

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query WordpressPage($slug: String) {
    wordpressPage(slug: { eq: $slug }) {
      id
      wordpress_id
      slug
      title
      template
      content
    }
  }
`
