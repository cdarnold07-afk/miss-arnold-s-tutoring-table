import type {MetadataRoute} from "next";
export const dynamic="force-static";

const base="https://cdarnold07-afk.github.io/miss-arnold-s-tutoring-table";
const routes=["","/services","/approach","/locations","/pricing","/about","/faq","/preassessment","/contact"];

export default function sitemap():MetadataRoute.Sitemap{
  return routes.map((route,index)=>({
    url:`${base}${route}/`,
    lastModified:new Date("2026-08-24"),
    changeFrequency:index===0?"weekly":"monthly",
    priority:index===0?1:(route==="/services"||route==="/locations"?0.9:0.7),
  }));
}
