import type { Schema, Struct } from '@strapi/strapi';

export interface CommonApproachCard extends Struct.ComponentSchema {
  collectionName: 'components_common_approach_cards';
  info: {
    displayName: 'Approach Card';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    short_description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface CommonCertificationCard extends Struct.ComponentSchema {
  collectionName: 'components_common_certification_cards';
  info: {
    displayName: 'Certification Card';
  };
  attributes: {
    certification_media: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface CommonCompanyMotto extends Struct.ComponentSchema {
  collectionName: 'components_common_company_mottos';
  info: {
    displayName: 'Company Motto';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

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

export interface CommonLifestyleCard extends Struct.ComponentSchema {
  collectionName: 'components_common_lifestyle_cards';
  info: {
    displayName: 'Lifestyle Card';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    featured_image: Schema.Attribute.Media<'images'>;
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

export interface CommonServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_common_service_cards';
  info: {
    displayName: 'Service Card';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    service_specification: Schema.Attribute.Component<
      'common.service-specifications',
      true
    >;
    short_description: Schema.Attribute.Text;
    sub_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CommonServiceSpecifications extends Struct.ComponentSchema {
  collectionName: 'components_common_service_specifications';
  info: {
    displayName: 'Service Specifications';
  };
  attributes: {
    title: Schema.Attribute.String;
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

export interface SectionsAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_sections';
  info: {
    displayName: 'About Section';
  };
  attributes: {
    about_media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    company_motto: Schema.Attribute.Component<'common.company-motto', true>;
    short_description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsBlogListingSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_blog_listing_sections';
  info: {
    displayName: 'Blog Listing Section';
  };
  attributes: {
    itemsPerPage: Schema.Attribute.Integer;
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

export interface SectionsCertificationsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_certifications_sections';
  info: {
    displayName: 'Certifications Section';
  };
  attributes: {
    certification_card: Schema.Attribute.Component<
      'common.certification-card',
      true
    >;
    statistic: Schema.Attribute.Component<'common.statistic', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsClinicEnvironmentSection
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_clinic_environment_sections';
  info: {
    displayName: 'Clinic Environment Section';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    featured_image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsContactSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_sections';
  info: {
    displayName: 'ContactSection';
  };
  attributes: {
    emailAddress: Schema.Attribute.Email;
    googleMapsUrl: Schema.Attribute.String;
    phoneNumber: Schema.Attribute.String;
    shortDescription: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    uaeAddress: Schema.Attribute.Text;
    workingHour: Schema.Attribute.Blocks;
  };
}

export interface SectionsExpertCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_expert_ctas';
  info: {
    displayName: 'Expert Cta';
  };
  attributes: {
    short_description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    whatsappUrl: Schema.Attribute.String;
  };
}

export interface SectionsGalleryListSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_gallery_list_sections';
  info: {
    displayName: 'Gallery List Section';
  };
  attributes: {
    gallery_images: Schema.Attribute.Relation<
      'oneToMany',
      'api::gallery-image.gallery-image'
    >;
    gallery_media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SectionsHealingApproachSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_healing_approach_sections';
  info: {
    displayName: 'Healing Approach Section';
  };
  attributes: {
    approach_card: Schema.Attribute.Component<'common.approach-card', true>;
    description: Schema.Attribute.Blocks;
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

export interface SectionsInnerHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_inner_heroes';
  info: {
    displayName: 'Inner Hero';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heroMedia: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    primaryButton: Schema.Attribute.Component<'navigation.button', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsLegalSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_legal_sections';
  info: {
    displayName: 'Legal Section';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    shortDescription: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsLifestyleSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_lifestyle_sections';
  info: {
    displayName: 'Lifestyle Section';
  };
  attributes: {
    lifestyle_card: Schema.Attribute.Component<'common.lifestyle-card', true>;
    short_description: Schema.Attribute.Text;
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

export interface SectionsMembersSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_members_sections';
  info: {
    displayName: 'Members Section';
  };
  attributes: {
    members: Schema.Attribute.Relation<'oneToMany', 'api::member.member'>;
    short_description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
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

export interface SectionsRecommendedTreatmentsSection
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_recommended_treatments_sections';
  info: {
    displayName: 'Recommended Treatments Section';
  };
  attributes: {
    short_description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    treatments: Schema.Attribute.Relation<
      'oneToMany',
      'api::treatment.treatment'
    >;
  };
}

export interface SectionsRootCauseSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_root_cause_sections';
  info: {
    displayName: 'Root Cause Section';
  };
  attributes: {
    root_causes: Schema.Attribute.Relation<
      'oneToMany',
      'api::root-cause.root-cause'
    >;
    short_description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsServicesSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_services_sections';
  info: {
    displayName: 'Services Section';
  };
  attributes: {
    service: Schema.Attribute.Component<'common.service-card', true>;
    short_description: Schema.Attribute.Text;
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

export interface SectionsSymptomsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_symptoms_sections';
  info: {
    displayName: 'Symptoms Section';
  };
  attributes: {
    short_description: Schema.Attribute.Text;
    symptoms_image: Schema.Attribute.Media<'images'>;
    symptoms_list: Schema.Attribute.Blocks;
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

export interface SectionsTreatmentSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_treatment_sections';
  info: {
    displayName: 'Treatment Section';
  };
  attributes: {
    gallery_videos: Schema.Attribute.Relation<
      'oneToMany',
      'api::treatment-video.treatment-video'
    >;
    instagram_url: Schema.Attribute.String;
    instagram_username: Schema.Attribute.String;
    short_description: Schema.Attribute.Text;
    sub_description: Schema.Attribute.Text;
    sub_title: Schema.Attribute.String;
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
      'common.approach-card': CommonApproachCard;
      'common.certification-card': CommonCertificationCard;
      'common.company-motto': CommonCompanyMotto;
      'common.feature': CommonFeature;
      'common.lifestyle-card': CommonLifestyleCard;
      'common.seo': CommonSeo;
      'common.service-card': CommonServiceCard;
      'common.service-specifications': CommonServiceSpecifications;
      'common.statistic': CommonStatistic;
      'navigation.button': NavigationButton;
      'navigation.navigation': NavigationNavigation;
      'sections.about': SectionsAbout;
      'sections.about-section': SectionsAboutSection;
      'sections.blog-listing-section': SectionsBlogListingSection;
      'sections.blogs': SectionsBlogs;
      'sections.certifications-section': SectionsCertificationsSection;
      'sections.clinic-environment-section': SectionsClinicEnvironmentSection;
      'sections.contact-section': SectionsContactSection;
      'sections.expert-cta': SectionsExpertCta;
      'sections.gallery-list-section': SectionsGalleryListSection;
      'sections.healing-approach-section': SectionsHealingApproachSection;
      'sections.hero': SectionsHero;
      'sections.inner-hero': SectionsInnerHero;
      'sections.legal-section': SectionsLegalSection;
      'sections.lifestyle-section': SectionsLifestyleSection;
      'sections.members': SectionsMembers;
      'sections.members-section': SectionsMembersSection;
      'sections.packages': SectionsPackages;
      'sections.recommended-treatments-section': SectionsRecommendedTreatmentsSection;
      'sections.root-cause-section': SectionsRootCauseSection;
      'sections.services-section': SectionsServicesSection;
      'sections.specialities': SectionsSpecialities;
      'sections.symptoms-section': SectionsSymptomsSection;
      'sections.testimonials': SectionsTestimonials;
      'sections.treatment-section': SectionsTreatmentSection;
      'sections.treatments': SectionsTreatments;
    }
  }
}
