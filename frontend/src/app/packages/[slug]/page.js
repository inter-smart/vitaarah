import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import InnerHero from "@/components/common/InnerHero";
import PackagesDurations from "@/components/blocks/packages/packages-durations";
import PackagesDetail from "@/components/blocks/packages/packages-detail";
import TreatmentFaq from "@/components/blocks/treatment/treatment-faq";

const local_data = {
  detailSection: {
    id: 23,
    slug: "Weight Loss & Metabolic Balance",
    label: "Weight Loss & Metabolic Balance",
    description:
      "A holistic, medically supervised program that addresses the root causes of weight gain — not merely its symptoms.",
    availabilityMatrix: [
      { id: 1, duration: 3, available: false },
      { id: 2, duration: 7, available: true },
      { id: 3, duration: 14, available: true },
      { id: 4, duration: 21, available: true },
      { id: 5, duration: 28, available: true },
    ],
    heroImage: {
      alternativeText: "heroImage",
      mime: "image/jpeg",
      url: "/images/packages-detail-hero-1.jpg",
    },
    introductionTitle: "Introduction",
    introductionDescription: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "A holistic, medically supervised program that addresses the root causes of weight gain — not merely its symptoms.",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "Vitaarah combines Ayurvedic Panchakarma therapies, personalised nutrition, movement protocols, and metabolic diagnostics to reset your body's fat-burning intelligence.",
          },
        ],
      },
    ],
    introductionImage: {
      alternativeText: "package 1",
      mime: "image/jpeg",
      url: "/images/packages-intro-1.jpg",
    },
    benefitsTitle: "Key benefits",
    benefitsDescription: [
      {
        type: "list",
        format: "unordered",
        children: [
          {
            type: "list-item",
            children: [
              {
                type: "text",
                text: "Sustainable weight reduction without crash dieting",
              },
            ],
          },
          {
            type: "list-item",
            children: [
              {
                type: "text",
                text: "Improved insulin sensitivity and blood sugar regulation",
              },
            ],
          },
          {
            type: "list-item",
            children: [
              {
                type: "text",
                text: "Reduction in visceral fat and bloating",
              },
            ],
          },
          {
            type: "list-item",
            children: [
              {
                type: "text",
                text: "Enhanced energy levels and mental clarity",
              },
            ],
          },
          {
            type: "list-item",
            children: [
              {
                type: "text",
                text: "Restored digestive fire (Agni) for efficient metabolism",
              },
            ],
          },
          {
            type: "list-item",
            children: [
              {
                type: "text",
                text: "Improved liver function and detoxification",
              },
            ],
          },
        ],
      },
    ],
    includedTreatmentsTitle: "Included Treatments",
    includedTreatmentsDescription: [
      {
        type: "list",
        format: "unordered",
        children: [
          {
            type: "list-item",
            children: [
              {
                type: "text",
                text: "Udwarthanam (herbal powder massage) to break down fat deposits",
              },
            ],
          },
          {
            type: "list-item",
            children: [
              {
                type: "text",
                text: "Dhanyamladhara — warm medicated liquid stream therapy",
              },
            ],
          },
          {
            type: "list-item",
            children: [
              {
                type: "text",
                text: "Snehana (oleation) and Swedana (herbal steam)",
              },
            ],
          },
          {
            type: "list-item",
            children: [
              {
                type: "text",
                text: "Personalised Ayurvedic diet with metabolic tracking",
              },
            ],
          },
          {
            type: "list-item",
            children: [
              {
                type: "text",
                text: "Yoga & Pranayama for metabolic activation",
              },
            ],
          },
          {
            type: "list-item",
            children: [
              {
                type: "text",
                text: "Medical nutrition therapy with a clinical dietitian",
              },
            ],
          },
        ],
      },
    ],
    whoThisForTitle: "Who is This for?",
    whoThisForDescription: [
      {
        type: "list",
        format: "unordered",
        children: [
          {
            type: "list-item",
            children: [
              {
                type: "text",
                text: "Individuals with BMI > 25 seeking medically guided weight loss",
              },
            ],
          },
          {
            type: "list-item",
            children: [
              {
                type: "text",
                text: "Those with slow metabolism, hormonal weight gain, or PCOS",
              },
            ],
          },
          {
            type: "list-item",
            children: [
              {
                type: "text",
                text: "People who have plateaued on conventional diets",
              },
            ],
          },
          {
            type: "list-item",
            children: [
              {
                type: "text",
                text: "Guests wanting a sustainable, non-surgical approach",
              },
            ],
          },
          {
            type: "list-item",
            children: [
              {
                type: "text",
                text: "Those with pre-diabetes or insulin resistance",
              },
            ],
          },
        ],
      },
    ],
    packageIncludedTitle: "Package included",
    packageIncludedDescription: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "3-day: Metabolic assessment + introductory therapies. 7-day: Detox + dietary reset. 14–28 day: Full Panchakarma with measurable metabolic outcomes.",
          },
        ],
      },
    ],
  },

  availableDurations: [
    {
      id: 23,
      duration: 3,
      label: "3 Days",
    },
    {
      id: 23,
      duration: 7,
      label: "7 Days",
    },
    {
      id: 23,
      duration: 14,
      label: "14 Days",
    },
    {
      id: 23,
      duration: 21,
      label: "21 Days",
    },
    {
      id: 23,
      duration: 28,
      label: "28 Days",
    },
  ],
  faqSection: {
    id: 15,
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know before your session",
    faqs: [
      {
        id: 1,
        question: "How should I choose the right package duration?",
        answer: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "A 3-day package is ideal for a brief metabolic reset and introduction to therapies. A 7-day stay allows for a deeper cellular cleanse, while 14 to 28-day packages deliver the full therapeutic benefits of a traditional Panchakarma program with complete diagnostic monitoring."
              }
            ]
          }
        ]
      },
      {
        id: 2,
        question: "What is included in the diagnostic assessment?",
        answer: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "Every package includes an initial pulse diagnosis (Nadi Pariksha) by our resident Ayurvedic physicians, a lifestyle analysis, and a detailed metabolic review to tailor your nutrition, herbs, and therapies."
              }
            ]
          }
        ]
      },
      {
        id: 3,
        question: "Are meals and dietary plans provided?",
        answer: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "Yes, you will receive a personalized Ayurvedic diet chart aligned with your dosha constitution. Our team provides detailed guidelines and herbal supplements to support your digestive fire (Agni) during your course."
              }
            ]
          }
        ]
      }
    ]
  },
};

export default async function PackageDetail({ params }) {
  const { slug } = await params;

  const hero = {
    heroMedia: {
      alternativeText:
        local_data?.detailSection?.heroImage?.alternativeText ||
        local_data?.detailSection?.label,
      mime: "image/jpeg",
      url: local_data?.detailSection?.heroImage?.url,
    },
    title: local_data?.detailSection?.label,
  };

  return (
    <>
      <InnerHero data={hero} />

      <PackagesDetail
        availableDurations={local_data.availableDurations}
        data={local_data.detailSection}
      />

      <TreatmentFaq data={local_data.faqSection} />

      {/* {treatment.introductionTitle && (
        <section className="w-full block py-[30px] xl:py-[50px] 2xl:py-[60px] 3xl:py-[80px]">
          <div className="container">
            <div className="flex flex-wrap items-center gap-8">
              {treatment.introductionImage && (
                <div className="w-full lg:w-[40%]">
                  <Image
                    src={treatment.introductionImage.url}
                    alt={
                      treatment.introductionImage.alternativeText ||
                      treatment.label
                    }
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              )}
              <div className="flex-1">
                {treatment.introductionTitle && (
                  <h2 className="heading_1 text-[#1f1f1f] mb-4">
                    {treatment.introductionTitle}
                  </h2>
                )}
                {renderContent(treatment.introductionDescription)}
              </div>
            </div>
          </div>
        </section>
      )}

      {treatment.benefitsTitle && (
        <section className="w-full block py-[30px] xl:py-[50px] 2xl:py-[60px] 3xl:py-[80px] bg-[#faf7ed]">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="heading_1 text-[#1f1f1f] mb-6 text-center">
                {treatment.benefitsTitle}
              </h2>
              {renderContent(treatment.benefitsDescription)}
            </div>
          </div>
        </section>
      )}

      {treatment.includedTreatmentsTitle && (
        <section className="w-full block py-[30px] xl:py-[50px] 2xl:py-[60px] 3xl:py-[80px]">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="heading_1 text-[#1f1f1f] mb-6 text-center">
                {treatment.includedTreatmentsTitle}
              </h2>
              {renderContent(treatment.includedTreatmentsDescription)}
            </div>
          </div>
        </section>
      )}

      {treatment.whoThisForTitle && (
        <section className="w-full block py-[30px] xl:py-[50px] 2xl:py-[60px] 3xl:py-[80px] bg-[#faf7ed]">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="heading_1 text-[#1f1f1f] mb-6 text-center">
                {treatment.whoThisForTitle}
              </h2>
              {renderContent(treatment.whoThisForDescription)}
            </div>
          </div>
        </section>
      )}

      {treatment.packageIncludedTitle && (
        <section className="w-full block py-[30px] xl:py-[50px] 2xl:py-[60px] 3xl:py-[80px]">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="heading_1 text-[#1f1f1f] mb-6 text-center">
                {treatment.packageIncludedTitle}
              </h2>
              {renderContent(treatment.packageIncludedDescription)}
            </div>
          </div>
        </section>
      )}

      <section className="w-full block py-[30px] xl:py-[50px] 2xl:py-[60px] 3xl:py-[80px] bg-[#faf7ed]">
        <div className="container">
          <div className="text-center">
            <h2 className="heading_1 text-[#1f1f1f] mb-4">
              Ready to begin your journey?
            </h2>
            <p className="text_3 text-black mb-8 max-w-2xl mx-auto">
              Take the first step toward transformation. Book a consultation to
              discover the right treatment for your needs.
            </p>
            <Link
              href="/contact"
              className="group relative overflow-hidden bg-gradient-to-r from-[#A14962] via-[#C16C84] to-[#E9CBA3] text-white font-medium inline-flex items-center justify-center px-8 h-[45px] rounded-full transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_15px_40px_rgba(161,73,98,0.35)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 transition-transform duration-700 group-hover:translate-x-[250%]" />
              <span className="relative z-10">Book Consultation</span>
            </Link>
          </div>
        </div>
      </section> */}
    </>
  );
}
