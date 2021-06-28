import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="markdown-page">
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>
      <div
          className="markdown-content"
          dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`