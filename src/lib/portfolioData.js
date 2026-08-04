import contact from '../../data/Socials/contact.json';
import links from '../../data/Socials/links.json';
import profile from '../../data/Socials/profile.json';
import dtu from '../../data/Education/dtu.json';
import deenBandhu from '../../data/Education/deen-bandhu-xii.json';
import dldav from '../../data/Education/dldav-x.json';
import achievementsRaw from '../../data/Achievements/entries.json';
import brokerapp from '../../data/Experience/brokerapp.json';
import ambak from '../../data/Experience/ambak.json';
import growthMarketers from '../../data/Experience/growth-marketers.json';
import metroconnect from '../../data/Projects/metroconnect.json';
import messagingApp from '../../data/Projects/messaging-app.json';
import hero from '../../data/Site/hero.json';
import about from '../../data/Site/about.json';
import nav from '../../data/Site/nav.json';
import skillsDisplay from '../../data/Site/skills-display.json';
import siteContact from '../../data/Site/contact.json';

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

const EMPLOYMENT_LABELS = {
  'full-time': 'Full Time',
  'intern': 'Intern',
  'intern-to-full-time': 'Intern + Full Time',
  'contract': 'Contract',
};

/** @param {string | null | undefined} value */
export function formatMonthYear(value) {
  if (!value) return '';
  if (value === 'present') return 'Present';
  const [year, month] = value.split('-');
  const monthIndex = Number(month) - 1;
  if (!year || Number.isNaN(monthIndex)) return value;
  return `${MONTHS[monthIndex]} ${year}`;
}

/** @param {{ startDate?: string | null, endDate?: string | null }} range */
export function formatDateRange({ startDate, endDate }) {
  const start = formatMonthYear(startDate);
  const end = formatMonthYear(endDate) || 'Present';
  if (!start) return end;
  return `${start} – ${end}`;
}

export function getContact() {
  return contact;
}

export function getLinks() {
  return links;
}

export function getProfile() {
  return profile;
}

export function getPerson() {
  const location = contact.location;
  const locationLabel = [location?.city, location?.country].filter(Boolean).join(', ');
  return {
    firstName: contact.name.first,
    lastName: contact.name.last,
    fullName: contact.name.full,
    email: contact.email,
    phone: contact.phone,
    phoneHref: `tel:${contact.phone.replace(/[^\d+]/g, '')}`,
    locationLabel: locationLabel || 'Delhi, India',
    locationShort: location?.city === 'New Delhi' ? 'Delhi, India' : locationLabel,
    linkedin: links.linkedin,
    github: links.github,
    portfolio: links.portfolio,
    headline: profile.headline,
    summary: profile.summary,
  };
}

export function getEducation() {
  return [dtu, deenBandhu, dldav];
}

export function getPrimaryEducation() {
  return dtu;
}

export function getExperiences() {
  return [brokerapp, ambak, growthMarketers].map((exp) => ({
    id: exp.id,
    role: exp.role,
    type: EMPLOYMENT_LABELS[exp.employmentType] || exp.employmentType,
    company: exp.company,
    companyUrl: exp.website,
    period: formatDateRange(exp),
    highlights: (exp.bullets || []).map((b) => b.text),
    techStack: exp.techStack || [],
    products: exp.products || [],
  }));
}

export function getProjects() {
  const all = [metroconnect, messagingApp];
  return all
    .filter((p) => p.featured === true || p.status === 'published')
    .map((project, index) => {
      const defaultArchitecture = {
        client: (project.techStack || []).slice(0, 3).join(', ') || '—',
        server: 'On-device / client services',
        database: 'Local state & remote config',
        security: 'App sandbox',
      };
      const metroArchitecture = {
        client: 'Expo, React Native, Expo Location',
        server: 'On-device graph engine',
        database: 'Metro network graph (stations & lines)',
        security: 'Local computation · App sandbox',
      };

      return {
        id: index,
        rawId: project.id,
        title: project.name === 'MetroConnect' ? 'Metro Connect' : project.name,
        category: project.category || 'Project',
        tech: project.techStack || [],
        features: (project.bullets || []).map((b) => b.text),
        github: project.links?.github || null,
        store: project.links?.android || project.links?.ios || null,
        video: project.links?.demo || null,
        architecture:
          project.architecture ||
          (project.id === 'proj-metroconnect' ? metroArchitecture : defaultArchitecture),
      };
    });
}

export function getSkillGroups() {
  return skillsDisplay.groups.map(({ category, icon, skills }) => ({
    category,
    icon,
    skills,
  }));
}

export function getAchievements() {
  const byId = Object.fromEntries(
    (achievementsRaw.entries || []).map((e) => [e.id, e]),
  );

  return [
    {
      id: 0,
      title: 'Department Rank 1',
      subtitle: '3rd Year · DTU Engineering Physics',
      description:
        byId['ach-dept-rank']?.text ||
        'Secured Department Rank 1 in 3rd year.',
      badge: 'DTU',
      color: 'orange',
    },
    {
      id: 1,
      title: 'LeetCode Contest 1572',
      subtitle: 'Top 27% · 400+ DSA Problems',
      description: [
        byId['ach-leetcode']?.text,
        byId['ach-dsa-problems']?.text,
        byId['ach-hacker-blocks']?.text,
      ]
        .filter(Boolean)
        .join(' '),
      badge: 'Competitive Coding',
      color: 'green',
    },
  ];
}

export function getHero() {
  return hero;
}

export function getAbout() {
  return about;
}

export function getNav() {
  return nav;
}

export function getSiteContact() {
  return siteContact;
}

export function getSiteMeta() {
  return siteContact.meta;
}
