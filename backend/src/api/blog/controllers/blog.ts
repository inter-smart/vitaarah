/**
 * blog controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::blog.blog', ({ strapi }) => ({

  async incrementView(ctx) {
    const { documentId } = ctx.params;
    const { visitor_uuid } = ctx.request.body?.data || ctx.request.body || {};

    if (!documentId) {
      return ctx.badRequest('documentId is required');
    }
    if (!visitor_uuid) {
      return ctx.badRequest('visitor_uuid is required');
    }

    try {
      const blog = await strapi.db.query('api::blog.blog').findOne({
        where: { documentId },
        select: ['id', 'documentId'],
      });

      if (!blog) {
        return ctx.notFound('Blog not found');
      }

      const today = new Date().toISOString().split('T')[0];

      const existingView = await strapi.db.query('api::blog-view.blog-view').findOne({
        where: {
          blog: blog.id,
          visitor_uuid,
          viewed_date: today,
        },
      });

      let counted = false;

      if (!existingView) {
        await strapi.db.query('api::blog-view.blog-view').create({
          data: {
            visitor_uuid,
            viewed_date: today,
            viewed_at: new Date(),
            blog: blog.id,
          },
        });
        counted = true;
      }

      const totalViews = await strapi.db.query('api::blog-view.blog-view').count({
        where: { blog: blog.id },
      });

      return {
        counted,
        viewCount: totalViews,
      };
    } catch (err) {
      ctx.throw(500, err);
    }
  },
}));
