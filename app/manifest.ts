import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "chrisbrett.info",
    short_name: "chrisbrett.info",
    icons: [
      {
        src: "/images/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#191D21",
    background_color: "#191D21",
    display: "standalone",
  };
}
