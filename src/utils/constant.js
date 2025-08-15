export const COLORS = {
  primary: "#7FBD68",
  secondary: "#50A783",
  liberty: "#25949B",
  text: "#0e1111",
}

export const MINERALS = [
  {
    name: "Fluorite",
    slug: "fluorite",
    image: "/assets/fluorite.jpg",
    summary: "High-demand mineral used in aluminum, chemicals & water treatment. Strong export potential.",
    description:
      "Fluorite is a highly sought-after industrial mineral with exceptional chemical properties. Our fluorite deposits offer high purity levels suitable for aluminum production, chemical processing, and water treatment applications. With strong global demand and excellent export potential, fluorite represents a cornerstone of our mineral portfolio.",
    applications: [
      "Aluminum Production",
      "Chemical Processing",
      "Water Treatment",
      "Steel Manufacturing",
      "Glass Industry",
    ],
    specifications: {
      Purity: "95-98% CaF2",
      Moisture: "≤ 0.5%",
      "Particle Size": "0-25mm, 25-75mm",
      Color: "Green, Purple, Clear",
    },
  },
  {
    name: "Phosphate",
    slug: "phosphate",
    image: "/assets/phosphate.jpg",
    summary: "Critical for fertilizers & crop yields; abundant deposits for local and export markets.",
    description:
      "Our phosphate reserves are essential for global food security, providing the critical nutrients needed for fertilizer production. With abundant high-grade deposits, we supply both local agricultural markets and international fertilizer manufacturers with consistent, quality phosphate rock.",
    applications: [
      "Fertilizer Production",
      "Animal Feed Supplements",
      "Food Additives",
      "Detergents",
      "Water Treatment",
    ],
    specifications: {
      "P2O5 Content": "28-32%",
      Moisture: "≤ 2%",
      "Particle Size": "0-6mm, 6-25mm",
      Cadmium: "≤ 20 ppm",
    },
  },
  {
    name: "Iron Ore",
    slug: "iron-ore",
    image: "/assets/iron-ore.jpg",
    summary: "Significant sedimentary & magnetite deposits for steel & industrial chains.",
    description:
      "Our iron ore operations encompass both sedimentary and magnetite deposits, providing high-quality raw materials for steel production and industrial applications. With proven reserves and modern extraction techniques, we ensure consistent supply to meet growing industrial demand.",
    applications: [
      "Steel Production",
      "Pig Iron Manufacturing",
      "Direct Reduction",
      "Cement Industry",
      "Heavy Industry",
    ],
    specifications: {
      "Fe Content": "58-65%",
      Silica: "≤ 8%",
      Alumina: "≤ 3%",
      Moisture: "≤ 8%",
    },
  },
  {
    name: "Barite",
    slug: "barite",
    image: "/assets/barite.jpg",
    summary: "Valued across paints, rubber, plastics & glass. Strong extraction & export outlook.",
    description:
      "Barite's unique properties make it indispensable across multiple industries. Our high-grade barite deposits serve the paint, rubber, plastics, and glass industries with consistent quality and reliable supply chains. Strong extraction capabilities ensure excellent export potential.",
    applications: ["Oil & Gas Drilling", "Paint & Coatings", "Rubber Industry", "Plastics", "Glass Manufacturing"],
    specifications: {
      "BaSO4 Content": "≥ 95%",
      "Specific Gravity": "4.2-4.5",
      Moisture: "≤ 1%",
      "Particle Size": "200-325 mesh",
    },
  },
  {
    name: "Bauxite",
    slug: "bauxite",
    image: "/assets/Bauxite.jpg",
    summary: "Primary ore of aluminum; reserves support local industry and export growth.",
    description:
      "As the primary ore for aluminum production, our bauxite reserves play a crucial role in supporting both local aluminum industry and export markets. High-grade deposits with favorable alumina-to-silica ratios ensure efficient processing and strong market positioning.",
    applications: ["Aluminum Production", "Refractories", "Cement Industry", "Abrasives", "Chemical Industry"],
    specifications: {
      "Al2O3 Content": "45-55%",
      SiO2: "≤ 8%",
      Fe2O3: "15-25%",
      Moisture: "≤ 12%",
    },
  },
  {
    name: "Talc (Soapstone)",
    slug: "talc",
    image: "/assets/talc.jpg",
    summary: "High-purity, asbestos‑free deposits for cosmetics, ceramics & pharma.",
    description:
      "Our talc deposits offer exceptional purity and are completely asbestos-free, making them ideal for high-value applications in cosmetics, pharmaceuticals, and ceramics. Rigorous quality control ensures consistent particle size distribution and chemical composition.",
    applications: ["Cosmetics & Personal Care", "Pharmaceuticals", "Ceramics", "Paper Industry", "Paint & Coatings"],
    specifications: {
      Purity: "≥ 95%",
      Whiteness: "≥ 85%",
      Moisture: "≤ 0.5%",
      "Particle Size": "200-400 mesh",
      Asbestos: "Nil",
    },
  },
]


// export const VALUES = [
//   {
//     icon: "ShieldCheck",
//     title: "Quality Excellence",
//     body: "Rigorous QA/QC at every stage—sourcing, processing, and dispatch.",
//   },
//   {
//     icon: "Leaf",
//     title: "Sustainability",
//     body: "Responsible sourcing, waste minimization, and community-first practices.",
//   },
//   {
//     icon: "Handshake",
//     title: "Customer Focus",
//     body: "Tailored blends, packaging, and logistics to meet your specs & timelines.",
//   },
//   {
//     icon: "Sparkles",
//     title: "Innovation",
//     body: "Modern processing lines, data-driven planning, and continuous improvement.",
//   },
// ]

// export const WHY = [
//   {
//     icon: "BadgeCheck",
//     title: "Trusted Supply",
//     body: "Stable volumes, transparent SLAs, and proactive communication.",
//   },
//   { icon: "Factory", title: "Processing Capability", body: "Industrial‑grade facilities with calibrated equipment." },
//   {
//     icon: "Truck",
//     title: "Global Logistics",
//     body: "Sea/land routes, INCOTERMS compliance, and documentation readiness.",
//   },
//   { icon: "ShieldCheck", title: "Compliance", body: "HSE, ESG reporting, MSDS/COA, and export regulatory alignment." },
// ]

// export const TIMELINE = [
//   {
//     k: "01",
//     title: "Responsible Sourcing",
//     body: "Vendor due‑diligence, site audits, and traceability from pit to port.",
//   },
//   {
//     k: "02",
//     title: "Resource Efficiency",
//     body: "Yield optimization, water stewardship, and energy‑aware operations.",
//   },
//   { k: "03", title: "Environmental Care", body: "Dust control, safe tailings handling, and reclamation planning." },
//   { k: "04", title: "People & Safety", body: "Training, PPE, and Zero‑Harm culture across partners & sites." },
// ]

export const btnBase =
  "inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
