export type ProjectSector =
  | "government"
  | "healthcare"
  | "commercial"
  | "hospitality"
  | "sports"
  | "education";

export type Project = {
  id: string;
  src: string;
  alt: string;
  title: string;
  caption: string;
  sector: ProjectSector;
  shape: "tall" | "wide" | "regular";
};

export const projectSectorLabels: Record<ProjectSector, string> = {
  government: "Government and public sector",
  healthcare: "Healthcare",
  commercial: "Commercial",
  hospitality: "Hospitality",
  sports: "Sports",
  education: "Education",
};

export const projects: Project[] = [
  {
    id: "showroom",
    src: "/images/showroom.jpg",
    alt: "Smart Engineering Solution showroom with wall-mounted air conditioning equipment",
    title: "Showroom and equipment display",
    caption:
      "HVAC sales, service and project display at Fatma Bypass Road, Gorakhpur.",
    sector: "commercial",
    shape: "tall",
  },
  {
    id: "aiims",
    src: "/images/aiims-gorakhpur.jpg",
    alt: "All India Institute of Medical Sciences Gorakhpur entrance",
    title: "Government healthcare campus",
    caption:
      "Multi-block medical institution with continuous air conditioning and ventilation demand.",
    sector: "healthcare",
    shape: "regular",
  },
  {
    id: "auditorium",
    src: "/images/auditorium.jpg",
    alt: "Large tiered auditorium with concealed ceiling air distribution",
    title: "Auditorium air distribution",
    caption:
      "Tiered seating, high occupancy and concealed supply and return air paths.",
    sector: "government",
    shape: "wide",
  },
  {
    id: "cinema-imax",
    src: "/images/cinema-imax.jpg",
    alt: "Large-format cinema auditorium with dark acoustic walls",
    title: "Large-format cinema",
    caption:
      "High-volume auditorium cooling with acoustic ceiling coordination.",
    sector: "commercial",
    shape: "wide",
  },
  {
    id: "cinema-red",
    src: "/images/cinema-red.jpg",
    alt: "Multiplex auditorium with red seating and accent lighting",
    title: "Multiplex auditorium",
    caption:
      "Auditorium cooling and air distribution for a seated audience.",
    sector: "commercial",
    shape: "regular",
  },
  {
    id: "badminton-hall",
    src: "/images/badminton-hall.jpg",
    alt: "Indoor badminton hall with multiple courts and high roof",
    title: "Indoor sports hall",
    caption:
      "High-volume sports hall with ventilation and lighting coordination.",
    sector: "sports",
    shape: "wide",
  },
  {
    id: "badminton-hall-2",
    src: "/images/badminton-hall-2.jpg",
    alt: "Badminton players on indoor courts under high ceiling lights",
    title: "Badminton training facility",
    caption:
      "Air movement and fresh air for an active indoor sports floor.",
    sector: "sports",
    shape: "wide",
  },
  {
    id: "badminton-hall-3",
    src: "/images/badminton-hall-3.jpg",
    alt: "Indoor badminton court with players and high roof structure",
    title: "Indoor games complex",
    caption:
      "Court level air distribution in a large steel-roof sports building.",
    sector: "sports",
    shape: "wide",
  },
  {
    id: "stadium-night",
    src: "/images/stadium-night.jpg",
    alt: "Floodlit athletics stadium with track and football field at night",
    title: "Floodlit sports stadium",
    caption:
      "Stadium infrastructure with spectator stands and field lighting.",
    sector: "sports",
    shape: "wide",
  },
  {
    id: "university",
    src: "/images/university.jpg",
    alt: "University campus building with landscaped frontage",
    title: "University campus",
    caption:
      "Institutional building with lecture, library and administrative areas.",
    sector: "education",
    shape: "wide",
  },
  {
    id: "academy",
    src: "/images/academy.jpg",
    alt: "Multi-storey coaching academy building with glazed facade",
    title: "Coaching academy",
    caption:
      "Multi-floor teaching building with classrooms and computer labs.",
    sector: "education",
    shape: "regular",
  },
  {
    id: "deeksha-bhawan",
    src: "/images/deeksha-bhawan.jpg",
    alt: "Deeksha Bhawan educational building with orange facade",
    title: "Institutional building",
    caption:
      "Campus building with public areas, offices and learning spaces.",
    sector: "education",
    shape: "regular",
  },
  {
    id: "deeksha-construction",
    src: "/images/deeksha-construction.jpg",
    alt: "Education building under construction with site activity",
    title: "Campus project under construction",
    caption:
      "Site coordination during a building construction phase.",
    sector: "education",
    shape: "tall",
  },
  {
    id: "residency",
    src: "/images/residency.jpg",
    alt: "Hotel, banquet and restaurant building with patterned facade",
    title: "Hotel and banquet building",
    caption:
      "Guest rooms, banquet areas and food service under one roof.",
    sector: "hospitality",
    shape: "tall",
  },
  {
    id: "hotel-ss-tower",
    src: "/images/hotel-ss-tower.jpg",
    alt: "Hotel and restaurant building with glass facade",
    title: "Hotel and restaurant",
    caption:
      "Hospitality building with guest rooms, restaurant and retail frontage.",
    sector: "hospitality",
    shape: "wide",
  },
  {
    id: "greenland",
    src: "/images/greenland.jpg",
    alt: "High-rise mixed-use building with lit canopy at dusk",
    title: "Mixed-use hospitality tower",
    caption:
      "Multi-storey building combining hospitality and commercial spaces.",
    sector: "hospitality",
    shape: "tall",
  },
  {
    id: "commercial-glass",
    src: "/images/commercial-glass.jpg",
    alt: "Commercial building with blue glass facade and curved entrance canopy",
    title: "Commercial building",
    caption:
      "Glazed commercial building with a large conditioned floor plate.",
    sector: "commercial",
    shape: "wide",
  },
  {
    id: "indianoil",
    src: "/images/indianoil.jpg",
    alt: "IndianOil public sector office building with louvred facade",
    title: "Public sector office building",
    caption:
      "Corporate office building for a public sector undertaking.",
    sector: "government",
    shape: "regular",
  },
];

export const projectFilters: { value: "all" | ProjectSector; label: string }[] = [
  { value: "all", label: "All projects" },
  { value: "government", label: "Government" },
  { value: "healthcare", label: "Healthcare" },
  { value: "commercial", label: "Commercial" },
  { value: "hospitality", label: "Hospitality" },
  { value: "sports", label: "Sports" },
  { value: "education", label: "Education" },
];
