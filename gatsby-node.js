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

  const getTravel = makeRequest(graphql, `
  {
    allContentfulBlog (
      sort: { fields: [createdAt], order: DESC }
      filter: {
        node_locale: {eq: "en-US"}
        category: {elemMatch: {category: {eq: "Travel"}}}
      },)
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
        path: i === 0 ? `/category/travel` : `/category/travel${i + 1}`,
        component: path.resolve("./src/templates/travel.js"),
        context: {
          limit: blogPerPage,
          skip: i * blogPerPage,
          numPages,
          currentPage: i + 1
        },
      })
    })
  });

  const getTips = makeRequest(graphql, `
  {
    allContentfulBlog (
      sort: { fields: [createdAt], order: DESC }
      filter: {
        node_locale: {eq: "en-US"}
        category: {elemMatch: {category: {eq: "Tips"}}}
      },)
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
        path: i === 0 ? `/category/tips` : `/category/tips${i + 1}`,
        component: path.resolve("./src/templates/tips.js"),
        context: {
          limit: blogPerPage,
          skip: i * blogPerPage,
          numPages,
          currentPage: i + 1
        },
      })
    })
  });

  const getTech = makeRequest(graphql, `
  {
    allContentfulBlog (
      sort: { fields: [createdAt], order: DESC }
      filter: {
        node_locale: {eq: "en-US"}
        category: {elemMatch: {category: {eq: "Tech"}}}
      },)
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
        path: i === 0 ? `/category/tech` : `/category/tech${i + 1}`,
        component: path.resolve("./src/templates/tech.js"),
        context: {
          limit: blogPerPage,
          skip: i * blogPerPage,
          numPages,
          currentPage: i + 1
        },
      })
    })
  });

  const getGuide = makeRequest(graphql, `
  {
    allContentfulBlog (
      sort: { fields: [createdAt], order: DESC }
      filter: {
        node_locale: {eq: "en-US"}
        category: {elemMatch: {category: {eq: "Guide"}}}
      },)
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
        path: i === 0 ? `/category/guide` : `/category/guide${i + 1}`,
        component: path.resolve("./src/templates/guide.js"),
        context: {
          limit: blogPerPage,
          skip: i * blogPerPage,
          numPages,
          currentPage: i + 1
        },
      })
    })
  });

  const getEurope = makeRequest(graphql, `
  {
    allContentfulBlog (
      sort: { fields: [createdAt], order: DESC }
      filter: {
        node_locale: {eq: "en-US"}
        category: {elemMatch: {category: {eq: "Europe"}}}
      },)
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
        path: i === 0 ? `/category/europe` : `/category/europe${i + 1}`,
        component: path.resolve("./src/templates/europe.js"),
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
    getArchive,
    getTravel,
    getTips,
    getTech,
    getGuide,
    getEurope
  ])
};

