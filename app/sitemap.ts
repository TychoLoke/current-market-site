import type { MetadataRoute } from "next";

const siteUrl = "https://currentmarketlab.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "about", "capabilities", "projects", "insights", "contact"]; // relative paths

  return routes.map((route) => ({
    url: `${siteUrl}/${route}`.replace(/\/$/, ""),
    lastModified: new Date()
  }));
}
