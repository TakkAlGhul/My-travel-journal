const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {

  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      return result;
    })
  )
});

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const getBlog = makeRequest(graphql, `
  {
    allContentfulBlog (
      sort: { fields: [createdAt], order: DESC }
      filter: {
        node_locale: {eq: "en-US"}},)
    {
      edges {
        node {
          id
          slug
        }
      }
    }
  }
  `).then(result => {
    result.data.allContentfulBlog.edges.forEach(({node}) => {
      createPage({
        path: `blog/${node.slug}`,
        component: path.resolve(`src/templates/blog.js`),
        context: {
          id: node.id,
        },
      })
    })
  });

  const getArchive = makeRequest(graphql, `
  {
    allContentfulBlog (
      sort: { fields: [createdAt], order: DESC }
      filter: {
        node_locale: {eq: "en-US"}},)
    {
      edges {
        node {
          id
          slug
        }
      }
    }
  }
  `).then(result => {
    const blogs = result.data.allContentfulBlog.edges
    const blogPerPage = 9
    const numPages = Math.ceil(blogs.length / blogPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `blog` : `/blog/${i + 1}`,
        component: path.resolve("./src/templates/archive.js"),
        context: {
          limit: blogPerPage,
          skip: i * blogPerPage,
          numPages,
          currentPage: i + 1
        },
      })
    })
  });

  return Promise.all([
    getBlog,
    getArchive
  ])
};

