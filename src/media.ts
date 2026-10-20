import boss from "@/assets/boss-portrait-771.webp.asset.json";
import bossSmall from "@/assets/boss-portrait-480.webp.asset.json";
import goddard from "@/assets/goddard-1464-optimized.webp.asset.json";
import goddardSmall from "@/assets/goddard-480-optimized.webp.asset.json";
import goddardMedium from "@/assets/goddard-960-optimized.webp.asset.json";
import oppenheimer from "@/assets/oppenheimer-1319-optimized.webp.asset.json";
import oppenheimerSmall from "@/assets/oppenheimer-480-optimized.webp.asset.json";
import oppenheimerMedium from "@/assets/oppenheimer-960-optimized.webp.asset.json";
import video from "@/assets/performance-iss-video.mp4.asset.json";
import poster from "@/assets/iss-poster.webp.asset.json";

// Immutable current-project derivatives; original pointers remain archived.
export const media = {
  boss: { src: boss.url, srcSet: `${bossSmall.url} 480w, ${boss.url} 771w`, width: 771, height: 799 },
  goddard: { src: goddard.url, srcSet: `${goddardSmall.url} 480w, ${goddardMedium.url} 960w, ${goddard.url} 1464w`, width: 1464, height: 1920 },
  oppenheimer: { src: oppenheimer.url, srcSet: `${oppenheimerSmall.url} 480w, ${oppenheimerMedium.url} 960w, ${oppenheimer.url} 1319w`, width: 1319, height: 1920 },
  video: video.url,
  poster: poster.url,
};