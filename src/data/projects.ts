import commercial1 from "@/assets/project-commercial-1.jpg";
import residential1 from "@/assets/project-residential-1.jpg";
import interior1 from "@/assets/project-interior-1.jpg";
import multifamily1 from "@/assets/project-multifamily-1.jpg";

export type ProjectCategory = "Commercial" | "Residential (multi-family)" | "Residential (single family)";
export type ServiceType = "Construction Management" | "Design-Build" | "Project Management";

export interface Project {
  slug: string;
  title: string;
  location: string;
  category: ProjectCategory;
  serviceTypes: ServiceType[];
  role: string;
  description: string;
  heroImage: string;
  galleryImages: string[];
}

const imgs = [commercial1, residential1, interior1, multifamily1];
const pick = (i: number) => imgs[i % imgs.length];
const gallery = (i: number) => [imgs[i % 4], imgs[(i + 1) % 4], imgs[(i + 2) % 4], imgs[(i + 3) % 4]];

export const projects: Project[] = [
  {
    slug: "marine-gateway-tower",
    title: "Marine Gateway Tower",
    location: "Vancouver, BC",
    category: "Commercial",
    serviceTypes: ["Construction Management"],
    role: "Construction Manager",
    description: "A 30-storey mixed-use commercial tower featuring retail at grade, Class A office space, and a rooftop amenity deck. K. Chen provided full construction management services from preconstruction through occupancy, coordinating over 40 subtrades and maintaining an accelerated schedule.",
    heroImage: pick(0),
    galleryImages: gallery(0),
  },
  {
    slug: "olympic-village-residences",
    title: "Olympic Village Residences",
    location: "Vancouver, BC",
    category: "Residential (multi-family)",
    serviceTypes: ["Design-Build"],
    role: "Design-Build Lead",
    description: "A collection of 120 residential units across two mid-rise buildings in Vancouver's Olympic Village neighbourhood. The project featured sustainable design elements, green roofs, and high-efficiency building systems throughout.",
    heroImage: pick(3),
    galleryImages: gallery(1),
  },
  {
    slug: "shaughnessy-estate",
    title: "Shaughnessy Estate",
    location: "Vancouver, BC",
    category: "Residential (single family)",
    serviceTypes: ["Construction Management"],
    role: "Construction Manager",
    description: "A 12,000 sq ft custom estate in the prestigious Shaughnessy neighbourhood. This heritage-inspired residence features handcrafted millwork, imported stone, and integrated smart home technology throughout.",
    heroImage: pick(1),
    galleryImages: gallery(2),
  },
  {
    slug: "metrotown-office-complex",
    title: "Metrotown Office Complex",
    location: "Burnaby, BC",
    category: "Commercial",
    serviceTypes: ["Project Management"],
    role: "Project Manager",
    description: "A two-building office campus totalling 180,000 sq ft of leasable space adjacent to Metrotown. K. Chen provided project management services overseeing design consultants, budgeting, scheduling, and tenant coordination.",
    heroImage: pick(0),
    galleryImages: gallery(3),
  },
  {
    slug: "ubc-faculty-housing",
    title: "UBC Faculty Housing",
    location: "Vancouver, BC",
    category: "Residential (multi-family)",
    serviceTypes: ["Construction Management"],
    role: "Construction Manager",
    description: "A 6-storey wood-frame residential building providing 85 faculty housing units at the University of British Columbia. The project required careful coordination with university operations and adherence to UBC's sustainability guidelines.",
    heroImage: pick(3),
    galleryImages: gallery(0),
  },
  {
    slug: "west-point-grey-residence",
    title: "West Point Grey Residence",
    location: "Vancouver, BC",
    category: "Residential (single family)",
    serviceTypes: ["Design-Build"],
    role: "Design-Build Lead",
    description: "A contemporary West Coast residence featuring floor-to-ceiling glazing, natural cedar cladding, and panoramic ocean views. The 6,500 sq ft home was designed and built as a turnkey project for a discerning homeowner.",
    heroImage: pick(1),
    galleryImages: gallery(1),
  },
  {
    slug: "gastown-heritage-lofts",
    title: "Gastown Heritage Lofts",
    location: "Vancouver, BC",
    category: "Commercial",
    serviceTypes: ["Design-Build"],
    role: "Design-Build Lead",
    description: "Adaptive reuse of a heritage warehouse building in Gastown into 24 loft-style commercial units. The project required sensitive restoration of original brick and timber elements while integrating modern building systems.",
    heroImage: pick(2),
    galleryImages: gallery(2),
  },
  {
    slug: "kitsilano-townhomes",
    title: "Kitsilano Townhomes",
    location: "Vancouver, BC",
    category: "Residential (multi-family)",
    serviceTypes: ["Construction Management"],
    role: "Construction Manager",
    description: "A row of 16 three-storey townhomes in Kitsilano, each featuring rooftop decks, private yards, and contemporary West Coast finishes. K. Chen managed the full construction process including site coordination and quality control.",
    heroImage: pick(1),
    galleryImages: gallery(3),
  },
  {
    slug: "north-shore-medical-centre",
    title: "North Shore Medical Centre",
    location: "North Vancouver, BC",
    category: "Commercial",
    serviceTypes: ["Project Management"],
    role: "Project Manager",
    description: "A 45,000 sq ft medical office building on the North Shore featuring specialized clinical spaces, diagnostic imaging suites, and a ground-floor pharmacy. K. Chen provided comprehensive project management from feasibility through completion.",
    heroImage: pick(0),
    galleryImages: gallery(0),
  },
  {
    slug: "dunbar-custom-home",
    title: "Dunbar Custom Home",
    location: "Vancouver, BC",
    category: "Residential (single family)",
    serviceTypes: ["Construction Management"],
    role: "Construction Manager",
    description: "A 5,200 sq ft custom home in the Dunbar neighbourhood featuring a modern farmhouse aesthetic with board-and-batten cladding, expansive windows, and a detached laneway house.",
    heroImage: pick(1),
    galleryImages: gallery(1),
  },
  {
    slug: "brentwood-mall-expansion",
    title: "Brentwood Mall Expansion",
    location: "Burnaby, BC",
    category: "Commercial",
    serviceTypes: ["Construction Management"],
    role: "Construction Manager",
    description: "A major retail expansion project adding 60,000 sq ft of new retail space to an existing shopping centre. The project was completed while the mall remained fully operational, requiring careful phasing and coordination.",
    heroImage: pick(0),
    galleryImages: gallery(2),
  },
  {
    slug: "false-creek-condominiums",
    title: "False Creek Condominiums",
    location: "Vancouver, BC",
    category: "Residential (multi-family)",
    serviceTypes: ["Design-Build"],
    role: "Design-Build Lead",
    description: "A 22-storey concrete condominium tower on False Creek featuring 180 units with water views, a full amenity level, and underground parking. The design-build approach allowed for an integrated and efficient delivery.",
    heroImage: pick(3),
    galleryImages: gallery(3),
  },
  {
    slug: "kerrisdale-heritage-home",
    title: "Kerrisdale Heritage Home",
    location: "Vancouver, BC",
    category: "Residential (single family)",
    serviceTypes: ["Design-Build"],
    role: "Design-Build Lead",
    description: "A full restoration and modernization of a 1920s Craftsman home in Kerrisdale. The project preserved original character elements while adding a contemporary rear addition and fully updated mechanical and electrical systems.",
    heroImage: pick(1),
    galleryImages: gallery(0),
  },
  {
    slug: "richmond-centre-renovation",
    title: "Richmond Centre Renovation",
    location: "Richmond, BC",
    category: "Commercial",
    serviceTypes: ["Project Management"],
    role: "Project Manager",
    description: "A comprehensive interior renovation of a 30,000 sq ft commercial office space in Richmond Centre. K. Chen managed the project from design coordination through construction, delivering a modern open-plan workplace.",
    heroImage: pick(2),
    galleryImages: gallery(1),
  },
  {
    slug: "coal-harbour-penthouse",
    title: "Coal Harbour Penthouse",
    location: "Vancouver, BC",
    category: "Residential (single family)",
    serviceTypes: ["Construction Management"],
    role: "Construction Manager",
    description: "A 4,800 sq ft luxury penthouse renovation in Coal Harbour featuring custom Italian cabinetry, engineered hardwood, floor-to-ceiling windows with harbour views, and a private rooftop terrace.",
    heroImage: pick(2),
    galleryImages: gallery(2),
  },
  {
    slug: "main-street-mixed-use",
    title: "Main Street Mixed Use",
    location: "Vancouver, BC",
    category: "Commercial",
    serviceTypes: ["Design-Build"],
    role: "Design-Build Lead",
    description: "A 6-storey mixed-use development on Main Street combining ground-floor retail, second-floor office, and four floors of rental housing. The project was delivered using an integrated design-build model.",
    heroImage: pick(3),
    galleryImages: gallery(3),
  },
  {
    slug: "cambie-corridor-townhomes",
    title: "Cambie Corridor Townhomes",
    location: "Vancouver, BC",
    category: "Residential (multi-family)",
    serviceTypes: ["Project Management"],
    role: "Project Manager",
    description: "A 24-unit townhome development along the Cambie Corridor, designed to align with the city's transit-oriented development plan. K. Chen provided project management through all phases of delivery.",
    heroImage: pick(1),
    galleryImages: gallery(0),
  },
  {
    slug: "point-grey-road-residence",
    title: "Point Grey Road Residence",
    location: "Vancouver, BC",
    category: "Residential (single family)",
    serviceTypes: ["Construction Management"],
    role: "Construction Manager",
    description: "An 8,500 sq ft contemporary waterfront residence on Point Grey Road. The home features a cantilevered upper floor, a glass-walled living pavilion, and direct beach access. K. Chen managed all construction activities.",
    heroImage: pick(1),
    galleryImages: gallery(1),
  },
  {
    slug: "broadway-tech-campus",
    title: "Broadway Tech Campus",
    location: "Vancouver, BC",
    category: "Commercial",
    serviceTypes: ["Construction Management"],
    role: "Construction Manager",
    description: "A two-building technology campus totalling 250,000 sq ft near the future Broadway Subway station. The project features flexible floor plates, a central courtyard, and LEED Gold certification targeting.",
    heroImage: pick(0),
    galleryImages: gallery(2),
  },
];

export const projectCategories: ProjectCategory[] = [
  "Commercial",
  "Residential (multi-family)",
  "Residential (single family)",
];

export const serviceTypes: ServiceType[] = [
  "Construction Management",
  "Design-Build",
  "Project Management",
];
