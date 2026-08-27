/**
 * Single source of truth for newsroom entries, social channels and the
 * site-wide search index.
 *
 * To publish a newsroom item: add an entry to ITEMS below. It is picked up
 * automatically by the Newsroom section, the section counts and site search —
 * no component changes required.
 */

export type NewsroomCategory =
  | "Press Release"
  | "Announcement"
  | "Speech & Statement"
  | "Event"
  | "Institutional News";

/**
 * The five publication streams the newsroom is committed to. Every stream is
 * listed on the site whether or not it currently holds entries, so visitors
 * can see exactly what the Directorate publishes and what is still pending.
 */
export const NEWSROOM_CATEGORIES: {
  name: NewsroomCategory;
  plural: string;
  description: string;
}[] = [
  {
    name: "Press Release",
    plural: "Press Releases",
    description:
      "Official releases issued to accredited media by the Media & Public Relations Unit.",
  },
  {
    name: "Announcement",
    plural: "Announcements",
    description:
      "Public notices on examinations, accreditation, admissions and regulatory decisions.",
  },
  {
    name: "Speech & Statement",
    plural: "Speeches & Statements",
    description:
      "Full texts of addresses and formal statements by the Director-General and Council.",
  },
  {
    name: "Event",
    plural: "Events",
    description:
      "Consultations, public lectures, delegations and ceremonies on the institutional calendar.",
  },
  {
    name: "Institutional News",
    plural: "Institutional News",
    description:
      "Developments in the mandate, structure and statutory operations of the Council.",
  },
];

export type NewsroomItem = {
  /** Stable anchor slug — used as the element id and as the search target. */
  id: string;
  category: NewsroomCategory;
  title: string;
  /** ISO 8601 (YYYY-MM-DD). Rendered machine-readable in a <time> element. */
  date: string;
  /** Issuing unit, shown so every item has a named source of record. */
  unit: string;
  summary: string;
};

const ITEMS: NewsroomItem[] = [
  {
    id: "newsroom-clet-vesting",
    category: "Institutional News",
    title:
      "CLET assumes its statutory mandate under the Legal Education Act, 2026",
    date: "2026-07-01",
    unit: "Corporate Communications & Partnerships Directorate",
    summary:
      "The Council for Legal Education and Training was vested under the Legal Education Act, 2026 (Act 1170), taking on responsibility for the regulation, accreditation and coordination of legal education in Ghana.",
  },
  {
    id: "newsroom-publishing-desk",
    category: "Announcement",
    title:
      "Newsroom opens as the official publication channel of the Directorate",
    date: "2026-07-01",
    unit: "Media & Public Relations Unit",
    summary:
      "Releases, statements, public notices and media advisories are cleared through the Media & Public Relations Unit and published here. Material that does not appear on this page is not an official position of the Council.",
  },
  {
    id: "newsroom-engagement-calendar",
    category: "Event",
    title: "Stakeholder engagement calendar now maintained centrally",
    date: "2026-08-15",
    unit: "Events & Protocols Management Unit",
    summary:
      "A forward calendar of consultations, public lectures, institutional delegations and ceremonies is maintained by Events & Protocols Management. Accreditation and attendance requests are handled through the protocol desk.",
  },
];

/** Newest first. Sorted once, at module load, so every consumer agrees. */
export const NEWSROOM_ITEMS: NewsroomItem[] = [...ITEMS].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export const newsroomItemsIn = (category: NewsroomCategory) =>
  NEWSROOM_ITEMS.filter((item) => item.category === category);

/** Fixed locale and time zone so server and client render identical output. */
const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export const formatNewsroomDate = (isoDate: string) =>
  dateFormatter.format(new Date(`${isoDate}T00:00:00Z`));

/**
 * Official social channels.
 *
 * TO GO LIVE: replace `href: null` with the full public URL of the verified
 * account. Any channel left as null renders as a non-clickable "launching
 * soon" chip rather than a dead link.
 */
export type SocialLink = {
  label: string;
  href: string | null;
};

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "X", href: null },
  { label: "Facebook", href: null },
  { label: "LinkedIn", href: null },
  { label: "YouTube", href: null },
];

export const HAS_LIVE_SOCIAL = SOCIAL_LINKS.some((link) => link.href !== null);

export type SearchEntry = {
  title: string;
  category: string;
  href: string;
  /** Shown to the reader in the results list. Keep it a readable sentence. */
  description: string;
  /** Matched against but never displayed. Keyword soup belongs here. */
  keywords: string;
};

export const SEARCH_INDEX: SearchEntry[] = [
  {
    title: "About CCP",
    category: "Directorate",
    href: "#about",
    description:
      "The public face of CLET and the bridge between the Council and its stakeholders.",
    keywords:
      "corporate communications partnerships directorate public face stakeholder bridge legal education Ghana mandate citizens students institutions bar judiciary government donors international community",
  },
  {
    title: "Leadership",
    category: "Directorate",
    href: "#leadership",
    description:
      "Direction of the Directorate and the officers accountable for each unit.",
    keywords:
      "Francisca Kakra Forson director strategic direction media public relations events protocols international relations partnerships unified voice council",
  },
  {
    title: "Our Units",
    category: "Operations",
    href: "#pillars",
    description:
      "Media & Public Relations, Events & Protocols Management, and International Relations & Strategic Partnerships.",
    keywords:
      "operational units website social channels protocol MOU donor engagement press desk ceremonies delegations",
  },
  {
    title: "Capabilities",
    category: "Systems",
    href: "#capabilities",
    description:
      "The communications systems the Directorate operates, from public information to crisis response.",
    keywords:
      "public information brand stakeholder engagement CRM international protocol reputation crisis internal engagement content live experiences CMS newsletter SMS social media monitoring",
  },
  {
    title: "Newsroom",
    category: "Newsroom",
    href: "#newsroom",
    description:
      "Press releases, announcements, speeches, events and institutional news.",
    keywords:
      "press release statement announcement notice speech address event calendar institutional news media advisory publication",
  },
  {
    title: "Partnerships",
    category: "Engagement",
    href: "#partnerships",
    description:
      "The institutional relationship portfolio of CLET across the legal community at home and abroad.",
    keywords:
      "judiciary Ghana Bar Association General Legal Council Ghana School of Law universities ministries donors ECOWAS African Union MOU collaboration parliament attorney-general",
  },
  {
    title: "Contact",
    category: "Service Desk",
    href: "#contact",
    description:
      "Separate desks for general enquiries, press, protocol and partnerships.",
    keywords:
      "general inquiries press media protocol partnerships email phone telephone Accra Ghana front office accreditation interview request",
  },
  ...NEWSROOM_ITEMS.map((item) => ({
    title: item.title,
    category: item.category,
    href: `#${item.id}`,
    description: item.summary,
    keywords: `${item.unit} ${item.date} newsroom`,
  })),
];
