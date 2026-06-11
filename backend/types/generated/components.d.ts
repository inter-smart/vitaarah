import type { Schema, Struct } from '@strapi/strapi';

export interface CommonFeature extends Struct.ComponentSchema {
  collectionName: 'components_common_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface CommonSeo extends Struct.ComponentSchema {
  collectionName: 'components_common_seos';
  info: {
    displayName: 'Seo';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    ogImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CommonStatistic extends Struct.ComponentSchema {
  collectionName: 'components_common_statistics';
  info: {
    displayName: 'Statistic';
  };
  attributes: {
    label: Schema.Attribute.String;
    valueCount: Schema.Attribute.String;
    valueSuffix: Schema.Attribute.String;
  };
}

export interface NavigationButton extends Struct.ComponentSchema {
  collectionName: 'components_navigation_buttons';
  info: {
    displayName: 'Button';
    icon: 'link';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface NavigationNavigation extends Struct.ComponentSchema {
  collectionName: 'components_navigation_navigations';
  info: {
    displayName: 'Navigation';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SectionsAbout extends Struct.ComponentSchema {
  collectionName: 'components_sections_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    aboutStatistic: Schema.Attribute.Component<'common.statistic', true>;
    button: Schema.Attribute.Component<'navigation.button', false>;
    description: Schema.Attribute.Blocks;
    mainImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    secondaryImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
  };
}

export interface SectionsBlogs extends Struct.ComponentSchema {
  collectionName: 'components_sections_blogs';
  info: {
    displayName: 'Blogs';
  };
  attributes: {
    blogs: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    heroMedia: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    primaryButton: Schema.Attribute.Component<'navigation.button', false>;
    secondaryButton: Schema.Attribute.Component<'navigation.button', false>;
    smallHeading: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsMembers extends Struct.ComponentSchema {
  collectionName: 'components_sections_members';
  info: {
    displayName: 'Members';
  };
  attributes: {
    members: Schema.Attribute.Relation<'oneToMany', 'api::member.member'>;
  };
}

export interface SectionsPackages extends Struct.ComponentSchema {
  collectionName: 'components_sections_packages';
  info: {
    displayName: 'Packages';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    packages: Schema.Attribute.Relation<'oneToMany', 'api::package.package'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsSpecialities extends Struct.ComponentSchema {
  collectionName: 'components_sections_specialities';
  info: {
    displayName: 'Specialities';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    specialties: Schema.Attribute.Relation<
      'oneToMany',
      'api::specialty.specialty'
    >;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    testimonials: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    >;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTreatments extends Struct.ComponentSchema {
  collectionName: 'components_sections_treatments';
  info: {
    displayName: 'Treatments';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
    treatments: Schema.Attribute.Relation<
      'oneToMany',
      'api::treatment.treatment'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.feature': CommonFeature;
      'common.seo': CommonSeo;
      'common.statistic': CommonStatistic;
      'navigation.button': NavigationButton;
      'navigation.navigation': NavigationNavigation;
      'sections.about': SectionsAbout;
      'sections.blogs': SectionsBlogs;
      'sections.hero': SectionsHero;
      'sections.members': SectionsMembers;
      'sections.packages': SectionsPackages;
      'sections.specialities': SectionsSpecialities;
      'sections.testimonials': SectionsTestimonials;
      'sections.treatments': SectionsTreatments;
    }
  }
}
