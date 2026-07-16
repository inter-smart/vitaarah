import { buildQuery } from "./strapi";

export const seoPopulate = { populate: { og_image: true } };

export const getAboutPageQuery = () => buildQuery({
  seo: seoPopulate,
  hero: {
    populate: {
      hero_media: true,
      primary_button: { populate: { icon: true } },
    },
  },
  about_section: {
    populate: {
      featured_images: true,
      company_motto: true,
    },
  },
  services_section: {
    populate: {
      root_causes: {
        populate: {
          icon: true,
          service_specification: true,
        },
      },
    },
  },
  clinic_environment_section: {
    populate: {
      featured_image: true,
    },
  },
  healing_approach_section: {
    populate: {
      approach_card: {
        populate: {
          icon: true,
        },
      },
    },
  },
  members_section: {
    populate: {
      members: {
        populate: {
          thumbnail_image: true,
          featured_image: true,
        },
      },
    },
  },
  certifications_section: {
    populate: {
      statistic: true,
      certification_card: {
        populate: {
          certification_media: true,
        },
      },
    },
  },
});

export const getBlogPageQuery = () => buildQuery({
  Seo: seoPopulate,
  innerHero: {
    populate: {
      hero_media: true,
      primary_button: true,
    },
  },
  blogListingSection: true,
});

export const getBlogDetailQuery = () => buildQuery({
  innerHero: {
    populate: {
      hero_media: true,
      primary_button: true,
    },
  },
});

export const getActiveBlogQuery = () => buildQuery({
  featured_image: true,
});

export const getConditionPageQuery = () => buildQuery({
  hero: {
    populate: {
      hero_media: true,
      primary_button: true,
    },
  },
  expert_cta_section: true,
  seo: seoPopulate,
});

export const getConditionQuery = () => buildQuery({
  featured_image: true,
  symptoms_section: {
    populate: {
      symptoms_image: true,
    },
  },
  root_cause_section: true,
  recommended_treatments_section: true,
  lifestyle_section: {
    populate: {
      lifestyle_card: {
        populate: {
          featured_image: true,
        },
      },
    },
  },
  related_root_causes: {
    populate: {
      icon: true,
    },
  },
  related_treatments: {
    populate: {
      featured_image: true,
    },
  },
});

export const getGalleryPageQuery = () => buildQuery({
  seo: seoPopulate,
  hero: {
    populate: {
      hero_media: true,
      primary_button: true,
    },
  },
  galleryListSection: true,
  treatment_video: true,
});

export const getPackagePageQuery = () => buildQuery({
  seo: seoPopulate,
  hero: {
    populate: {
      hero_media: true,
      primary_button: true,
    },
  },
  statistics_section: {
    populate: {
      statistics: true,
    },
  },
  package_listing_section: true,
  package_duration_section: true,
});

export const getPackageQuery = () => buildQuery({
  featured_image: true,
});

export const getProgramsListQuery = () => buildQuery({
  related_package: true,
  available_durations: true,
});

export const getHomePageQuery = () => buildQuery({
  seo: seoPopulate,
  hero: {
    populate: {
      hero_media: true,
      primary_button: { populate: { icon: true } },
      secondary_button: { populate: { icon: true } },
    },
  },
  home_about_section: {
    populate: {
      featured_images: true,
      button: { populate: { icon: true } },
      about_statistic: true,
    },
  },
  home_conditions_section: {
    populate: {
      condition_item: {
        populate: {
          icon: true,
          background_video: true,
          related_condition: true,
        },
      },
    },
  },
  home_treatments_section: {
    populate: {
      home_treatment_item: {
        populate: {
          background_video: true,
          related_treatment_category: true,
        },
      },
    },
  },
  home_program_section: {
    populate: {
      home_program_item: {
        populate: {
          featured_image: true,
          program_attractions: { populate: { icon: true } },
          related_program: { populate: { related_package: true } },
        },
      },
    },
  },
  home_testimonials_section: {
    populate: {
      testimonials: {
        populate: { author_image: true, video_testimonial: true },
      },
    },
  },
  home_members_section: {
    populate: {
      members: { populate: { thumbnail_image: true, featured_image: true } },
    },
  },
  home_blogs_section: {
    populate: {
      blogs: { populate: { featured_image: true } },
    },
  },
});

export const getPrivacyPageQuery = () => buildQuery({
  seo: seoPopulate,
  privacySection: true,
});

export const getProgramQuery = () => buildQuery({
  hero_media: true,
  available_durations: true,
  introduction_section: {
    populate: {
      introduction_image: true,
    },
  },
  benefits_section: true,
  Included_treatments_section: true,
  who_is_this_for_section: true,
  duration_info_section: true,
  faq_section: {
    populate: {
      faq_item: true,
    },
  },
  related_package: {
    populate: {
      featured_image: true,
    },
  },
});

export const getSpecialitiesPageQuery = () => buildQuery({
  hero: {
    populate: {
      hero_media: true,
      primary_button: {
        populate: {
          icon: true
        }
      }
    },
  },
  specialities_listing_section: {
    populate: {
      specialities_item: {
        populate: {
          icon: true,
          treatment: {
            populate: {
              related_conditions: true,
            },
          },
        },
      },
    },
  },
  cta_specialities_section: true,
  seo: seoPopulate,
});

export const getSpecialityDetailQuery = () => buildQuery({
  hero: {
    populate: {
      hero_media: true,
      primary_button: true,
    },
  },
  detail_section: {
    populate: {
      content_section: {
        populate: {
          conditions: true,
          image: true,
        },
      },
      cta_section: {
        populate: {
          button: true,
          whatsapp: true,
        },
      },
    },
  },
  seo: seoPopulate,
});

export const getTermsPageQuery = () => buildQuery({
  seo: seoPopulate,
  termsSection: true,
});

export const getTreatmentPageQuery = () => buildQuery({
  hero: {
    populate: {
      hero_media: true,
      primary_button: {
        populate: {
          icon: true
        }
      }
    },
  },
  treatment_listing_section: true,
  treatment_cta_section: true,
  seo: seoPopulate,
});

export const getTreatmentCategoriesQuery = () => buildQuery({
  featured_image: true,
  related_treatments: true,
});

export const getTreatmentCategoryBySlugQuery = () => buildQuery({
  featured_image: true,
  related_treatments: {
    populate: {
      hero: {
        populate: {
          hero_media: true,
        },
      },
    },
  },
});

export const getTreatmentDetailQuery = () => buildQuery({
  hero: {
    populate: {
      hero_media: true,
      primary_button: true,
    },
  },
  what_is_section: {
    populate: {
      featured_image: true,
    },
  },
  ritual_experience_section: {
    populate: {
      ritual_experience_item: true,
    },
  },
  treatment_benefits_section: {
    populate: {
      featured_image: true,
      benefits_item: {
        populate: {
          icon: true,
        },
      },
    },
  },
  right_for_you_section: {
    populate: {
      right_for_you_item: true,
    },
  },
  faq_section: {
    populate: {
      faq_item: true,
    },
  },
  related_treatments_section: {
    populate: {
      related_treatments: {
        populate: {
          hero: {
            populate: {
              hero_media: true,
            },
          },
        },
      },
    },
  },
  cta_treatment_section: true,
  related_treatment_category: true,
  seo: seoPopulate,
});
