// ============================================================
// JAPAN VISAS & STATUSES OF RESIDENCE — COMPLETE DATABASE
// Grouped by purpose, detailing stay durations, work rights, 
// qualifications, and paths to Permanent Residency (PR).
// ============================================================

const VISA_CATEGORIES = [
  { id: "short_term", name: "Short-Term Stay",      emoji: "🏖️", kanji: "短", description: "Temporary visitor and transit stays with no residency rights" },
  { id: "study",      name: "Study & Culture",       emoji: "🎓", kanji: "学", description: "Educational, cultural, and skills training programs" },
  { id: "work",       name: "Work & Professional",   emoji: "💼", kanji: "就", description: "Employment categories covering corporate, technical, and labor roles" },
  { id: "family",     name: "Family & Relations",    emoji: "👨‍👩‍👧", kanji: "家", description: "Spouses, children, and dependents of Japanese citizens or residents" },
  { id: "long_term",  name: "Long-Term & Special",   emoji: "🏠", kanji: "定", description: "Designated activities, Working Holidays, and special residency status" },
  { id: "permanent",  name: "Permanent Status",      emoji: "♾️", kanji: "永", description: "Indefinitely renewable residence with unrestricted work rights" }
];

const VISAS = [
  // ============================================================
  // 🏖️ SHORT-TERM (No Residence Card)
  // ============================================================
  {
    id: "v-1",
    category: "short_term",
    title: "Temporary Visitor",
    purpose: "Tourism, sightseeing, business meetings, family visits, or short-term conferences.",
    duration: "15, 30, or 90 days",
    work_allowed: "Prohibited",
    path_to_pr: false,
    popularity: 10, // high popularity for sorting
    description: "The most common visa for entry. Citizens of ~70 countries (including the US, Canada, EU, and UK) qualify for visa-free entry. Strictly no employment or paid work allowed. Cannot be extended or converted to another visa type from within Japan except in highly exceptional circumstances (e.g. marriage)."
  },
  {
    id: "v-2",
    category: "short_term",
    title: "Transit Visa",
    purpose: "Passing through Japan en route to another destination.",
    duration: "Up to 15 days",
    work_allowed: "Prohibited",
    path_to_pr: false,
    popularity: 2,
    description: "Designed for travelers who need to transfer airports or lay over in Japan for up to 15 days. Activities are restricted to sightseeing and rest; strictly no business or employment activities permitted."
  },

  // ============================================================
  // 🎓 STUDY
  // ============================================================
  {
    id: "v-3",
    category: "study",
    title: "Student Visa",
    purpose: "Studying at Japanese universities, language schools, or vocational institutes.",
    duration: "3 months to 4 years & 3 months",
    work_allowed: "Up to 28 hours/week (requires permission)",
    path_to_pr: false,
    popularity: 9,
    description: "Requires sponsorship from an educational institution.\n\n• **Part-time Work**: Students can work up to 28 hours per week, and up to 8 hours per day during official school holidays. Requires applying for a part-time work permit (Shikakugai Katsudo Kyoka) at airport immigration.\n• **Adult Entertainment Ban**: Strictly prohibited from working in the adult entertainment industry (Hostess bars, cabaret, pachinko parlors, love hotels - even washing dishes or cleaning at these venues is illegal and leads to immediate deportation).\n• **PR Track**: Student years do not count toward the 5-year work requirement for Permanent Residency, but serve as a bridge to a full-time work visa."
  },
  {
    id: "v-4",
    category: "study",
    title: "Training Visa",
    purpose: "Acquiring skills, technology, or knowledge at Japanese organisations.",
    duration: "3 months, 6 months, or 1 year",
    work_allowed: "Prohibited (except unpaid work-study)",
    path_to_pr: false,
    popularity: 3,
    description: "Specifically for trainees at corporations, government entities, or educational groups to learn technical skills. Because it is a training program, recipients are not considered standard employees and cannot receive salary, though living stipends may be provided."
  },
  {
    id: "v-5",
    category: "study",
    title: "Cultural Activities",
    purpose: "Academic research or studying traditional Japanese arts/culture.",
    duration: "3 months to 3 years",
    work_allowed: "Prohibited",
    path_to_pr: false,
    popularity: 4,
    description: "Designed for individuals studying traditional arts (e.g., tea ceremony, flower arranging, calligraphy, martial arts, Japanese cuisine, or Zen Buddhism) under a master. The activities must be unpaid. Requires proof of sufficient personal funds to support oneself during the stay."
  },

  // ============================================================
  // 💼 WORK
  // ============================================================
  {
    id: "v-6",
    category: "work",
    title: "Engineer / Specialist in Humanities / International Services (EHI)",
    purpose: "The standard work visa for corporate employees, engineers, and creatives.",
    duration: "3 months, 1 year, 3 years, or 5 years",
    work_allowed: "Full employment within the designated fields",
    path_to_pr: true,
    popularity: 10,
    description: "The most common work visa. Covers software engineers, IT specialists, marketers, translators, designers, and administrative staff.\n\n• **Eligibility**: Requires a university degree (Bachelor's or higher) or 10+ years of documented professional experience in the field.\n• **Sponsorship**: Must have a formal employment contract with a Japan-based sponsoring company. Salary must be equal to or higher than what a Japanese national would receive.\n• **Key Documents**: Certificate of Eligibility (COE) application, graduation certificate, employment contract, and sponsoring company's registration (Tohon) and financial reports.\n• **Restrictions**: Prohibited from working in manual labor or adult entertainment sectors."
  },
  {
    id: "v-7",
    category: "work",
    title: "Highly Skilled Professional (HSP) Type 1",
    purpose: "Fast-tracked residency for elite global talent under a point system.",
    duration: "5 years",
    work_allowed: "Full employment with multiple permitted activities",
    path_to_pr: true,
    popularity: 8,
    description: "A points-based visa evaluating academic credentials, professional experience, age, and salary.\n\n• **Point Threshold**: Must score 70+ points. Scoring 70+ allows applying for Permanent Residency (PR) after 3 years; scoring 80+ reduces it to just 1 year.\n• **Points Allocation**: PhD (30 pts), Master's (20 pts), Age under 30 (15 pts), Annual salary (up to 40 pts relative to age), JLPT N1 (15 pts), JLPT N2 (10 pts).\n• **Special Perks**: Spouse can work full-time without a part-time hours limit; can bring parents to Japan (if caring for a child under 7 or pregnant spouse, and household income is ¥8M+); can hire a domestic helper.\n• **Restrictions**: Tied to the specific sponsoring company (any changes require an official visa update)."
  },
  {
    id: "v-8",
    category: "work",
    title: "Highly Skilled Professional (HSP) Type 2",
    purpose: "Unlimited stay for established Highly Skilled Professionals.",
    duration: "Indefinite",
    work_allowed: "Unrestricted professional activities",
    path_to_pr: true,
    popularity: 6,
    description: "Indefinite residency status for established global talent.\n\n• **Eligibility**: Must have held the HSP Type 1 visa for at least 3 years.\n• **Perks**: Grants an indefinite period of stay. Allows engagement in almost any work activity alongside your primary highly skilled role, while retaining all HSP Type 1 privileges (spousal work rights, parent sponsorship, domestic helper).\n• **PR Track**: Immediate transition to Permanent Residency is common."
  },
  {
    id: "v-9",
    category: "work",
    title: "Business Manager",
    purpose: "Starting, investing in, or managing a business entity in Japan.",
    duration: "3 months to 5 years",
    work_allowed: "Restricted to managing your own business",
    path_to_pr: true,
    popularity: 7,
    description: "For founders, investors, and executives starting or managing a business in Japan.\n\n• **Requirements**: Now officially requires a capital investment of at least ¥30,000,000 (30 million yen) or employing at least 2 full-time local staff. Must have a physical office space (cannot be a temporary residential address).\n• **Compliance**: Requires JLPT N2 language proficiency or higher to ensure corporate compliance and legal compliance in Japanese business transactions.\n• **Key Documents**: Detailed business plan, corporate registration (Tohon), proof of capital origin, and office lease agreement.\n• **Restrictions**: Restricted to managing and operating your own business; standard general employment elsewhere is prohibited."
  },
  {
    id: "v-10",
    category: "work",
    title: "Intra-Company Transferee",
    purpose: "Temporary transfer of employees from overseas offices to Japan branches.",
    duration: "3 months to 5 years",
    work_allowed: "Restricted to the transferring employer",
    path_to_pr: true,
    popularity: 5,
    description: "Designed for multinational corporations moving personnel to Japanese subsidiaries. Applicants must have worked at the foreign branch for at least 1 year immediately prior to the transfer in an EHI-equivalent capacity."
  },
  {
    id: "v-11",
    category: "work",
    title: "Investor",
    purpose: "Running businesses funded by personal or foreign capital investments.",
    duration: "1 year to 5 years",
    work_allowed: "Restricted to investment management",
    path_to_pr: true,
    popularity: 4,
    description: "Often integrated closely with the Business Manager visa. Aimed at individuals who are primarily injecting capital into Japanese projects, real estate, or venture startups and overseeing the allocation and operation of those investments."
  },
  {
    id: "v-12",
    category: "work",
    title: "Researcher",
    purpose: "Conducting scientific or academic research at Japanese institutions.",
    duration: "3 months to 5 years",
    work_allowed: "Restricted to academic research activities",
    path_to_pr: true,
    popularity: 4,
    description: "Sponsored by research institutes, laboratories, or government offices. Requires a high level of academic qualification (typically a Ph.D. or extensive publish record) and formal research contracts."
  },
  {
    id: "v-13",
    category: "work",
    title: "Professor",
    purpose: "Teaching, directing, or research at Japanese universities.",
    duration: "3 months to 5 years",
    work_allowed: "Restricted to university teaching/directing",
    path_to_pr: true,
    popularity: 5,
    description: "Specifically for professors, associate professors, and lecturers working in universities, graduate programs, or colleges of technology (Kosen)."
  },
  {
    id: "v-14",
    category: "work",
    title: "Instructor",
    purpose: "Language or academic instruction in elementary, middle, or high schools.",
    duration: "3 months to 5 years",
    work_allowed: "Restricted to primary/secondary education",
    path_to_pr: true,
    popularity: 7,
    description: "The primary visa for ALTs (Assistant Language Teachers) and language teachers working directly in primary or secondary Japanese public/private schools. Unlike EHI, it excludes commercial language schools (Eikaiwas), which fall under EHI."
  },
  {
    id: "v-15",
    category: "work",
    title: "Artist",
    purpose: "Earning income from artistic pursuits (painters, sculptors, crafts).",
    duration: "3 months to 5 years",
    work_allowed: "Restricted to artistic activities",
    path_to_pr: true,
    popularity: 3,
    description: "For professional artists, composers, photographers, and writers who have contracted work or sales in Japan. Must show evidence of artistic reputation and sufficient income to survive independently."
  },
  {
    id: "v-16",
    category: "work",
    title: "Religious Activities",
    purpose: "Missionaries, priests, or religious workers sent by foreign organizations.",
    duration: "3 months to 5 years",
    work_allowed: "Restricted to religious duties",
    path_to_pr: true,
    popularity: 2,
    description: "For religious workers dispatched to Japan to conduct missionary work, preaching, or other religious activities. Strictly unpaid by local sources (funding must come from the sending organization)."
  },
  {
    id: "v-17",
    category: "work",
    title: "Journalist",
    purpose: "Foreign correspondents, reporters, and media crews.",
    duration: "3 months to 5 years",
    work_allowed: "Restricted to journalistic work",
    path_to_pr: true,
    popularity: 3,
    description: "Designed for news correspondents, writers, and photojournalists under contract with overseas news agencies, newspapers, or broadcasters operating in Japan."
  },
  {
    id: "v-18",
    category: "work",
    title: "Medical Services",
    purpose: "Foreign-qualified medical practitioners licensed in Japan.",
    duration: "3 months to 5 years",
    work_allowed: "Restricted to medical practices",
    path_to_pr: true,
    popularity: 2,
    description: "For doctors, dentists, pharmacists, and nurses. Crucially, applicants must pass the Japanese National Exams and possess a valid Japanese medical license to qualify, making it rare for non-native speakers."
  },
  {
    id: "v-19",
    category: "work",
    title: "Legal / Accounting Services",
    purpose: "Foreign-qualified attorneys or accountants registered in Japan.",
    duration: "3 months to 5 years",
    work_allowed: "Restricted to legal/accounting fields",
    path_to_pr: true,
    popularity: 2,
    description: "Specifically for foreign lawyers (Bengoshi) and certified public accountants licensed to practice international law or accounting services in Japan."
  },
  {
    id: "v-20",
    category: "work",
    title: "Specified Skilled Worker Type 1 (SSW-1)",
    purpose: "Basic technical labor in 16 sectors facing severe labor shortages.",
    duration: "Up to 5 years total (cannot be renewed indefinitely)",
    work_allowed: "Restricted to designated labor sector",
    path_to_pr: false,
    popularity: 8,
    description: "Covers hospitality, agriculture, nursing care, construction, and food services. Requires passing a skill exam and a basic Japanese language test (JFT-Basic or JLPT N4). Spouses/children cannot accompany the visa holder, and the 5-year limit cannot be extended unless upgraded to SSW-2."
  },
  {
    id: "v-21",
    category: "work",
    title: "Specified Skilled Worker Type 2 (SSW-2)",
    purpose: "Senior/management-level technical labor with indefinite stay.",
    duration: "1, 2, or 3 years (indefinitely renewable)",
    work_allowed: "Restricted to designated labor sector",
    path_to_pr: true,
    popularity: 6,
    description: "For highly skilled SSW-1 workers who pass advanced exams. Allows bringing family members (spouses and children) to Japan and is indefinitely renewable. Critically, this visa counts toward the residency requirement for Permanent Residency (PR)."
  },
  {
    id: "v-22",
    category: "work",
    title: "Technical Intern Training",
    purpose: "Industrial trainees obtaining technical skills (undergoing reform).",
    duration: "Up to 5 years",
    work_allowed: "Restricted to the sponsoring internship workplace",
    path_to_pr: false,
    popularity: 6,
    description: "Historically styled as a training program, but treated practically as low-skilled labor. Following labor rights concerns, it is scheduled to be completely replaced and reformed in 2026 by the new 'Training and Employment' visa system to facilitate transition to SSW."
  },
  {
    id: "v-23",
    category: "work",
    title: "Entertainer",
    purpose: "Performers, singers, actors, dancers, and professional athletes.",
    duration: "15 days to 3 years",
    work_allowed: "Restricted to contracted performances/events",
    path_to_pr: false,
    popularity: 5,
    description: "Highly scrutinized to prevent illegal employment. Requires evidence of professional achievement and a minimum contract salary. Perfect for foreign artists touring Japan or professional athletes competing in Japanese leagues."
  },
  {
    id: "v-24",
    category: "work",
    title: "Skilled Labor",
    purpose: "Foreign chefs, pilots, sommeliers, and animal trainers.",
    duration: "3 months to 5 years",
    work_allowed: "Restricted to specified skilled labor",
    path_to_pr: true,
    popularity: 5,
    description: "For specialists in foreign cuisines (e.g., Indian or French cuisine chefs), aircraft pilots, animal trainers, and gemstone cutters. Requires 10+ years of documented practical experience in the trade (reduced for pilots and special agreements)."
  },

  // ============================================================
  // 👨👩👧 FAMILY & RELATIONSHIP
  // ============================================================
  {
    id: "v-25",
    category: "family",
    title: "Spouse / Child of Japanese National",
    purpose: "Married to or child of a Japanese citizen.",
    duration: "6 months to 5 years",
    work_allowed: "Unrestricted (any industry, any hours)",
    path_to_pr: true,
    popularity: 9,
    description: "For spouses or children of Japanese citizens.\n\n• **Work Rights**: 100% unrestricted. No sector limits, no hours caps, and can run businesses freely.\n• **PR Fast-Track**: Married for at least 3 years and residing in Japan for at least 1 year allows immediate application for Permanent Residency (PR).\n• **Divorce impact**: If divorced, the visa status is lost, but you may apply for a transition to a Long-Term Resident (Teijusha) visa under special conditions (e.g. child custody)."
  },
  {
    id: "v-26",
    category: "family",
    title: "Spouse / Child of Permanent Resident",
    purpose: "Married to or child of a Permanent Resident (PR) holder.",
    duration: "6 months to 5 years",
    work_allowed: "Unrestricted (any industry, any hours)",
    path_to_pr: true,
    popularity: 6,
    description: "Provides identical benefits to the Spouse of Japanese National visa, including unrestricted employment rights and an expedited track to obtaining their own Permanent Residency status."
  },
  {
    id: "v-27",
    category: "family",
    title: "Dependent",
    purpose: "Spouse or children of active work/study visa holders.",
    duration: "Aligned with sponsor's visa",
    work_allowed: "Up to 28 hours/week (requires permission)",
    path_to_pr: true,
    popularity: 8,
    description: "For families of engineers, students, or managers. Requires proof that the sponsor can financially support the dependents. To work part-time (up to 28 hours per week), the dependent must apply for a part-time work permit (Shikakugai Katsudo Kyoka)."
  },

  // ============================================================
  // 🏠 LONG-TERM / SPECIAL
  // ============================================================
  {
    id: "v-28",
    category: "long_term",
    title: "Long-Term Resident",
    purpose: "Special humanitarian cases, Indochinese refugees, or foreign ancestry.",
    duration: "6 months to 5 years",
    work_allowed: "Unrestricted",
    path_to_pr: true,
    popularity: 5,
    description: "Granted under special designated categories (Teijusha). Commonly used for Nikkeijin (descendants of Japanese nationals), divorced spouses of Japanese citizens who keep custody of children, EPA nurses, or refugees. Unrestricted work rights."
  },
  {
    id: "v-29",
    category: "long_term",
    title: "Designated Activities",
    purpose: "A catch-all category for special visa arrangements and novel programs.",
    duration: "15 days to 5 years (depending on sub-type)",
    work_allowed: "Varies by sub-type",
    path_to_pr: false,
    popularity: 9,
    description: `A flexible category (Tokutei Katsuou) covering 20+ specialized programs. Prominent sub-types include:

• Digital Nomad (New 2024): Live in Japan for up to 6 months. Not renewable or extendable (must leave for a 6-month cooling period). Requires annual income of ¥10 million+ ($65k-70k USD) from foreign sources, and private health insurance covering ¥10 million+. No Residence Card issued.
• J-Find (Job Seeker): Up to 2 years for graduates of top 250 global universities to job hunt or start a business in Japan. Allows bring dependents.
• Working Holiday: 1-year stay for young adults (18-30) from ~30 eligible countries to work part-time and travel. India is NOT eligible.
• Post-Study Job Hunting: Up to 1 year for foreign graduates of Japanese universities to seek full-time jobs.`
  },

  // ============================================================
  // ♾️ PERMANENT STATUSES
  // ============================================================
  {
    id: "v-30",
    category: "permanent",
    title: "Permanent Resident (PR)",
    purpose: "Indefinite right to reside and work in Japan.",
    duration: "Indefinite (Residence Card renewed every 7 years)",
    work_allowed: "Unrestricted (any industry, any hours)",
    path_to_pr: true,
    popularity: 9,
    description: "The ultimate residency status with unrestricted employment and living rights.\n\n• **Standard Track**: Generally requires 10 years of continuous residence in Japan, with at least 5 of those years on a valid work or long-term residence visa.\n• **Fast Track**: Reduced to 3 years or 1 year if you score 70/80+ points on the HSP scale, or 1 year if married to a Japanese citizen for 3+ years.\n• **Tax & Pension Compliance**: Must have a clean record of paying all taxes, health insurance, and national pension on time (highly scrutinized during the application review process).\n• **Benefits**: Unrestricted work rights, easy access to Japanese bank loans/mortgages, and no need to renew the visa status itself (only renew the physical card every 7 years)."
  },
  {
    id: "v-31",
    category: "permanent",
    title: "Special Permanent Resident",
    purpose: "Historical residency status for pre-WWII immigrants and descendants.",
    duration: "Indefinite (Residence Card renewed every 7 years)",
    work_allowed: "Unrestricted",
    path_to_pr: true,
    popularity: 4,
    description: "Specifically designated for Korean and Chinese nationals (and their descendants) who immigrated to Japan prior to or during World War II and remained. A highly protected historical category."
  }
];
