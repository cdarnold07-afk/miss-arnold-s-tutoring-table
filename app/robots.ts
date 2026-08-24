import type {MetadataRoute} from "next";
export const dynamic="force-static";

export default function robots():MetadataRoute.Robots{
  return {
    rules:{userAgent:"*",allow:"/"},
    sitemap:"https://cdarnold07-afk.github.io/miss-arnold-s-tutoring-table/sitemap.xml",
  };
}
