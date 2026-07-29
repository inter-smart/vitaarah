/**
 * blog controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::blog.blog', ({ strapi }) => ({
  async incrementView(ctx) {
    const { documentId } = ctx.params;

    if (!documentId) {
      return ctx.badRequest('documentId is required');
    }

    try {
      const blog = await strapi.db.query('api::blog.blog').findOne({
        where: { documentId },
        select: ['id', 'view_count', 'documentId'],
      });

      if (!blog) {
        return ctx.notFound('Blog not found');
      }

      const currentCount = blog.view_count || 0;
      const newCount = currentCount + 1;

      await strapi.db.query('api::blog.blog').update({
        where: { id: blog.id },
        data: { view_count: newCount },
      });

      return {
        data: {
          view_count: newCount,
        },
      };
    } catch (err) {
      ctx.throw(500, err);
    }
  },
}));
