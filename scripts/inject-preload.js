import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Vite plugin to inject preload link for the latest release image
 */
export function injectReleasePreload() {
  let latestReleaseImg = null;

  return {
    name: "inject-release-preload",

    configResolved() {
      try {
        // Read releases.json
        const releasesPath = resolve(__dirname, "../public/releases.json");
        const releasesData = JSON.parse(readFileSync(releasesPath, "utf-8"));

        // Get the latest release image
        if (releasesData.releases && releasesData.releases.length > 0) {
          const latestRelease =
            releasesData.releases[releasesData.releases.length - 1];
          latestReleaseImg = latestRelease.releaseImg;
          console.log(`✓ Latest release image: ${latestReleaseImg}`);
        }
      } catch (error) {
        console.error("Error reading releases.json:", error);
      }
    },

    transformIndexHtml(html) {
      if (!latestReleaseImg) {
        return html;
      }

      // Inject preload link before </head>
      const preloadLink = `    <!-- Preload Hero Image (Auto-generated) -->
    <link rel="preload" as="image" href="/assets/img/${latestReleaseImg}" fetchpriority="high" />
  </head>`;

      return html.replace("</head>", preloadLink);
    },
  };
}
