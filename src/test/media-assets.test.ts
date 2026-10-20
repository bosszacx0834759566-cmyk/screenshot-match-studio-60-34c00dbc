import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";

import { media } from "../media";
const assetDir = join(__dirname, "../assets");
const delivery = readFileSync(join(__dirname, "../media.ts"), "utf8");
const pointers = [...delivery.matchAll(/@\/assets\/([^"\n]+\.asset\.json)/g)].flatMap((match) => match[1] ? [match[1]] : []);

describe("media assets", () => {
  for (const name of pointers) {
    it(`${name} belongs to the current project`, () => {
      const pointer = JSON.parse(readFileSync(join(assetDir, name), "utf8"));
      expect(pointer.project_id).toBe("3c1139a2-97d9-49f6-bc2e-0db9f761c1f7");
      expect(pointer.size).toBeGreaterThan(1024);
      expect(pointer.url).toContain(`/__l5e/assets-v1/${pointer.asset_id}/`);
    });
  }

  it("the homepage and menu share the original video through the delivery map", () => {
    const route = readFileSync(join(__dirname, "../routes/index.tsx"), "utf8");
    expect(route).toContain("const issVideo = media.video");
    expect(route.match(/src=\{issVideo\}/g)).toHaveLength(2);
    expect(media.video).toContain("performance-iss-video.mp4");
  });

  it("optimized portraits are smaller than the original displayed files", () => {
    const limits = { "boss-portrait-771.webp": 545487, "goddard-1464-optimized.webp": 172925, "oppenheimer-1319-optimized.webp": 258233 };
    for (const [name, originalSize] of Object.entries(limits)) {
      const pointer = JSON.parse(readFileSync(join(assetDir, `${name}.asset.json`), "utf8"));
      expect(pointer.size).toBeLessThan(originalSize);
    }
    expect(media.boss.srcSet).toContain("480w");
    expect(media.goddard.srcSet).toContain("960w");
    expect(media.oppenheimer.srcSet).toContain("960w");
  });
});
