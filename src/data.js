//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/p1.webp';
import Project2 from './assets/img/projects/p2.webp';
import Project3 from './assets/img/projects/p3.webp';
import Project4 from './assets/img/projects/p4.webp';
import Project5 from './assets/img/projects/p5.webp';
import Project6 from './assets/img/projects/p6.webp';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images

import TestiImage4 from './assets/img/testimonials/gatcot.jpg'
import TestiImage5 from './assets/img/testimonials/joseph.jpg'
import TestiImage6 from './assets/img/testimonials/selamawit.jpg'

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: '',
  },
  {
    icon: <FiInstagram />,
    href: '',
  },
  {
    icon: <FiGithub />,
    href: '',
  },
  {
    icon: <FiDribbble />,
    href: '',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'project name 1',
    category: 'UI/UX design',
  },
  {
    id: '2',
    image: Project2,
    name: 'project name 2',
    category: 'web development',
  },
  {
    id: '3',
    image: Project3,
    name: 'project name 3',
    category: 'UI/UX design',
  },
  {
    id: '4',
    image: Project4,
    name: 'project name 4',
    category: 'branding',
  },
  {
    id: '5',
    image: Project5,
    name: 'project name 5',
    category: 'web development',
  },
  {
    id: '6',
    image: Project6,
    name: 'project name 6',
    category: 'web development',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'branding',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Our designs are tailored to meet your unique needs and objectives, ensuring a website that stands out from the competition.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Our web development service provides custom, dynamic, and scalable web applications that meet your business needs and requirements. We utilize the latest web development technologies and frameworks.',
  },
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'We provide strategic brand development, logo design, brand messaging, and brand guidelines that ensure consistency across all marketing channels..',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'Our SEO service helps improve your websites visibility and ranking on search engines like Google, Bing, and Yahoo.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage4,
    authorText:
      'I really appreciate the overall design aesthetic - its modern, clean, and visually engaging. I particularly love the use of color throughout the website - it really adds a sense of vibrancy and personality.',
    authorName: 'Koat Diw Gach',
    authorPosition: 'CEO, COO, Good Mining Service',
  },
  {
    authorImg: TestiImage5,
    authorText:
      ' you have done an excellent job - the website is fast, responsive, and functions seamlessly. I particularly appreciate the smooth scrolling and the way the website adapts to different devices.',
    authorName: 'Joseph',
    authorPosition: 'Team Leader, AYI ',
  },
  {
    authorImg: TestiImage6,
    authorText:
      'I absolutely love the new branding - it is professional, eye-catching, and really captures the essence of my business.',
    authorName: 'Selamawit Kassa',
    authorPosition: 'Head of Design, Ethio Suvenior Shop',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'We are here to help you.',
    description: 'Email us at dawitl866@gmail.com',
    phone: '+251-923318738',
    phone2: '+251-966794615',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Addis Abeba, Ethiopia',
    description: 'Serving clients worldwide',
  },
];
