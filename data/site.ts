export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavLink[];
};

export const site = {
  name: "Smart Engineering Solution",
  shortName: "SES",
  legalName: "Maksood Husain",
  tradeName: "Smart Engineering Solution",
  category: "HVAC contractor and service provider",
  tagline: "HVAC contractor and service provider",
  description:
    "HVAC contractor in Gorakhpur for government, commercial, industrial, healthcare, hospitality and institutional projects. Design, supply, installation, testing, commissioning and AMC.",
  established: "2020",
  gstin: "09AZFPH0442M1ZB",
  udyam: "UDYAM-UP-32-0035759",
  email: "smartengineeringsolution9651@gmail.com",
  serviceArea:
    "Gorakhpur, Uttar Pradesh, Bihar and adjoining regions, with project reach extending towards Nepal subject to project requirements.",
  serviceAreaShort: "Gorakhpur and North India",
  whatsappNumber: "918840390617",
  whatsappMessage:
    "Hello Smart Engineering Solution, I would like to discuss an HVAC requirement.",
  people: [
    {
      name: "Maksood Hussain",
      role: "Managing Director",
      phone: "8840390617",
      email: "smartengineeringsolution9651@gmail.com",
    },
    {
      name: "Mohammed Anas",
      role: "Manager",
      phone: "7239059481",
      email: "smartengineeringsolution9651@gmail.com",
    },
  ],
  addresses: [
    {
      label: "Showroom",
      lines: [
        "Fatma Bypass Road",
        "Near Bharat Gas Agencies Office",
        "Gorakhpur, Uttar Pradesh",
      ],
      mapQuery: "Fatma Bypass Road, Gorakhpur, Uttar Pradesh",
    },
    {
      label: "Gorakhnath office",
      lines: [
        "Gorakhnath Mandir, Ansari Road",
        "Gorakhnath, Gorakhpur",
        "Uttar Pradesh 273015",
      ],
      mapQuery: "Gorakhnath Mandir, Ansari Road, Gorakhpur, Uttar Pradesh 273015",
    },
  ],
  credentials: [
    { label: "GSTIN", value: "09AZFPH0442M1ZB" },
    { label: "MSME Udyam", value: "UDYAM-UP-32-0035759" },
    { label: "Business type", value: "Proprietorship" },
    { label: "Established", value: "2020" },
  ],
  primaryKeywords: [
    "HVAC Contractor in Gorakhpur",
    "Government HVAC Contractor",
    "HVAC Company in Uttar Pradesh",
    "HVAC Contractor in India",
    "Commercial HVAC Contractor",
    "Industrial HVAC Contractor",
    "Hospital HVAC Contractor",
    "Hotel HVAC Contractor",
    "VRF Contractor",
    "VRV Contractor",
    "VRF VRV Installation",
    "Chiller Plant Contractor",
    "Centralized Air Conditioning Contractor",
    "AHU Installation Contractor",
    "HVAC Ducting Contractor",
    "HVAC Ventilation Contractor",
    "Basement Ventilation Contractor",
    "Stadium HVAC Contractor",
    "Railway HVAC Contractor",
    "Government HVAC Projects",
    "GeM HVAC Contractor",
    "HVAC Turnkey Projects",
    "HVAC AMC Services",
  ],
} as const;

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "All services",
        href: "/services",
        description: "Design, supply, installation, commissioning and maintenance.",
      },
      {
        label: "Turnkey HVAC solutions",
        href: "/solutions/turnkey",
        description: "One contract from heat load calculation to handover.",
      },
      {
        label: "AMC and maintenance",
        href: "/services/amc-maintenance",
        description: "Preventive, breakdown and operation and maintenance support.",
      },
      {
        label: "Government projects",
        href: "/government-projects",
        description: "Specification-led execution for public sector buildings.",
      },
      {
        label: "GeM and tendering",
        href: "/gem-tendering",
        description: "Participation through GeM and government e-tender platforms.",
      },
    ],
  },
  {
    label: "Sectors",
    href: "/industries",
    children: [
      { label: "All sectors", href: "/industries" },
      { label: "Government and public sector", href: "/industries/government-public-sector" },
      { label: "Hospital and healthcare", href: "/industries/hospital-healthcare" },
      { label: "Hotel and hospitality", href: "/industries/hotel-hospitality" },
      { label: "Commercial buildings", href: "/industries/commercial-buildings" },
      { label: "Industrial and factory", href: "/industries/industrial-factory" },
      { label: "Sports and recreation", href: "/industries/sports-recreation" },
      { label: "Education and institutional", href: "/industries/education-institutional" },
      { label: "Residential and high-rise", href: "/industries/residential-high-rise" },
      { label: "Specialised projects", href: "/industries/specialised-projects" },
    ],
  },
  {
    label: "Systems",
    href: "/hvac-systems",
    children: [
      { label: "All HVAC systems", href: "/hvac-systems" },
      { label: "VRF and VRV systems", href: "/hvac-systems/vrf-vrv" },
      { label: "Chiller plant systems", href: "/hvac-systems/chiller-plants" },
      { label: "AHU and ventilation", href: "/hvac-systems/ahu-ventilation" },
      { label: "Ducting and copper piping", href: "/hvac-systems/ducting-piping" },
      { label: "Precision and package units", href: "/hvac-systems/precision-package" },
      { label: "Ventilation and smoke control", href: "/hvac-systems/ventilation-smoke-control" },
      { label: "BMS and HVAC controls", href: "/hvac-systems/bms-controls" },
      { label: "Clean room and industrial HVAC", href: "/hvac-systems/cleanroom-industrial" },
      { label: "Equipment and products", href: "/products" },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    children: [
      { label: "Project gallery", href: "/projects" },
      { label: "Government HVAC projects", href: "/government-projects" },
      { label: "GeM and government tendering", href: "/gem-tendering" },
      { label: "Certifications", href: "/certifications" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  company: [
    { label: "About us", href: "/about" },
    { label: "Our services", href: "/services" },
    { label: "Project gallery", href: "/projects" },
    { label: "Certifications", href: "/certifications" },
    { label: "Contact us", href: "/contact" },
  ],
  work: [
    { label: "Government projects", href: "/government-projects" },
    { label: "GeM and tendering", href: "/gem-tendering" },
    { label: "Turnkey HVAC", href: "/solutions/turnkey" },
    { label: "AMC and maintenance", href: "/services/amc-maintenance" },
    { label: "Industries", href: "/industries" },
  ],
  systems: [
    { label: "VRF and VRV", href: "/hvac-systems/vrf-vrv" },
    { label: "Chiller plants", href: "/hvac-systems/chiller-plants" },
    { label: "AHU and ventilation", href: "/hvac-systems/ahu-ventilation" },
    { label: "Ducting and piping", href: "/hvac-systems/ducting-piping" },
    { label: "Equipment and products", href: "/products" },
  ],
};

export const sectorHighlights = [
  "Government and public sector",
  "Healthcare and hospitals",
  "Commercial and corporate",
  "Hotels and hospitality",
  "Industrial and factory",
  "Sports and recreation",
  "Education and institutional",
  "Residential and high-rise",
];
