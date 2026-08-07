import type { Metadata } from "next";

export const SITE_URL = "https://www.bricksnbuilders.com";
export const SITE_NAME = "Bricks N Builders";
export const DEFAULT_OG_IMAGE = "/img/logo.png";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
}: PageMetadataInput): Metadata {
  const canonical = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_PK",
      type: "website",
      images: [{ url: image, alt: `${SITE_NAME} - ${title}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
