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

export interface CommonConditionItem extends Struct.ComponentSchema {
  collectionName: 'components_common_condition_items';
  info: {
    displayName: 'Condition Item';
  };
  attributes: {
    background_video: Schema.Attribute.Media<'videos'>;
    icon: Schema.Attribute.Media<'images'>;
    related_condition: Schema.Attribute.Relation<
      'oneToOne',
      'api::condition.condition'
    >;
    short_description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_common_faq_items';
  info: {
    displayName: 'Faq Item';
  };
  attributes: {
    short_description: Schema.Attribute.Text;
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

export interface CommonGalleryVideos extends Struct.ComponentSchema {
  collectionName: 'components_common_gallery_videos';
  info: {
    displayName: 'Gallery Videos';
  };
  attributes: {
    instagram_post_url: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos'>;
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

export interface CommonRitualExperienceItem extends Struct.ComponentSchema {
  collectionName: 'components_common_ritual_experience_items';
  info: {
    displayName: 'Ritual Experience Item';
  };
  attributes: {
    short_description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface CommonSeo extends Struct.ComponentSchema {
  collectionName: 'components_common_seos';
  info: {
    displayName: 'Seo';
  };
  attributes: {
    canonical_url: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    meta_description: Schema.Attribute.Text;
    meta_title: Schema.Attribute.String;
    og_image: Schema.Attribute.Media<'images'>;
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
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonSpecialitiesItem extends Struct.ComponentSchema {
  collectionName: 'components_common_specialities_items';
  info: {
    displayName: 'Specialities Item';
  };
  attributes: {
    conditions_treated_title: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    short_description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    treatment: Schema.Attribute.Relation<
      'oneToOne',
      'api::treatment.treatment'
    >;
  };
}

export interface CommonStatistic extends Struct.ComponentSchema {
  collectionName: 'components_common_statistics';
  info: {
    displayName: 'Statistic';
  };
  attributes: {
    label: Schema.Attribute.String;
    value_count: Schema.Attribute.String;
    value_suffix: Schema.Attribute.String;
  };
}

export interface NavigationButton extends Struct.ComponentSchema {
  collectionName: 'components_navigation_buttons';
  info: {
    displayName: 'Button';
    icon: 'link';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
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
    is_external: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
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
    about_statistic: Schema.Attribute.Component<'common.statistic', true>;
    button: Schema.Attribute.Component<'navigation.button', false>;
    description: Schema.Attribute.Blocks;
    featured_images: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface SectionsBenefitsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_benefits_sections';
  info: {
    displayName: 'Benefits Section';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
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
    working_time_info: Schema.Attribute.Component<
      'sections.working-time-info',
      true
    >;
  };
}

export interface SectionsCtaSpecialitiesSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_cta_specialities_sections';
  info: {
    displayName: 'Cta Specialities Section';
  };
  attributes: {
    botton_label: Schema.Attribute.String;
    short_description: Schema.Attribute.Text;
    whatsapp_number: Schema.Attribute.String;
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

export interface SectionsFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_faq_sections';
  info: {
    displayName: 'Faq Section';
  };
  attributes: {
    faq_item: Schema.Attribute.Component<'common.faq-item', true>;
    short_description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsGalleryListSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_gallery_list_sections';
  info: {
    displayName: 'Gallery List Section';
  };
  attributes: {
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
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    hero_media: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
    primary_button: Schema.Attribute.Component<'navigation.button', false>;
    secondary_button: Schema.Attribute.Component<'navigation.button', false>;
    small_heading: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsHomePackageItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_home_package_items';
  info: {
    displayName: 'Home Treatment Item';
  };
  attributes: {
    background_video: Schema.Attribute.Media<'videos'>;
    related_treatment_category: Schema.Attribute.Relation<
      'oneToOne',
      'api::treatment-category.treatment-category'
    >;
    short_description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsHomeProgramItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_home_program_items';
  info: {
    displayName: 'Home Program Item';
  };
  attributes: {
    badgeType: Schema.Attribute.Enumeration<
      ['Best Seller', 'New', 'Featured', 'Offer']
    >;
    featured_image: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    program_attractions: Schema.Attribute.Component<'common.feature', true>;
    related_program: Schema.Attribute.Relation<
      'oneToOne',
      'api::program.program'
    >;
    short_description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsIncludedTreatmentsSection
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_included_treatments_sections';
  info: {
    displayName: 'Included Treatments Section';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
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
    hero_media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    primary_button: Schema.Attribute.Component<'navigation.button', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsIntroductionSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_introduction_sections';
  info: {
    displayName: 'Introduction Section';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    introduction_image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
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

export interface SectionsPackageDurationsSection
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_package_durations_sections';
  info: {
    displayName: 'Package Durations Section';
  };
  attributes: {
    short_description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsPackageListingSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_package_listing_sections';
  info: {
    displayName: 'Package Listing Section';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SectionsPackages extends Struct.ComponentSchema {
  collectionName: 'components_sections_packages';
  info: {
    displayName: 'Home Program Section';
  };
  attributes: {
    home_program_item: Schema.Attribute.Component<
      'sections.home-program-item',
      true
    >;
    short_description: Schema.Attribute.Text;
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
  };
}

export interface SectionsRelatedTreatments extends Struct.ComponentSchema {
  collectionName: 'components_sections_related_treatments';
  info: {
    displayName: 'Related Treatments';
  };
  attributes: {
    related_treatments: Schema.Attribute.Relation<
      'oneToMany',
      'api::treatment.treatment'
    >;
    short_description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsRightForYouSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_right_for_you_sections';
  info: {
    displayName: 'Right for You Section';
  };
  attributes: {
    button_label: Schema.Attribute.String;
    right_for_you_item: Schema.Attribute.Component<
      'common.ritual-experience-item',
      true
    >;
    short_description: Schema.Attribute.Text;
    sub_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsRitualExperienceSection
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_ritual_experience_sections';
  info: {
    displayName: 'Ritual Experience Section';
  };
  attributes: {
    ritual_experience_item: Schema.Attribute.Component<
      'common.ritual-experience-item',
      true
    >;
    short_description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsRootCauseSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_root_cause_sections';
  info: {
    displayName: 'Root Cause Section';
  };
  attributes: {
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
    root_causes: Schema.Attribute.Relation<
      'oneToMany',
      'api::root-cause.root-cause'
    >;
    short_description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsSpecialities extends Struct.ComponentSchema {
  collectionName: 'components_sections_specialities';
  info: {
    displayName: 'Home Conditions';
  };
  attributes: {
    condition_item: Schema.Attribute.Component<'common.condition-item', true>;
    short_description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsSpecialitiesListingSection
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_specialities_listing_sections';
  info: {
    displayName: 'Specialities Listing Section';
  };
  attributes: {
    short_description: Schema.Attribute.Text;
    specialities_item: Schema.Attribute.Component<
      'common.specialities-item',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SectionsStatisticsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_statistics_sections';
  info: {
    displayName: 'Statistics Section';
  };
  attributes: {
    short_description: Schema.Attribute.Text;
    statistics: Schema.Attribute.Component<'common.statistic', true>;
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

export interface SectionsTreatmentBenefitsSection
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_treatment_benefits_sections';
  info: {
    displayName: 'Treatment Benefits Section';
  };
  attributes: {
    benefits_item: Schema.Attribute.Component<'common.approach-card', true>;
    description: Schema.Attribute.Blocks;
    featured_image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTreatmentCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_treatment_cta_sections';
  info: {
    displayName: 'Treatment CTA Section';
  };
  attributes: {
    button_label: Schema.Attribute.String;
    short_description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTreatmentListingSection
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_treatment_listing_sections';
  info: {
    displayName: 'Treatment Listing Section';
  };
  attributes: {
    short_description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTreatmentSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_treatment_sections';
  info: {
    displayName: 'Treatment Section';
  };
  attributes: {
    gallery_videos: Schema.Attribute.Component<'common.gallery-videos', true>;
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
    displayName: 'Home Treatments';
  };
  attributes: {
    home_treatment_item: Schema.Attribute.Component<
      'sections.home-package-item',
      true
    >;
    short_description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTreatmentsIncludedSection
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_treatments_included_sections';
  info: {
    displayName: 'Duration Info Section';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SectionsWhatIsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_what_is_sections';
  info: {
    displayName: 'What Is Section';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    featured_image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsWhoIsThisForSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_who_is_this_for_sections';
  info: {
    displayName: 'Who Is This For Section';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SectionsWorkingTimeInfo extends Struct.ComponentSchema {
  collectionName: 'components_sections_working_time_infos';
  info: {
    displayName: 'Working Time Info';
  };
  attributes: {
    days: Schema.Attribute.String;
    timings: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.approach-card': CommonApproachCard;
      'common.certification-card': CommonCertificationCard;
      'common.company-motto': CommonCompanyMotto;
      'common.condition-item': CommonConditionItem;
      'common.faq-item': CommonFaqItem;
      'common.feature': CommonFeature;
      'common.gallery-videos': CommonGalleryVideos;
      'common.lifestyle-card': CommonLifestyleCard;
      'common.ritual-experience-item': CommonRitualExperienceItem;
      'common.seo': CommonSeo;
      'common.service-card': CommonServiceCard;
      'common.service-specifications': CommonServiceSpecifications;
      'common.specialities-item': CommonSpecialitiesItem;
      'common.statistic': CommonStatistic;
      'navigation.button': NavigationButton;
      'navigation.navigation': NavigationNavigation;
      'sections.about': SectionsAbout;
      'sections.about-section': SectionsAboutSection;
      'sections.benefits-section': SectionsBenefitsSection;
      'sections.blog-listing-section': SectionsBlogListingSection;
      'sections.blogs': SectionsBlogs;
      'sections.certifications-section': SectionsCertificationsSection;
      'sections.clinic-environment-section': SectionsClinicEnvironmentSection;
      'sections.contact-section': SectionsContactSection;
      'sections.cta-specialities-section': SectionsCtaSpecialitiesSection;
      'sections.expert-cta': SectionsExpertCta;
      'sections.faq-section': SectionsFaqSection;
      'sections.gallery-list-section': SectionsGalleryListSection;
      'sections.healing-approach-section': SectionsHealingApproachSection;
      'sections.hero': SectionsHero;
      'sections.home-package-item': SectionsHomePackageItem;
      'sections.home-program-item': SectionsHomeProgramItem;
      'sections.included-treatments-section': SectionsIncludedTreatmentsSection;
      'sections.inner-hero': SectionsInnerHero;
      'sections.introduction-section': SectionsIntroductionSection;
      'sections.legal-section': SectionsLegalSection;
      'sections.lifestyle-section': SectionsLifestyleSection;
      'sections.members': SectionsMembers;
      'sections.members-section': SectionsMembersSection;
      'sections.package-durations-section': SectionsPackageDurationsSection;
      'sections.package-listing-section': SectionsPackageListingSection;
      'sections.packages': SectionsPackages;
      'sections.recommended-treatments-section': SectionsRecommendedTreatmentsSection;
      'sections.related-treatments': SectionsRelatedTreatments;
      'sections.right-for-you-section': SectionsRightForYouSection;
      'sections.ritual-experience-section': SectionsRitualExperienceSection;
      'sections.root-cause-section': SectionsRootCauseSection;
      'sections.services-section': SectionsServicesSection;
      'sections.specialities': SectionsSpecialities;
      'sections.specialities-listing-section': SectionsSpecialitiesListingSection;
      'sections.statistics-section': SectionsStatisticsSection;
      'sections.symptoms-section': SectionsSymptomsSection;
      'sections.testimonials': SectionsTestimonials;
      'sections.treatment-benefits-section': SectionsTreatmentBenefitsSection;
      'sections.treatment-cta-section': SectionsTreatmentCtaSection;
      'sections.treatment-listing-section': SectionsTreatmentListingSection;
      'sections.treatment-section': SectionsTreatmentSection;
      'sections.treatments': SectionsTreatments;
      'sections.treatments-included-section': SectionsTreatmentsIncludedSection;
      'sections.what-is-section': SectionsWhatIsSection;
      'sections.who-is-this-for-section': SectionsWhoIsThisForSection;
      'sections.working-time-info': SectionsWorkingTimeInfo;
    }
  }
}
