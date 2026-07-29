/**
 * blog controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::blog.blog', ({ strapi }) => ({
  async find(ctx) {
    const { data, meta } = await super.find(ctx);

    if (data && data.length > 0) {
      for (const blog of data) {
        const count = await strapi.db.query('api::blog-view.blog-view').count({
          where: { blog: { documentId: blog.documentId } },
        });
        blog.viewCount = count;
      }
    }

    return { data, meta };
  },

  async findOne(ctx) {
    const response = await super.findOne(ctx);

    if (response?.data) {
      const count = await strapi.db.query('api::blog-view.blog-view').count({
        where: { blog: { documentId: response.data.documentId } },
      });
      response.data.viewCount = count;
    }

    return response;
  },

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
