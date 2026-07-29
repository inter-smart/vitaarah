export default {
  async afterFindMany(event) {
    const { result } = event;
    if (result && Array.isArray(result)) {
      for (const blog of result) {
        if (blog.id) {
          const count = await strapi.db.query('api::blog-view.blog-view').count({
            where: { blog: blog.id }
          });
          blog.viewCount = count;
        }
      }
    }
  },
  async afterFindOne(event) {
    const { result } = event;
    if (result && result.id) {
      const count = await strapi.db.query('api::blog-view.blog-view').count({
        where: { blog: result.id }
      });
      result.viewCount = count;
    }
  }
};
