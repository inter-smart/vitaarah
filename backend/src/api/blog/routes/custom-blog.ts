export default {
  routes: [
    {
      method: 'POST',
      path: '/blogs/:documentId/view',
      handler: 'blog.incrementView',
      config: {
        auth: false,
      },
    },
  ],
};
