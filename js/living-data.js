// ============================================================
// JAPAN AFTER LANDING & RELOCATION GUIDE — COMPLETE DATABASE
// Grouped by category, detailing essential administrative, financial,
// housing, healthcare, and daily life information for residents.
// ============================================================

const LIVING_CATEGORIES = [
  { id: "administrative", name: "Administrative & Legal", emoji: "🏢", description: "Ward office registration, residency cards, and identity numbers" },
  { id: "finance",        name: "Banking & Finance",      emoji: "💳", description: "Setting up bank accounts, cash, transfers, and credit cards" },
  { id: "housing",        name: "Housing & Utilities",    emoji: "🏠", description: "Renting apartments, setting up electricity, gas, and water" },
  { id: "daily_life",     name: "Daily Essentials",       emoji: "📦", description: "Mobile SIM cards, garbage separation, and internet setup" },
  { id: "healthcare",     name: "Healthcare & Welfare",   emoji: "🏥", description: "National health insurance, clinical visits, and emergency numbers" },
  { id: "etiquette",      name: "Community Manners",      emoji: "🤝", description: "Fostering neighborhood relations and local community rules" }
];

const LIVING_GUIDES = [
  // ============================================================
  // 🏢 ADMINISTRATIVE & LEGAL
  // ============================================================
  {
    id: "l-1",
    category: "administrative",
    title: "Ward Office Address Registration",
    purpose: "Registering your physical residence on your Residence Card.",
    timeframe: "Within 14 days of moving in",
    severity: "critical", // red tag
    importance: "Legally Mandatory",
    popularity: 10,
    description: "Once you secure a long-term address, you must register it at your local Ward Office (Kuyakusho) or City Hall within 14 days. Bring your Residence Card (Zairyu Card) and passport. The officer will print the address on the back of your Residence Card and update the official registry. This is legally required before you can sign up for a phone number, open a bank account, or rent a pocket Wi-Fi."
  },
  {
    id: "l-2",
    category: "administrative",
    title: "My Number Card (Individual Number)",
    purpose: "Acquiring your social security and tax identification card.",
    timeframe: "Upon receiving notification letter",
    severity: "important", // yellow tag
    importance: "Highly Recommended",
    popularity: 7,
    description: "A 12-digit social security and tax number issued to all residents of Japan. You will first receive a paper notification card. It is highly recommended to apply for the plastic My Number Card (featuring your photo) online or by mail. It allows you to print official certificates (like Juminhyo) at convenience stores, file taxes digitally, and serves as an official photo ID."
  },

  // ============================================================
  // 💳 BANKING & FINANCE
  // ============================================================
  {
    id: "l-3",
    category: "finance",
    title: "Setting Up a Bank Account",
    purpose: "Receiving salary, paying utilities, and managing local transactions.",
    timeframe: "First week after address registration",
    severity: "critical",
    importance: "Legally Required for Salary",
    popularity: 9,
    description: "Most employers in Japan pay salaries strictly via domestic bank transfer, and utility bills are often auto-deducted. Major commercial banks (e.g., MUFG, SMBC) generally require you to be in the country for 6 months before opening an account. However, Japan Post Bank (Yucho Ginko) allows new foreign residents to open an account immediately. You will need your Residence Card showing your registered address, a Japanese phone number, and a signature or Hanko (personal seal)."
  },
  {
    id: "l-4",
    category: "finance",
    title: "Credit Card Applications",
    purpose: "Paying online, automatic bills, and cashless transactions.",
    timeframe: "After 3-6 months of employment",
    severity: "normal", // green tag
    importance: "Convenient",
    popularity: 5,
    description: "Japan is moving toward cashless payments, but credit card applications for newly arrived expats are frequently rejected due to lack of local credit history. It is best to wait 3 to 6 months after starting your job. Expat-friendly options include the Rakuten Card, EPOS Card, or Amazon Japan Card. Ensure your application name exactly matches your Residence Card (including middle names in identical order)."
  },

  // ============================================================
  // 🏠 HOUSING & UTILITIES
  // ============================================================
  {
    id: "l-5",
    category: "housing",
    title: "Renting an Apartment (Chintai)",
    purpose: "Finding and leasing a long-term home in Japan.",
    timeframe: "1-2 months before move-in",
    severity: "critical",
    importance: "High Upfront Costs",
    popularity: 8,
    description: "Leasing an apartment involves high upfront costs (typically 3 to 5 months of rent). These include: advance rent, deposit (Shikikin), key money (Reikin - non-refundable gift to landlord), guarantor company fee (usually 50-100% of a month's rent), and real estate agency fee. Many landlords require a Japanese-speaking contact person. Expat-friendly portals like GaijinPot, Real Estate Japan, or Plaza Homes can help bypass these requirements."
  },
  {
    id: "l-6",
    category: "housing",
    title: "Setting Up Utilities (Electricity, Gas, Water)",
    purpose: "Activating services for your new residence.",
    timeframe: "3-7 days before moving in",
    severity: "critical",
    importance: "Essential for Move-In",
    popularity: 8,
    description: "You must contact regional utility providers (e.g. TEPCO for electricity, Tokyo Gas, or city waterworks) to activate services. Electricity and water can often be activated online. The gas setup is especially critical: a technician must physically visit your apartment to perform a safety inspection and ignite the gas valve, otherwise you will have no hot water or stove access. Arrange this appointment well in advance of your move-in day."
  },

  // ============================================================
  // 📦 DAILY ESSENTIALS
  // ============================================================
  {
    id: "l-7",
    category: "daily_life",
    title: "Mobile SIM Card Setup",
    purpose: "Obtaining a local Japanese voice call number.",
    timeframe: "First 2-3 days",
    severity: "critical",
    importance: "Required for Contracts",
    popularity: 9,
    description: "A Japanese phone number (starting with 090, 080, or 070) is required for almost all official applications. Major carriers require multi-year contracts, but modern MVNO services (Rakuten Mobile, IIJmio, LINEMO, Mobal) offer flexible monthly SIM plans. Under Japanese law, you must present your Residence Card with a registered address to purchase a voice-enabled SIM card."
  },
  {
    id: "l-8",
    category: "daily_life",
    title: "Garbage Separation Rules (Gomi)",
    purpose: "Complying with strict community recycling laws.",
    timeframe: "From day 1",
    severity: "important",
    importance: "Social Responsibility",
    popularity: 9,
    description: "Japan enforces highly strict garbage separation rules. Waste is split into Burnable (combustible), Non-burnable, Plastics, and Recyclables (cans, glass, PET bottles). Each municipality has its own schedule, designated colored bags, and strict drop-off areas. Oversized garbage (Sodai Gomi) requires booking a pickup and purchasing a sticker at a convenience store. Failure to follow rules can lead to neighborhood complaints or trash being returned to you."
  },

  // ============================================================
  // 🏥 HEALTHCARE & WELFARE
  // ============================================================
  {
    id: "l-9",
    category: "healthcare",
    title: "National Health Insurance (Kokumin Kenko Hoken)",
    purpose: "Enrolling in public health insurance to cover medical fees.",
    timeframe: "Within 14 days of arrival",
    severity: "critical",
    importance: "Legally Mandatory",
    popularity: 9,
    description: "All residents staying in Japan for over 3 months are legally required to join a public health insurance plan. If you are not enrolled in employee health insurance (Shakai Hoken) via your company, you must register for Kokumin Kenko Hoken at your local ward office. It covers 70% of medical and dental expenses, leaving you with a 30% co-pay. Monthly fees are calculated based on your prior year's Japanese income."
  },
  {
    id: "l-10",
    category: "healthcare",
    title: "Emergency Services (110 & 119)",
    purpose: "Accessing police, fire, or ambulance rescue.",
    timeframe: "Always keep noted",
    severity: "critical",
    importance: "Safety & Emergencies",
    popularity: 6,
    description: "Dial 110 for Police (accidents, crimes, report theft). Dial 119 for Fire and Ambulance (severe injuries, health emergencies, fire). Both calls are free from any phone. If you do not speak Japanese, say 'English, please' or 'Eigo de onegai shimasu' to be connected with a three-way translation operator. Be prepared to read out your physical address or find nearby landmarks."
  },

  // ============================================================
  // 🤝 COMMUNITY MANNERS
  // ============================================================
  {
    id: "l-11",
    category: "etiquette",
    title: "Move-In Neighbor Greetings (Hikoshi Aisatsu)",
    purpose: "Polite introductions to immediate neighbors.",
    timeframe: "Within 1-2 days of moving in",
    severity: "normal",
    importance: "Traditional Courtesy",
    popularity: 4,
    description: "A traditional Japanese custom when moving into a new home is to introduce yourself to your immediate neighbors (left/right next-door neighbors, and those directly above and below you). It is customary to bring a small token gift worth ¥500 to ¥1,000 (such as wrapped hand towels, tea, cookies, or laundry detergent) and introduce yourself. This fosters positive local relationships and prevents future noise or community disputes."
  }
];
