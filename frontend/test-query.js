const qs = require('qs');
async function testQuery(query) {
  const url = 'http://localhost:1337/api/home-page?' + qs.stringify({ populate: query }, { encodeValuesOnly: true });
  const res = await fetch(url);
  const json = await res.json();
  if (json.error) {
    throw new Error(JSON.stringify(json.error));
  }
  return true;
}
async function run() {
  const query = {};
  await testQuery(query);
  console.log('Base query OK');
  const sections = {
    hero: { hero_media: true, primary_button: { populate: { icon: true } }, secondary_button: { populate: { icon: true } } },
    home_about_section: { main_image: true, secondary_image: true, button: { populate: { icon: true } }, about_statistic: true },
    home_conditions_section: { condition_item: { populate: { icon: true, background_video: true, related_condition: true } } },
    home_packages_section: { home_package_item: { populate: { background_video: true, related_package: { populate: { featured_image: true } } } } },
    home_program_section: { home_program_item: { populate: { program_attractions: { populate: { icon: true } }, related_program: { populate: { hero_media: true } } } } },
    home_testimonials_section: { testimonials: { populate: { author_image: true, video_testimonial: true } } },
    home_members_section: { members: { populate: { thumbnail_image: true, featured_image: true } } },
    home_blogs_section: { blogs: { populate: { featured_image: true } } },
    seo: { og_image: true }
  };
  for (const [section, populate] of Object.entries(sections)) {
    try {
      await testQuery({ [section]: { populate } });
      console.log(section + ' OK');
    } catch (e) {
      console.log(section + ' FAILED: ' + e.message);
    }
  }
}
run().catch(console.error);
