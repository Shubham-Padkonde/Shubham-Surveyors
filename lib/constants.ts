export const SITE = {
  name: "Shubham Surveyors",
  tagline: "Precision surveys. Proven results. Trusted by India since 1994.",
  phone: "+91 98506 77816",
  phoneAlt: "+91 94225 44212",
  whatsappNumber: "919850677816",
  email: "shubhamsurveyors12@gmail.com",
  address:
    "B 1 Wing, Flat No. 211, Forest Castle, Vetal Nagar, Ambegaon (Bk), Pune - 411046",
  addressLonavala:
    "Shop.13,14,15, Municipal Complex, Siddharth Nagar, Lonavala, Maharashtra 410401",
  founded: "1994",
  yearsActive: new Date().getFullYear() - 1994,
  projectsDelivered: 5000,

  url: "https://shubhamsurveyors.com",
  googleBusinessUrl: "https://share.google/jhxqVbuElVFH4Ocna",
  sameAs: [
    "https://www.justdial.com/Pune/Shubham-Surveyors-Near-Bhairavnath-Temple-Ambegaon-Budruk/020PXX20-XX20-141128182743-V7E4_BZDET",
    "https://www.indiamart.com/shubham-surveyors/",
    "https://share.google/jhxqVbuElVFH4Ocna",
  ],
} as const;

export const PRICING = {
  boundary: {
    min: 5000,
    max: 10000,
    unit: "acre" as const,
    label: "Boundary Survey",
  },
  total_station: {
    min: 5000,
    max: 20000,
    unit: "acre" as const,
    label: "Total Station",
  },
  rtk_dgps: { min: 8000, max: 30000, unit: "acre" as const, label: "RTK DGPS" },
  highway: {
    min: 2500,
    max: 4000,
    unit: "km" as const,
    label: "Highway Corridor",
  },
  layout_rera: {
    min: 10000,
    max: 25000,
    unit: "acre" as const,
    label: "Layout / RERA",
  },
  gis: { min: 15000, max: 40000, unit: "acre" as const, label: "GIS Mapping" },
};
