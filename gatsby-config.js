module.exports = {
  siteMetadata: {
    title: "gatsby-mdx-math-example",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/MdxLayout.js"),
        },
        remarkPlugins: [require("remark-math")],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
