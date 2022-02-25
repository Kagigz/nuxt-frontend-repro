module.exports = {
  client: {
    service: {
      name: 'my-app',
      url: 'http://localhost:1337/graphql',
    },
    // Files processed by the extension
    includes: ['src/**/*.vue', 'src/**/*.ts'],
  },
}
