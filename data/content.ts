export interface ServiceItem {
  id: string;
  slug: string;
  code: string;
  title: string;
  category: "Advisory" | "Legal & Corporate" | "Events";
  tagline: string;
  shortDescription: string;
  overview: string;
  keyBullets: string[];
  deliverables: string[];
  processSteps: { title: string; description: string }[];
  icon: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "business-advisory",
    slug: "business-advisory",
    code: "3.1",
    title: "Business Advisory",
    category: "Advisory",
    tagline: "Unlocking growth potential and driving sustainable strategic expansion in Singapore and beyond.",
    shortDescription: "Market entry strategy, business growth consulting, process optimization, and dedicated SME support.",
    overview: "CGM Advisory’s Business Advisory practice helps corporate leaders and growing enterprises navigate dynamic market landscapes. We identify strategic opportunities, optimize operations, and guide sustainable expansion tailored to Southeast Asian business realities.",
    keyBullets: [
      "Market entry strategy",
      "Business growth consulting",
      "Process and operational advisory",
      "SME support & mentorship"
    ],
    deliverables: [
      "Comprehensive Singapore & regional market entry blueprints",
      "Operational workflow audit and process re-engineering reports",
      "Growth roadmap and competitive benchmarking frameworks",
      "Tailored SME scaling strategy and resource allocation plans"
    ],
    processSteps: [
      { title: "Diagnostic Audit", description: "In-depth review of existing operations, revenue drivers, and growth impediments." },
      { title: "Strategy Formulation", description: "Design actionable market entry and operational improvement milestones." },
      { title: "Execution Advisory", description: "Hands-on implementation support alongside executive teams." },
      { title: "Optimization & Review", description: "Continuous performance metric tracking and agile strategic adjustments." }
    ],
    icon: "Briefcase"
  },
  {
    id: "legal-advisory",
    slug: "legal-advisory-documentation-support",
    code: "3.2",
    title: "Legal Advisory, Documentation & Support Services",
    category: "Legal & Corporate",
    tagline: "Solicitor-backed legal documentation and regulatory compliance protecting your commercial interests.",
    shortDescription: "Panel of qualified solicitors, contract drafting & review, legal document production, and compliance support.",
    overview: "We bridge strategic business needs and stringent legal compliance. CGM Advisory collaborates with a panel of vetted, experienced solicitors to deliver rigorous contract drafting, regulatory reviews, and turnkey documentation support.",
    keyBullets: [
      "Legal advisory supported by a qualified solicitor panel",
      "Contract drafting & review (commercial, employment, NDAs, shareholder agreements)",
      "Legal document production, formatting, and compilation",
      "End-to-end client paperwork handling & compliance support"
    ],
    deliverables: [
      "Custom commercial contracts, NDAs, Service Level Agreements (SLAs)",
      "Robust shareholder agreements and founders' pacts",
      "Employment agreements and internal company governance policies",
      "Audited legal documentation files ready for transactions and regulatory filing"
    ],
    processSteps: [
      { title: "Scope & Risk Assessment", description: "Identify legal exposures, transaction requirements, and stakeholder terms." },
      { title: "Solicitor Drafting", description: "Experienced legal panel drafts bespoke agreements with airtight protections." },
      { title: "Review & Refinement", description: "Iterative alignment with client business objectives and partner negotiations." },
      { title: "Final Execution & Filing", description: "Compilation, execution management, and secure document archiving." }
    ],
    icon: "Scale"
  },
  {
    id: "corporate-secretarial",
    slug: "corporate-secretarial-services",
    code: "3.3",
    title: "Corporate Secretarial Services",
    category: "Legal & Corporate",
    tagline: "Precision governance and seamless ACRA compliance for ongoing operational peace of mind.",
    shortDescription: "Named company secretary appointment, registered address, ACRA filings, and statutory registers maintenance.",
    overview: "Every Singapore entity requires dependable corporate governance to maintain full compliance with the Accounting and Corporate Regulatory Authority (ACRA). CGM Advisory provides full-suite corporate secretarial services so you never miss a statutory deadline.",
    keyBullets: [
      "Company secretary appointment",
      "Registered office address services",
      "Annual return filing & ACRA statutory compliance",
      "Maintenance of statutory registers (controllers, directors, members)",
      "Board and shareholder resolutions drafting",
      "Share allotment, transfers, and capital restructuring handling"
    ],
    deliverables: [
      "Official ACRA-qualified Company Secretary appointment",
      "Annual General Meeting (AGM) documentation and Annual Return lodgments",
      "Maintenance of Register of Registrable Controllers (RORC) and Nominee Directors",
      "Routine board resolutions and constitution updates"
    ],
    processSteps: [
      { title: "Onboarding & KYC", description: "Comprehensive compliance check and statutory records verification." },
      { title: "Registers Takeover/Setup", description: "Establishing or digitizing corporate statutory books in line with ACRA." },
      { title: "Continuous Monitoring", description: "Proactive tracking of corporate governance milestones and annual filing dates." },
      { title: "Execution & Lodgment", description: "Timely drafting and electronic submission of statutory changes to ACRA." }
    ],
    icon: "FileCheck"
  },
  {
    id: "corporate-structuring",
    slug: "corporate-structuring-incorporation",
    code: "3.4",
    title: "Corporate Structuring & Incorporation",
    category: "Legal & Corporate",
    tagline: "Foundational structuring and fast, compliant Singapore company incorporation.",
    shortDescription: "Singapore company incorporation, entity selection, name checks, post-incorporation setup, and group structure.",
    overview: "Setting up the right legal structure from day one is critical for tax efficiency, liability protection, and future investor readiness. We guide domestic and international entrepreneurs through Singapore company formation and multi-tier group structuring.",
    keyBullets: [
      "Singapore company incorporation (Pte. Ltd., LLP, Branch Office)",
      "Entity type evaluation and governance design",
      "Company name reservation and incorporation document filing",
      "Post-incorporation compliance guidance and corporate bank account advisory",
      "Group structure and holding company advisory"
    ],
    deliverables: [
      "Certificate of Incorporation (Bizfile) and Company Constitution",
      "First Board Resolution for bank account opening and director appointments",
      "Corporate tax & GST registration guidance",
      "Comprehensive cross-border holding company structuring blueprints"
    ],
    processSteps: [
      { title: "Structural Assessment", description: "Evaluate shareholding distribution, tax implications, and international entity requirements." },
      { title: "Name & Document Prep", description: "Name reservation with ACRA and drafting tailored company constitutions." },
      { title: "ACRA Submission", description: "Immediate electronic filing with rapid incorporation turnaround." },
      { title: "Post-Setup Enablement", description: "Support with bank account setup, licenses, and operational onboarding." }
    ],
    icon: "Building2"
  },
  {
    id: "corporate-finance",
    slug: "corporate-finance-advisory",
    code: "3.5",
    title: "Corporate Finance Advisory",
    category: "Advisory",
    tagline: "Data-driven financial clarity, cash flow optimization, and strategic capital allocation.",
    shortDescription: "Financial planning, cash flow forecasting, budget management, health checks, and internal controls.",
    overview: "Sound corporate finance is the backbone of commercial resilience. CGM Advisory provides executive-level financial insight, helping companies optimize capital, forecast liquidity, and institute internal controls that impress auditors and investors alike.",
    keyBullets: [
      "Financial planning & strategic cash flow forecasting",
      "Budget management & cost rationalization",
      "Comprehensive corporate financial health checks",
      "Financial process optimization & internal control advisory"
    ],
    deliverables: [
      "Dynamic 3-statement financial models and scenario planning tools",
      "Rolling 12-month cash runway forecasts",
      "Internal financial control audit and remediation report",
      "Executive dashboard for CFOs and Board members"
    ],
    processSteps: [
      { title: "Financial Audit", description: "Deep inspection of historic financials, burn rates, and margin structures." },
      { title: "Model Construction", description: "Build bespoke forecasting templates tailored to your revenue model." },
      { title: "Control Implementation", description: "Set up internal oversight protocols, approval matrices, and cash governance." },
      { title: "Strategic Steering", description: "Monthly/quarterly financial reviews to guide growth investment decisions." }
    ],
    icon: "TrendingUp"
  },
  {
    id: "fundraising-capital-structuring",
    slug: "fundraising-capital-structuring",
    code: "3.6",
    title: "Fundraising & Capital Structuring",
    category: "Advisory",
    tagline: "Connecting high-potential enterprises with optimal debt, equity, and hybrid financing channels.",
    shortDescription: "Investor materials, financial forecasts, financing options advisory (bank loans, PE, private credit), and capital structure.",
    overview: "Securing capital requires precise positioning and rigorous preparation. We structure your balance sheet for maximum leverage and prepare investor-ready documentation to secure equity, debt, or structured funding from institutional and private capital partners.",
    keyBullets: [
      "Fundraising preparation (business plan, financial forecasts, data rooms)",
      "Financing options advisory (commercial bank facilities, private equity, venture debt, private credit)",
      "Capital structure and capitalization table optimization",
      "Investor pitching collateral and term sheet negotiation advisory"
    ],
    deliverables: [
      "Institutional-grade Pitch Deck and Information Memorandum (IM)",
      "Audited virtual data room (VDR) structure",
      "Pro-forma capitalization table with dilution simulation",
      "Comparative financing proposals matrix"
    ],
    processSteps: [
      { title: "Capital Readiness Review", description: "Determine exact funding requirements and evaluate valuation limits." },
      { title: "Collateral Preparation", description: "Develop pitch decks, financial models, and comprehensive data room." },
      { title: "Funder Matching & Outreach", description: "Advise on appropriate debt/equity partners matching company profile." },
      { title: "Term Sheet Negotiation", description: "Work alongside solicitors to optimize commercial and legal covenants." }
    ],
    icon: "Coins"
  },
  {
    id: "valuation-advisory",
    slug: "valuation-advisory",
    code: "3.7",
    title: "Valuation Advisory",
    category: "Advisory",
    tagline: "Objective, defensible valuations for transactions, financing, and shareholder arrangements.",
    shortDescription: "Valuation support for financing and shareholder transactions, material preparation, and coordination with valuers.",
    overview: "Whether executing a mergers and acquisitions transaction, restructuring equity among founders, or raising external funds, establishing an accurate, defensible valuation is indispensable. CGM Advisory coordinates robust valuation analyses grounded in accepted market methodologies.",
    keyBullets: [
      "Valuation support for equity financing and shareholder buyouts",
      "Preparation of comprehensive valuation datasets and normalization models",
      "Coordination with accredited independent professional valuers where statutory",
      "Discounted Cash Flow (DCF), comparable multiples, and net asset approach assessments"
    ],
    deliverables: [
      "Defensible Business Valuation Summary Dossier",
      "Comparable company and precedent transaction multiples benchmark report",
      "Normalized earnings (EBITDA adjustments) schedules",
      "Independent valuer liaison and technical documentation dossier"
    ],
    processSteps: [
      { title: "Data Gathering & Normalization", description: "Normalize historic earnings and analyze future projections." },
      { title: "Methodology Selection", description: "Apply DCF, Guideline Public Company (GPC), or asset-based models." },
      { title: "Sensitivity & Scenario Analysis", description: "Stress-test key assumptions (WACC, terminal growth, margin expansion)." },
      { title: "Valuation Report Delivery", description: "Produce a detailed report ready for board, tax, or investor scrutiny." }
    ],
    icon: "PieChart"
  },
  {
    id: "tax-coordination",
    slug: "tax-coordination",
    code: "3.8",
    title: "Tax Coordination",
    category: "Advisory",
    tagline: "Harmonizing legal structures and commercial operations with rigorous tax compliance.",
    shortDescription: "Coordination with tax agents/accounting firms, ensuring documents and arrangements are tax-compliant, and liaison support.",
    overview: "Corporate advisory and legal contracts must never be designed in isolation from tax consequences. We act as your proactive coordinator, collaborating closely with your designated tax advisors and IRAS guidelines to ensure all contracts, cross-border flows, and restructurings remain fully compliant.",
    keyBullets: [
      "Coordination with clients' certified tax agents and accredited accounting firms",
      "Reviewing legal documents and commercial agreements for tax compliance compatibility",
      "Liaison support during tax filings, transfer pricing documentation, and IRAS queries",
      "Withholding tax, GST, and corporate income tax alignment"
    ],
    deliverables: [
      "Coordinated legal-tax compliance review sign-off",
      "Transaction briefing packages tailored for tax filing agents",
      "Intercompany agreement review aligned with transfer pricing guidelines",
      "IRAS compliance coordination audit trail"
    ],
    processSteps: [
      { title: "Transaction Review", description: "Examine intended contracts and transactions for potential tax implications." },
      { title: "Tax Agent Liaison", description: "Collaborate with specialist tax professionals to clarify optimal treatment." },
      { title: "Documentation Alignment", description: "Ensure contracts explicitly reflect agreed tax structures and legal obligations." },
      { title: "Filing Support", description: "Assist accounting teams with required factual documentation for IRAS." }
    ],
    icon: "Receipt"
  },
  {
    id: "event-planning-management",
    slug: "event-planning-management",
    code: "3.9",
    title: "Event Planning & Management",
    category: "Events",
    tagline: "Flawlessly orchestrated corporate seminars, product launches, AGMs, and executive summits in Singapore.",
    shortDescription: "Corporate seminars, workshops, product launches, AGMs & board meetings, networking, and end-to-end execution.",
    overview: "CGM Advisory provides high-touch corporate event management designed for enterprises, institutions, and professional bodies. From high-stakes Annual General Meetings (AGMs) requiring strict protocol to prestigious executive summits, our team handles planning, logistics, and on-site production.",
    keyBullets: [
      "Corporate seminars, symposiums & executive workshops",
      "High-impact product and enterprise service launches",
      "Statutory Annual General Meetings (AGMs) & high-security board meetings",
      "Networking galas, investor dinners, and client appreciation events",
      "End-to-end production: venue sourcing, audio-visual, catering, and guest management"
    ],
    deliverables: [
      "Comprehensive event concept, budget, and run-of-sheet master plan",
      "Venue selection, contract negotiation, and AV production management",
      "Delegate RSVP registration platform and on-site badge printing",
      "Post-event reporting, recording delivery, and guest sentiment surveys"
    ],
    processSteps: [
      { title: "Concept & Scope", description: "Define objectives, attendee profile, scale, and budgetary boundaries." },
      { title: "Planning & Sourcing", description: "Secure premier Singapore venues, technical equipment, catering, and permits." },
      { title: "Production & Rehearsal", description: "Rigorous technical run-throughs, speaker briefing, and stage management." },
      { title: "Live Execution & Post-Event", description: "Seamless on-ground coordination followed by complete reconciliation." }
    ],
    icon: "CalendarCheck"
  }
];

export interface WhyChooseItem {
  slug: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  description: string;
  highlights: string[];
  icon: string;
}

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    slug: "documentation-focus",
    title: "We handle the documentation — you focus on your business.",
    subtitle: "Complete paperwork and compliance peace of mind.",
    shortDesc: "End-to-end documentation management so executive teams never lose hours to administrative and legal bureaucracy.",
    description: "In fast-paced modern enterprise, corporate paperwork, compliance filings, and contract administration can severely drain executive focus. At CGM Advisory, we take complete ownership of your corporate documentation—from drafting agreements and structuring resolutions to managing statutory submissions with regulatory bodies. Your leadership team stays focused entirely on revenue generation, product development, and scaling.",
    highlights: [
      "Zero paperwork burden for founders and executives",
      "Structured documentation lifecycle management",
      "Rapid turnaround on critical corporate agreements",
      "Strict data privacy and confidential archive retention"
    ],
    icon: "FileSpreadsheet"
  },
  {
    slug: "experienced-solicitor-panel",
    title: "Backed by a panel of experienced solicitors.",
    subtitle: "Rigorous legal validation behind every advisory insight.",
    shortDesc: "Commercial guidance paired with seasoned solicitors who ensure every clause and structure is robust and enforceable.",
    description: "Unlike standard business consultancies that operate in isolation from legal realities, CGM Advisory is actively supported by an established panel of qualified Singapore solicitors. Every critical contract, corporate restructuring model, and governance framework is scrutinized by legal practitioners, ensuring complete enforceability and risk mitigation under Singapore law.",
    highlights: [
      "Direct access to vetted Singapore legal practitioners",
      "Air-tight commercial contracts tailored to your specific industry",
      "Proactive identification of hidden legal liabilities",
      "Protection during negotiations, acquisitions, and partnerships"
    ],
    icon: "ShieldCheck"
  },
  {
    slug: "one-firm-end-to-end",
    title: "One firm, end-to-end: advisory, legal, corporate, and events.",
    subtitle: "A unified partner eliminating disjointed vendor chaos.",
    shortDesc: "No more juggling separate advisors, lawyers, company secretaries, and event producers. We deliver integrated solutions.",
    description: "Businesses often struggle with fragmented vendor relationships: an accountant who doesn't understand legal covenants, an event organizer disconnected from corporate branding, or a secretary who misses commercial intentions. CGM Advisory delivers all four essential pillars—Strategic Advisory, Solicitor-Backed Legal Documentation, Corporate Secretarial Governance, and Corporate Event Production—seamlessly under one roof.",
    highlights: [
      "Single point of contact for four essential corporate functions",
      "Seamless communication between advisory, legal, and operational teams",
      "Cost-effective bundled service packages tailored to growing firms",
      "Consistent quality and strategic cohesion across every project"
    ],
    icon: "Layers"
  },
  {
    slug: "singapore-based-knowledge",
    title: "Singapore-based, locally knowledgeable.",
    subtitle: "Deep local domain expertise in Asia’s premier financial hub.",
    shortDesc: "Headquartered in Singapore with nuanced understanding of ACRA, IRAS, local banking, and regional commercial networks.",
    description: "Singapore boasts one of the most transparent yet exacting corporate ecosystems in the world. Being based on the ground in Singapore allows CGM Advisory to provide real-time regulatory insight, expedite ACRA interactions, coordinate with premier local financial institutions, and connect clients with regional Southeast Asian commercial ecosystems with speed and precision.",
    highlights: [
      "Deep understanding of ACRA, IRAS, and Singapore statutory mandates",
      "Established connections with top-tier Singapore financial institutions",
      "Proximity for in-person consultations, board meetings, and urgent filings",
      "Gateway advisory for regional firms expanding into Singapore and APAC"
    ],
    icon: "MapPin"
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Consultation",
    headline: "We understand your needs and objectives.",
    description: "We initiate every engagement with an exhaustive discovery session. We listen to your business goals, unpack operational challenges, and identify both commercial opportunities and compliance requisites.",
    details: [
      "Introductory discovery meeting (in-person in Singapore or virtual)",
      "Clarification of key commercial, legal, and operational objectives",
      "Preliminary risk, timeline, and document readiness assessment"
    ]
  },
  {
    step: "02",
    title: "Proposal",
    headline: "Transparent scope, timeline, and pricing.",
    description: "No ambiguous hourly surprises. We present a transparent proposal clearly defining the scope of advisory, legal documentation deliverables, milestones, and fixed or staged pricing.",
    details: [
      "Itemized service scope and clear division of responsibilities",
      "Agreed milestone timelines and target completion dates",
      "Transparent fee structure with no hidden disbursements"
    ]
  },
  {
    step: "03",
    title: "Execution",
    headline: "Our team and solicitor panel handle the heavy lifting.",
    description: "Our multidisciplinary team gets straight to work. Whether structuring financial models, coordinating with our solicitor panel for drafting, or managing corporate secretarial filings, we execute with meticulous attention to detail.",
    details: [
      "Direct collaboration between corporate advisors and solicitor panel",
      "Iterative reviews with regular milestone progress updates",
      "Proactive liaison with relevant Singapore authorities (ACRA, IRAS) or vendors"
    ]
  },
  {
    step: "04",
    title: "Delivery",
    headline: "Completed documents, implemented solutions, or successfully executed events.",
    description: "We deliver finalized, audit-ready documentation, fully incorporated entities, operational frameworks, or flawlessly executed events—empowering your business to thrive immediately.",
    details: [
      "Execution-ready legal agreements and verified statutory registers",
      "Post-delivery debrief and operational implementation guidance",
      "Ongoing corporate secretarial and advisory retainer support"
    ]
  }
];

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  service: string;
  avatar?: string;
  initials?: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: "Marcus Tan",
    role: "Managing Director",
    company: "Apex Nexus Logistics Pte. Ltd.",
    quote: "CGM Advisory overhauled our commercial agreements and corporate secretarial framework. Having our documentation backed by qualified solicitors while receiving strategic business guidance gave our board complete confidence.",
    service: "Legal Advisory & Corporate Secretarial",
    avatar: "/avatars/marcus-tan.jpg",
  },
  {
    id: 2,
    name: "Cheryl Neo",
    role: "Chief Executive Officer",
    company: "Vanguard Tech Innovations Pte. Ltd.",
    quote: "Expanding our technology company into Singapore was effortless thanks to CGM. They handled our incorporation, tax coordination, and founders' agreements seamlessly in record time.",
    service: "Corporate Structuring & Incorporation",
    avatar: "/avatars/elena-rostova.jpg",
  },
  {
    id: 3,
    name: "David Lim",
    role: "Chief Financial Officer",
    company: "OmniHealth Asia Group",
    quote: "The corporate finance advisory and cash flow modeling prepared by CGM Advisory proved instrumental in securing our Series A debt facility. Their team is analytical, prompt, and thoroughly professional.",
    service: "Corporate Finance Advisory",
    avatar: "/avatars/david-lim.jpg",
  },
  {
    id: 4,
    name: "Fiona Teo",
    role: "Head of Marketing & Operations",
    company: "GreenScale Biopharma Pte. Ltd.",
    quote: "From our high-stakes AGM to our regional product launch, CGM’s event planning division executed every detail with military precision. Outstanding coordination and executive-level hospitality.",
    service: "Event Planning & Management",
    avatar: "/avatars/sarah-jenkins.jpg",
  },
  {
    id: 5,
    name: "Wei Lun Koh",
    role: "Regional Vice President",
    company: "Sora Automation (Singapore) Pte. Ltd.",
    quote: "Finding an advisory firm that provides business consultancy, solicitor-backed documentation, and corporate secretarial all under one roof saved us tens of thousands in disjointed agency fees.",
    service: "Business Advisory & Documentation",
    avatar: "/avatars/kenji-takahashi.jpg",
  },
  {
    id: 6,
    name: "Rajesh Nair",
    role: "Co-Founder & COO",
    company: "FinVertex Solutions Pte. Ltd.",
    quote: "The valuation advisory service delivered by CGM Advisory was grounded in rigorous empirical data. It formed the bedrock of our cross-border joint venture negotiations with regional partners.",
    service: "Valuation Advisory",
    avatar: "/avatars/rajesh-nair.jpg",
  },
  {
    id: 7,
    name: "Clara Wong",
    role: "Director of People & Legal",
    company: "Aura Creative Studio Pte. Ltd.",
    quote: "They took away 100% of the headache surrounding our employment contracts, NDAs, and ACRA compliance. True to their word: they handle the documentation while we focus on our business.",
    service: "Legal Documentation & Compliance",
    initials: "CW",
  },
  {
    id: 8,
    name: "Benjamin Teo",
    role: "Principal Partner",
    company: "SingaClean Energy Fund",
    quote: "CGM’s fundraising preparation and virtual data room structuring gave institutional investors immediate clarity. Highly recommended for any firm preparing for an institutional capital raise.",
    service: "Fundraising & Capital Structuring",
    initials: "BT",
  },
  {
    id: 9,
    name: "Jonathan Chen",
    role: "Group General Counsel",
    company: "Straits Horizon Holdings Pte. Ltd.",
    quote: "Their solicitor panel brings serious credibility to every commercial dispute and multi-party shareholder agreement. They operate as a true, seamless extension of our legal department.",
    service: "Legal Advisory Support",
    initials: "JC",
  },
  {
    id: 10,
    name: "Priya Sundaram",
    role: "Executive Director",
    company: "Zenith AgriTech Pte. Ltd.",
    quote: "CGM Advisory coordinated flawlessly with our statutory accounting firm and tax agents. Their ability to bridge legal drafting with tax realities is a rare and invaluable asset.",
    service: "Tax Coordination",
    initials: "PS",
  },
  {
    id: 11,
    name: "Haris bin Osman",
    role: "Senior Partner",
    company: "Sentosa Maritime Capital Pte. Ltd.",
    quote: "Their 4-step process—Consultation, Proposal, Execution, Delivery—was followed to the letter. No scope creep, no hidden hourly billing, just outstanding corporate execution.",
    service: "Our Process",
    initials: "HO",
  },
  {
    id: 12,
    name: "Grace Khoo",
    role: "Founder & Creative Director",
    company: "Khoo Lifestyle Collective Pte. Ltd.",
    quote: "As a fast-scaling SME, we needed guidance on corporate structure and trademark licensing. CGM provided clear, accessible advice without unnecessary jargon. A true partner.",
    service: "Business Advisory",
    avatar: "/avatars/grace-khoo.jpg",
  }
];

