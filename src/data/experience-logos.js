// Marks shown beside Info-page experience rows.
// GLG’s nav wordmark is painted in the page ink (#f2f2f2); the paths are from glg.com.
// The IB file is the white logo published by the International Baccalaureate.
// CIS Beijing’s lockup is dark, so that row uses a light plate.

import akd from "../assets/logos/akd.png";
import glg from "../assets/logos/glg.svg";
import matata from "../assets/logos/matata.png";
import ibo from "../assets/logos/ibo.svg";
import cisBeijing from "../assets/logos/cis-beijing.png";

export const experienceLogos = {
  akd: { image: akd },
  glg: { image: glg, width: 77, height: 31 },
  matata: { image: matata },
  ibo: { image: ibo, width: 198, height: 198 },
  cisb: { image: cisBeijing, light: true },
};
