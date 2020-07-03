const path = require("path")
// gatsby-node.js
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent)

    if (parent.internal.type === "File") {
      createNodeField({
        name: `sourceName`,
        node,
        value: parent.sourceInstanceName,
      })
      createNodeField({
        node,
        name: "lastModified",
        value: parent.mtime,
      })
    }
  }
}
async function createPages(createPage, graphql) {
  const result = await graphql(`
    query {
      allMdx(filter: { fields: { sourceName: { eq: "pages" } } }) {
        edges {
          node {
            id
            fields {
              sourceName
            }
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    console.log(result.errors)
  }

  // Create pages
  const pages = result.data.allMdx.edges

  pages.forEach(({ node }, index) => {
    const template = "./src/templates/pages.jsx"

    if (node.frontmatter.path) {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(template),
        context: { id: node.id },
      })
    }
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  //create Pages
  await createPages(createPage, graphql)
}
