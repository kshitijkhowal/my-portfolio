import socialsRaw from '../../data/Socials/socials.json';
import educationEntries from '../../data/Education/education.json';
import achievementsRaw from '../../data/Achievements/entries.json';
import brokerapp from '../../data/Experience/brokerapp.json';
import ambak from '../../data/Experience/ambak.json';
import growthMarketers from '../../data/Experience/growth-marketers.json';
import metroconnect from '../../data/Projects/metroconnect.json';
import messagingApp from '../../data/Projects/messaging-app.json';
import hero from '../../data/About/hero.json';
import about from '../../data/About/about.json';
import nav from '../../data/About/nav.json';
import skillsDisplay from '../../data/About/skills-display.json';
import siteContact from '../../data/About/contact.json';
import brokerAppIcon from '../../data/Assets/Icons/CompanyIcons/BrokerApp/BrokerAppIcon.svg';
import ambakIcon from '../../data/Assets/Icons/CompanyIcons/Ambak/AmbakIcon.svg';
import growthMarketersIcon from '../../data/Assets/Icons/CompanyIcons/GrowthMarketers/GrowthMarketersIcon.svg';
import metroConnectIcon from '../../data/Assets/Icons/ProjectIcons/MetroConnect/MetroConnectIcon.svg';

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

const EXPERIENCE_ICONS = {
  'exp-brokerapp': brokerAppIcon,
  'exp-ambak': ambakIcon,
  'exp-growth-marketers': growthMarketersIcon,
};

const EXPERIENCE_BRAND_COLORS = {
  'exp-brokerapp': '#C20707',
  'exp-ambak': '#6632D8',
};

const socialsMap = Object.fromEntries(
  socialsRaw.map((item) => [item.key, item.value]),
);

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
  return {
    name: socialsMap.name,
    phone: socialsMap.phone,
    email: socialsMap.email,
    location: socialsMap.location,
  };
}

export function getLinks() {
  return {
    linkedin: socialsMap.linkedin,
    github: socialsMap.github,
    portfolio: socialsMap.portfolio,
    other: socialsMap.other ?? [],
  };
}

export function getProfile() {
  return {
    headline: socialsMap.headline,
    summary: socialsMap.summary,
    preferences: socialsMap.preferences,
  };
}

export function getPerson() {
  const contact = getContact();
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
    linkedin: socialsMap.linkedin,
    github: socialsMap.github,
    portfolio: socialsMap.portfolio,
    headline: socialsMap.headline,
    summary: socialsMap.summary,
  };
}

export function getEducation() {
  return educationEntries;
}

export function getPrimaryEducation() {
  return (
    educationEntries.find((e) => e.id === 'edu-dtu') ||
    educationEntries[0]
  );
}

export function getExperiences() {
  return [brokerapp, ambak, growthMarketers].map((exp) => ({
    id: exp.id,
    role: exp.role,
    type: EMPLOYMENT_LABELS[exp.employmentType] || exp.employmentType,
    company: exp.company,
    companyUrl: exp.website,
    icon: EXPERIENCE_ICONS[exp.id],
    brandColor: EXPERIENCE_BRAND_COLORS[exp.id],
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
        icon: project.id === 'proj-metroconnect' ? metroConnectIcon : null,
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
