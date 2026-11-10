export type Service = {
  slug: string;
  title: string;
  summary: string;
  deliverables: string[];
  href: string;
  image?: string;
  imageAlt?: string;
};

export const coreServices: Service[] = [
  {
    slug: "design-engineering",
    title: "HVAC design and engineering",
    summary:
      "Heat load calculation, system selection, equipment schedules, BOQ preparation and technical specifications.",
    deliverables: [
      "Heat load calculation",
      "System planning and equipment selection",
      "BOQ and technical specifications",
      "Layout and routing drawings",
      "Tender and tender clarification support",
    ],
    href: "/services",
    image: "/images/showroom.jpg",
    imageAlt: "HVAC equipment and product display at the Smart Engineering Solution showroom",
  },
  {
    slug: "equipment-supply",
    title: "Equipment supply",
    summary:
      "Supply of air conditioning, ventilation and control equipment matched to the approved specification.",
    deliverables: [
      "VRF and VRV equipment",
      "Chillers, AHUs, FCUs and package units",
      "Ventilation fans and dampers",
      "Controls and accessories",
      "Material coordination and delivery",
    ],
    href: "/products",
    image: "/images/showroom.jpg",
    imageAlt: "Air conditioning units and components displayed on showroom shelves",
  },
  {
    slug: "installation",
    title: "Installation and execution",
    summary:
      "On-site installation of refrigerant, air side, water side, ventilation and control works.",
    deliverables: [
      "VRF and VRV installation",
      "Chiller plant installation",
      "AHU, FAHU, TFA and FCU installation",
      "Duct fabrication and installation",
      "Copper piping and insulation",
      "Electrical and control wiring",
    ],
    href: "/solutions/turnkey",
    image: "/images/deeksha-bhawan.jpg",
    imageAlt: "Educational building with modern facade and glazing",
  },
  {
    slug: "testing-commissioning",
    title: "Testing and commissioning",
    summary:
      "System checks, pressure testing, air balancing, performance verification and documented handover.",
    deliverables: [
      "Pressure and leak testing",
      "Evacuation and refrigerant charging",
      "Air balancing",
      "Equipment and control checks",
      "Performance testing",
      "Handover documentation",
    ],
    href: "/solutions/turnkey",
    image: "/images/auditorium.jpg",
    imageAlt: "Auditorium interior with air distribution and lighting",
  },
  {
    slug: "amc-maintenance",
    title: "AMC and maintenance",
    summary:
      "Preventive maintenance, breakdown support, operation and maintenance, upgrades and replacements.",
    deliverables: [
      "Preventive maintenance visits",
      "Breakdown maintenance",
      "Annual maintenance contracts",
      "Operation and maintenance support",
      "System upgrades and replacement",
      "Energy efficiency improvements",
    ],
    href: "/services/amc-maintenance",
    image: "/images/commercial-glass.jpg",
    imageAlt: "Commercial building with a curved entrance canopy and glass facade",
  },
  {
    slug: "government-tendering",
    title: "Government and GeM contracting",
    summary:
      "Participation in GeM and government e-tenders, with execution against approved BOQs and specifications.",
    deliverables: [
      "GeM participation",
      "Government e-tender participation",
      "BOQ-based execution",
      "Technical specification compliance",
      "Testing, commissioning and handover",
    ],
    href: "/gem-tendering",
    image: "/images/aiims-gorakhpur.jpg",
    imageAlt: "Government medical institution campus in Gorakhpur",
  },
];

export const completeServices = [
  "HVAC designing and engineering",
  "Heat load calculation",
  "HVAC system planning",
  "Equipment selection",
  "HVAC equipment supply",
  "HVAC installation",
  "VRF and VRV installation",
  "Chiller plant installation",
  "AHU installation",
  "Duct fabrication and installation",
  "Copper piping installation",
  "Refrigerant piping",
  "Ventilation installation",
  "Electrical and control wiring",
  "Testing and commissioning",
  "HVAC system balancing",
  "HVAC automation and integration",
  "AC servicing and repairing",
  "Preventive maintenance",
  "Breakdown maintenance",
  "Annual maintenance contract",
  "HVAC upgradation",
  "HVAC replacement",
  "Energy efficiency improvements",
  "Technical consultancy",
  "Operation and maintenance",
];

export const processSteps = [
  {
    title: "Requirement and site review",
    description:
      "We review the building use, drawings, occupancy, available plant space and project timeline.",
  },
  {
    title: "Design and BOQ",
    description:
      "Heat load calculation, system selection, equipment schedule, BOQ and technical specifications are prepared.",
  },
  {
    title: "Supply and installation",
    description:
      "Approved equipment and materials are supplied and installed with coordinated site execution.",
  },
  {
    title: "Testing and commissioning",
    description:
      "Pressure testing, air balancing, control checks and performance verification are completed.",
  },
  {
    title: "Handover and support",
    description:
      "Documentation is handed over and maintenance or AMC support can continue after commissioning.",
  },
];

export const whyChoose = [
  {
    title: "Specialised HVAC contractor",
    description:
      "Our work is focused on heating, ventilation and air conditioning, not general building services.",
  },
  {
    title: "Government tender participation",
    description:
      "We participate in GeM and government e-tenders and work to approved BOQs and technical specifications.",
  },
  {
    title: "Complete scope under one contract",
    description:
      "Design, supply, installation, testing, commissioning and maintenance can be handled by one team.",
  },
  {
    title: "Technical planning before execution",
    description:
      "Heat load, equipment selection, routing and BOQ are resolved before material reaches site.",
  },
  {
    title: "Testing is part of the job",
    description:
      "Pressure testing, air balancing and commissioning are planned into the project, not added at the end.",
  },
  {
    title: "After-sales support",
    description:
      "Preventive maintenance, breakdown support and AMC options keep the installed system serviceable.",
  },
];

export const turnkeyScope = [
  "HVAC design and engineering",
  "Heat load calculation",
  "BOQ preparation",
  "Technical specifications",
  "Equipment procurement",
  "Supply of HVAC equipment",
  "Installation and execution",
  "Ducting work",
  "Refrigerant piping",
  "Electrical and control work",
  "Testing and commissioning",
  "Performance testing",
  "Handover and documentation",
  "Operation and maintenance",
];

export const projectDocuments = [
  "Tender ID or GeM bid number",
  "Approved BOQ or item schedule",
  "Technical specifications",
  "Architectural and HVAC drawings",
  "Site address and access details",
  "Completion timeline",
  "Preferred equipment brands, if specified",
];
