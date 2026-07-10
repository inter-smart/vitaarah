import { getAboutPageQuery } from "@/lib/queries";
import { fetchAPI, buildQuery } from "@/lib/strapi";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import AboutIntelligence from "@/components/blocks/about/about-intelligence";
import AboutGuidence from "@/components/blocks/about/about-guidence";
import AboutClinic from "@/components/blocks/about/about-clinic";
import AboutApproach from "@/components/blocks/about/about-approach";
import AboutCredibility from "@/components/blocks/about/about-credibility";
import AboutMoto from "@/components/blocks/about/about-moto";
import HomeAbout from "@/components/blocks/home/home-about";
import InnerHero from "@/components/common/InnerHero";

// const local_data = {
//   id: 24,
//   documentId: "a67zp5r21a35cb8qlzrjp54s",
//   createdAt: "2026-06-05T05:56:45.609Z",
//   updatedAt: "2026-06-11T06:26:08.249Z",
//   publishedAt: "2026-06-11T06:26:08.337Z",
//   seo: {
//     id: 21,
//     metaTitle: "about page title",
//     metaDescription: "about page description ",
//     canonicalUrl: null,
//   },
//   hero: {
//     id: 25,
//     heroMedia: {
//       alternativeText: "about page title",
//       mime: "video/mp4",
//       // if video - mime: "video/mp4",
//       url: "/videos/about-hero.mp4",
//     },
//     title: "The Essence of Vitaarah",
//     description: "Where ancient wisdom meets refined healing experiences.",
//     button: {
//       slug: "about",
//       label: "Begin Your Journey",
//     },
//   },
//   about: {
//     id: 25,
//     title: "A Sanctuary for Conscious Living",
//     description: [
//       {
//         type: "paragraph",
//         children: [
//           {
//             type: "text",
//             text: "Vitaarah — derived from the Sanskrit root meaning to bestow abundance — is more than a name. It is a vow to honour the profound intelligence of life itself. Every treatment, every consultation, every moment within our walls is guided by a single belief: that true wellness arises not from suppression, but from restoration.",
//           },
//         ],
//       },
//     ],
//     mainImage: {
//       alternativeText: null,
//       mime: "image/jpeg",
//       url: "/images/about_img1.jpg",
//     },
//     secondaryImage: {
//       alternativeText: null,
//       mime: "image/jpeg",
//       url: "/images/about_img2.png",
//     },
//     companyMoto: [
//       {
//         id: 25,
//         title: "Rooted in Balance & Longevity",
//         description: [
//           {
//             type: "paragraph",
//             children: [
//               {
//                 type: "text",
//                 text: "Our philosophy honours the timeless Ayurvedic principle of Svastha — the state of being established in oneself — guiding every healing decision.",
//               },
//             ],
//           },
//         ],
//       },
//       {
//         id: 25,
//         title: "Holistic, Personalised Healing",
//         description: [
//           {
//             type: "paragraph",
//             children: [
//               {
//                 type: "text",
//                 text: "No two constitutions are alike. Our practitioners craft bespoke protocols that address your unique Prakriti — your essential nature — rather than symptoms alone.",
//               },
//             ],
//           },
//         ],
//       },
//       {
//         id: 25,
//         title: "Ancient Wisdom, Living Practice",
//         description: [
//           {
//             type: "paragraph",
//             children: [
//               {
//                 type: "text",
//                 text: "We bridge classical Ayurvedic texts with contemporary clinical understanding — preserving the depth of tradition while meeting you exactly where you are.",
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   services: {
//     id: 10,
//     title: "The Intelligence of Nature",
//     description: [
//       {
//         type: "paragraph",
//         children: [
//           {
//             type: "text",
//             text: "Ayurveda — the 5,000-year-old science of life — teaches that every being is a unique expression of five fundamental elements.",
//           },
//         ],
//       },
//     ],
//     services: [
//       {
//         id: 9,
//         documentId: "l7a1dl6zoq335nt5nal31j8o",
//         title: "Vata",
//         slug: "vata",
//         subTitle: "Air & Ether · Movement & Flow",
//         shortDescription:
//           "The principle of movement, Vata governs all circulation, respiration, and neural impulse. When balanced, it bestows creativity, vitality, and clarity of mind.",
//         createdAt: "2026-06-09T11:07:28.897Z",
//         updatedAt: "2026-06-09T11:07:28.897Z",
//         publishedAt: "2026-06-09T12:04:05.425Z",
//         icon: {
//           alternativeText: "icon",
//           mime: "image/jpeg",
//           url: "/images/nature_icon1.svg",
//         },
//         specs: [
//           {
//             id: 15,
//             title: "Creative",
//           },
//           {
//             id: 15,
//             title: "Mobile",
//           },
//           {
//             id: 15,
//             title: "Light",
//           },
//           {
//             id: 15,
//             title: "Quick",
//           },
//         ],
//       },
//       {
//         id: 9,
//         documentId: "l7a1dl6zoq335nt5nal31j8o",
//         title: "Pitta",
//         slug: "pitta",
//         subTitle: "Fire & Water · Transformation",
//         shortDescription:
//           "The principle of transformation, Pitta governs metabolism, digestion, and discernment. In harmony, it manifests as sharp intellect, courage, and radiant health.",
//         createdAt: "2026-06-09T11:07:28.897Z",
//         updatedAt: "2026-06-09T11:07:28.897Z",
//         publishedAt: "2026-06-09T12:04:05.425Z",
//         icon: {
//           alternativeText: "icon",
//           mime: "image/jpeg",
//           url: "/images/nature_icon2.svg",
//         },
//         specs: [
//           {
//             id: 15,
//             title: "Sharp",
//           },
//           {
//             id: 15,
//             title: "Intense",
//           },
//           {
//             id: 15,
//             title: "Warm",
//           },
//           {
//             id: 15,
//             title: "Focused",
//           },
//         ],
//       },
//       {
//         id: 9,
//         documentId: "l7a1dl6zoq335nt5nal31j8o",
//         title: "Kapha",
//         slug: "kapha",
//         subTitle: "Earth & Water · Structure",
//         shortDescription:
//           "The principle of cohesion, Kapha provides structure, lubrication, and stability. Balanced Kapha expresses itself as endurance, compassion, and steady nourishment.",
//         createdAt: "2026-06-09T11:07:28.897Z",
//         updatedAt: "2026-06-09T11:07:28.897Z",
//         publishedAt: "2026-06-09T12:04:05.425Z",
//         icon: {
//           alternativeText: "icon",
//           mime: "image/jpeg",
//           url: "/images/nature_icon3.svg",
//         },
//         specs: [
//           {
//             id: 15,
//             title: "Steady",
//           },
//           {
//             id: 15,
//             title: "Nurturing",
//           },
//           {
//             id: 15,
//             title: "Strong",
//           },
//           {
//             id: 15,
//             title: "Calm",
//           },
//         ],
//       },
//     ],
//   },
//   members: {
//     id: 11,
//     title: "Guided by Experience",
//     description: [
//       {
//         type: "paragraph",
//         children: [
//           {
//             type: "text",
//             text: "Each physician at Vitaarah brings decades of clinical wisdom, a reverence for classical Ayurvedic texts, and an unwavering commitment to the individuals in their care.",
//           },
//         ],
//       },
//     ],
//     members: [
//       {
//         id: 1,
//         name: "Dr. Suresh Nambiar",
//         designation: "MD (Ayurveda)",
//         expirence: "28 Years Practice",
//         specialisation: "Panchakarma Specialist",
//         description:
//           "The body always knows the way back to health. Our role is simply to clear the path.",
//         featuredImage: {
//           alternativeText: "icon",
//           mime: "image/jpeg",
//           url: "/images/docotor-1.png",
//         },
//       },
//       {
//         id: 2,
//         name: "Dr. Suresh Nambiar",
//         designation: "Soumya Satheesh",
//         expirence: "28 Years Practice",
//         specialisation: "Panchakarma Specialist",
//         description:
//           "The body always knows the way back to health. Our role is simply to clear the path.",
//         featuredImage: {
//           alternativeText: "icon",
//           mime: "image/jpeg",
//           url: "/images/docotor-2.png",
//         },
//       },
//       {
//         id: 3,
//         name: "Dr. Suresh Nambiar",
//         designation: "Soumya Satheesh",
//         expirence: "28 Years Practice",
//         specialisation: "Panchakarma Specialist",
//         description:
//           "The body always knows the way back to health. Our role is simply to clear the path.",
//         featuredImage: {
//           alternativeText: "icon",
//           mime: "image/jpeg",
//           url: "/images/docotor-2.png",
//         },
//       },
//     ],
//   },
//   certifications: {
//     id: 25,
//     title: "Trust & Credibility",
//     companyStatistic: [
//       {
//         id: 89,
//         valueCount: "28",
//         valueSuffix: "+",
//         label: "Years of Practice",
//       },
//       {
//         id: 90,
//         valueCount: "12",
//         valueSuffix: "k+",
//         label: "Lives Restored",
//       },
//       {
//         id: 91,
//         valueCount: "5",
//         valueSuffix: "",
//         label: "Certifications",
//       },
//     ],
//     certifications: [
//       {
//         featuredImage: {
//           alternativeText: "icon",
//           mime: "image/jpeg",
//           url: "/images/certificate-1.png",
//         },
//         title: "Certified Clinic",
//       },
//       {
//         featuredImage: {
//           alternativeText: "icon",
//           mime: "image/jpeg",
//           url: "/images/certificate-2.png",
//         },
//         title: "Quality Healthcare",
//       },
//       {
//         featuredImage: {
//           alternativeText: "icon",
//           mime: "image/jpeg",
//           url: "/images/certificate-3.png",
//         },
//         title: "Quality Management",
//       },
//       {
//         featuredImage: {
//           alternativeText: "icon",
//           mime: "image/jpeg",
//           url: "/images/certificate-4.png",
//         },
//         title: "Registered & Licensed",
//       },
//       {
//         featuredImage: {
//           alternativeText: "icon",
//           mime: "image/jpeg",
//           url: "/images/certificate-5.png",
//         },
//         title: "Quality Healthcare",
//       },
//     ],
//   },
//   clinicEnvironment: {
//     id: 25,
//     title: "Clinic Environment & Approach",
//     description: [
//       {
//         type: "paragraph",
//         children: [
//           {
//             type: "text",
//             text: "The Vitaarah clinic is conceived as an extension of nature itself — a sanctuary where every element, from the warm teakwood walls to the soft play of Kerala sunlight, has been chosen to encourage stillness and surrender. Fragrant with the scent of pure sesame and medicinal herbs, each treatment room is a private world. The temperature, lighting, and soundscape are curated to ease the nervous system before a single hand is laid in care.",
//           },
//         ],
//       },
//       {
//         type: "list",
//         format: "unordered",
//         children: [
//           {
//             type: "list-item",
//             children: [
//               {
//                 type: "text",
//                 text: "Private, sound-insulated treatment suites",
//               },
//             ],
//           },
//           {
//             type: "list-item",
//             children: [
//               {
//                 type: "text",
//                 text: "Traditional Kerala timber & natural stone interiors",
//               },
//             ],
//           },
//           {
//             type: "list-item",
//             children: [
//               {
//                 type: "text",
//                 text: "Dedicated pre- and post-treatment relaxation lounges",
//               },
//             ],
//           },
//           {
//             type: "list-item",
//             children: [
//               {
//                 type: "text",
//                 text: "Herbal dispensary with in-house preparation",
//               },
//             ],
//           },
//         ],
//       },
//     ],
//     featuredImage: {
//       alternativeText: null,
//       mime: "image/jpeg",
//       url: "/images/clinicImage.jpg",
//     },
//   },
//   approach: {
//     id: 25,
//     title: "Our Approach to Healing",
//     description: [
//       {
//         type: "paragraph",
//         children: [
//           {
//             type: "text",
//             text: "At Vitaarah, medicine is a relationship. Before any treatment begins, our physicians invest time in understanding your complete history — your constitution, your seasons of life, your particular language of imbalance.",
//           },
//         ],
//       },
//       {
//         type: "paragraph",
//         children: [
//           {
//             type: "text",
//             text: "We practise classical Ayurveda enhanced by modern diagnostic clarity, bridging ancient intelligence with contemporary rigour to offer outcomes that are both profound and measurable.",
//           },
//         ],
//       },
//     ],
//     approachs: [
//       {
//         id: 9,
//         title: "Pulse Diagnosis",
//         shortDescription:
//           "Nadi pariksha — reading the body's subtle intelligence through the pulse.",
//         icon: {
//           alternativeText: "icon",
//           mime: "image/jpeg",
//           url: "/images/approach_icon1.svg",
//         },
//       },
//       {
//         id: 9,
//         title: "Bespoke Protocols",
//         shortDescription:
//           "Every treatment plan is composed individually, never from a standard template.",
//         icon: {
//           alternativeText: "icon",
//           mime: "image/jpeg",
//           url: "/images/approach_icon2.svg",
//         },
//       },
//       {
//         id: 9,
//         title: "Seasonal Rhythms",
//         shortDescription:
//           "Therapies are aligned with ritu (seasonal cycles) for optimal efficacy.",
//         icon: {
//           alternativeText: "icon",
//           mime: "image/jpeg",
//           url: "/images/approach_icon3.svg",
//         },
//       },
//       {
//         id: 9,
//         title: "Compassionate Care",
//         shortDescription:
//           "Every interaction is held with the same care we bring to our therapies.",
//         icon: {
//           alternativeText: "icon",
//           mime: "image/jpeg",
//           url: "/images/approach_icon4.svg",
//         },
//       },
//     ],
//   },
// };

export async function generateMetadata() {
  const res = await fetchAPI(`/api/about-page?${getAboutPageQuery()}`);
  const data = res?.data;
  return buildMetadata(data?.seo, {
    title: data?.hero?.title,
    description: data?.hero?.description,
  });
}

export default async function AboutPage() {
  const res = await fetchAPI(`/api/about-page?${getAboutPageQuery()}`);
  const data = res?.data;

  if (!data) {
    notFound();
  }

  const {
    hero,
    about_section,
    services_section,
    members_section,
    certifications_section,
    clinic_environment_section,
    healing_approach_section,
  } = data;
  
  return (
    <>
      {hero && <InnerHero data={hero} />}
      {about_section && <HomeAbout data={about_section} />}
      {about_section && <AboutMoto data={about_section} />}
      {services_section && <AboutIntelligence data={services_section} />}
      {members_section && <AboutGuidence data={members_section} />}
      {certifications_section && (
        <AboutCredibility data={certifications_section} />
      )}
      {clinic_environment_section && (
        <AboutClinic data={clinic_environment_section} />
      )}
      {healing_approach_section && (
        <AboutApproach data={healing_approach_section} />
      )}
    </>
  );
}
