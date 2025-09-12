export interface Project {
  title: string;
  projectSlug: string;
  shortDescription: string;
  url: string;
  techStacks: string[];
  thumbnail: string;
  video?: boolean;
}

export const projects = [
  {
    title: "Indramas",
    projectSlug: "indramas",
    shortDescription: "shortDescription 1",
    url: "https://indramas.flonkin.com/",
    techStacks: [],
    thumbnail: "/images/projects/homepage-indramas.png",
  },
  {
    title: "Personal Website",
    projectSlug: "personal-website",
    shortDescription: "shortDescription 2",
    url: "https://indramas.flonkin.com/",
    techStacks: [],
    thumbnail: "/images/projects/homepage-portfolio.png",
  },
  {
    title: "Stokku",
    projectSlug: "stokku",
    shortDescription: "shortDescription 1",
    url: "https://stokku.netlify.app/",
    techStacks: [],
    thumbnail: "",
  },
  {
    title: "GAEA",
    projectSlug: "gaea",
    shortDescription: "shortDescription 2",
    url: "https://gaea.co.id/",
    techStacks: [],
    thumbnail: "/images/projects/homepage-gaea.png",
  },
  {
    title: "Tocoffee Landing Page",
    projectSlug: "tocoffee",
    shortDescription: "shortDescription 2",
    url: "https://try.toco.id/tocoffee",
    techStacks: [],
    thumbnail: "/images/projects/homepage-tocoffee.png",
  },
  {
    title: "Toco Seller Landing Page",
    projectSlug: "toco-seller",
    shortDescription: "shortDescription 2",
    url: "https://try.toco.id/seller",
    techStacks: [],
    thumbnail: "/images/projects/homepage-tocoseller.mp4",
    video: true,
  },
];
