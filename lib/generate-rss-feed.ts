import path from "path";
import fs from "fs";
import { Feed } from "feed";

const MDX_DIR = "changelogs";

export const generateRssFeed = async () => {
  const siteURL = "https://blog.howmuchrent.com";
  const date = new Date();
  const author = {
    name: "HowMuchRent",
    link: "https://twitter.com/howmuchrenthq",
  };

  const feed = new Feed({
    title: "HowMuchRent Changelog",
    description: "How HowMuchRent gets better every week",
    id: siteURL,
    link: siteURL,
    image: `https://d365acqfolvjq6.cloudfront.net/assets/favicon-32x32.png`,
    favicon: `https://d365acqfolvjq6.cloudfront.net/assets/favicon-32x32.png`,
    copyright: `All rights reserved ${date.getFullYear()}, HowMuchRent`,
    updated: date, // today's date
    generator: "Feed for HowMuchRent changelog",
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`, // xml format
      json: `${siteURL}/rss/feed.json`, // json fromat
    },
    author,
  });

  const changelogFileObjects = fs.readdirSync(path.join(process.cwd(), "pages", MDX_DIR), {
    withFileTypes: true,
  });

  const changelogFiles = await Promise.allSettled(
    changelogFileObjects.map((file) => import(`../pages/changelogs/${file.name}`))
  );

  const changelogsMeta = changelogFiles
    .map((res) => res.status === "fulfilled" && res.value.meta)
    .filter((item) => item)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  changelogsMeta.forEach((changelog) => {
    const { title, description, content, publishedAt, slug, headerImage } = changelog;
    const url = `${siteURL}/changelogs/${slug}`;
    feed.addItem({
      title: title,
      id: url,
      link: url,
      description: description,
      content: content,
      image: headerImage,
      date: new Date(publishedAt),
    });
  });

  console.debug("-------------------");
  console.debug("Generating RSS feed");
  console.debug("-------------------");
  const Rssfeed = feed.rss2();

  console.debug("-------------------");
  console.debug("Writing RSS feed to public/rss.xml");
  console.debug("-------------------");

  fs.writeFileSync("./public/rss.xml", Rssfeed, "utf8");
};
