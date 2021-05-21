const blogsConfig = {
  blogDevelopment: {
    blogUrl: 'http://localhost:3000',
    selfUrl: 'http://localhost:8081'
  },
  blog: {
    blogUrl: 'http://localhost:3000',
    selfUrl: 'http://localhost:8081'
  },
  blogStaging: {
    blogUrl: 'http://localhost:3000',
    selfUrl: 'http://localhost:8081'
  }
}

const blog = process.env.BLOG_THEME || process.env.VUE_APP_BLOG_THEME
const isBlog = blog === 'blog' || blog === 'blogStaging' || blog === 'blogDevelopment'

if (!blog) {
  throw new Error('Environnement variable "BLOG_THEME" does not exist')
}

if (!blogsConfig[blog]) {
  throw new Error(`BLOG_THEME "${blog}" is not configurated`)
}

// eslint-disable-next-line no-console
console.log(`Blog currently configurated for theme "${blog}"`)

module.exports = {
  blog,
  isBlog,
  ...blogsConfig[blog]
}
