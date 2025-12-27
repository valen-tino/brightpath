export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  category: string;
  image: string;
  result: string;
  description: string;
  client: string;
  challenge: string;
  solution: string;
  outcome: string;
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "techstartup-launch",
    title: "TechStartup Launch",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1706700392626-5279fb90ae73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWduJTIwbGFwdG9wJTIwc2NyZWVuJTIwbW9ja3VwfGVufDF8fHx8MTc2NjY0ODQ3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    result: "200% Increase in Leads",
    client: "TechStream Solutions",
    description: "A complete website redesign for a fast-growing SaaS startup looking to improve conversion rates and establish brand authority.",
    challenge: "TechStream had a powerful product but their web presence was outdated and confusing. Users were bouncing off the landing page, and the sign-up flow was convoluted. They needed a site that communicated their value proposition clearly and built trust with enterprise clients.",
    solution: "We designed a clean, modern interface with clear hierarchy and focused CTAs. We simplified the user journey, creating dedicated landing pages for different user personas. The site was built on React for lightning-fast performance.",
    outcome: "Within three months of launch, TechStream saw a 200% increase in qualified leads and a 40% reduction in bounce rate. The new design also helped them secure their Series A funding round.",
    testimonial: {
      text: "BrightPath completely transformed how the world sees us. The new site isn't just pretty—it's our best sales tool.",
      author: "Sarah Chen",
      role: "CMO, TechStream"
    }
  },
  {
    id: "2",
    slug: "boutique-cafe",
    title: "Boutique Cafe",
    category: "Branding Identity",
    image: "https://images.unsplash.com/photo-1694878981750-3b1f8d97abff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYnJhbmRpbmclMjBpZGVudGl0eSUyMHN0YXRpb25lcnklMjBtb2NrdXB8ZW58MXx8fHwxNzY2NjQ4NDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    result: "Established Market Presence",
    client: "Velvet Bean Coffee",
    description: "Full brand identity package for a high-end specialty coffee shop, including logo design, packaging, and store signage.",
    challenge: "Velvet Bean needed to differentiate itself in a crowded market. They wanted a brand that felt artisanal, premium, and welcoming, but their initial DIY branding wasn't conveying that message.",
    solution: "We developed a sophisticated visual identity using warm earth tones and elegant typography. We created a custom logo mark that works across all applications, from coffee cups to social media. We also designed packaging for their retail coffee beans.",
    outcome: "The launch was a massive success, with lines around the block on opening day. The packaging design was featured in several design blogs, driving online sales nationwide.",
    testimonial: {
      text: "They captured exactly the vibe we were going for. Our customers constantly compliment our branding.",
      author: "Marcus Thorne",
      role: "Founder, Velvet Bean"
    }
  },
  {
    id: "3",
    slug: "growth-co",
    title: "Growth Co.",
    category: "Digital Strategy",
    image: "https://images.unsplash.com/photo-1647365368632-90028b7faa23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3klMjBhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjB0YWJsZXR8ZW58MXx8fHwxNzY2NjQ4NDg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    result: "3x Client Acquisition",
    client: "NextLevel Consulting",
    description: "Comprehensive digital marketing strategy and implementation for a management consulting firm.",
    challenge: "NextLevel relied entirely on referrals and wanted to build a predictable engine for new business. They had no coherent content strategy and their social media presence was sporadic.",
    solution: "We conducted a deep audit of their market position and developed a content-first strategy. We set up an automated email nurturing sequence, optimized their LinkedIn presence, and created a series of high-value whitepapers as lead magnets.",
    outcome: "In six months, they tripled their monthly client acquisition rate. The email list grew from 500 to 5,000 active subscribers, becoming their primary source of new revenue.",
    testimonial: {
      text: "The ROI on this engagement has been incredible. We finally have a marketing machine that works.",
      author: "David Ross",
      role: "Managing Partner"
    }
  },
  {
    id: "4",
    slug: "urban-oasis",
    title: "Urban Oasis",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1545665277-5937bf0449dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjB3ZWJzaXRlJTIwcG9ydGZvbGlvfGVufDF8fHx8MTc2NjY0ODQ4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    result: "Award-Winning UX",
    client: "Urban Oasis Landscape",
    description: "A visually stunning portfolio website for a high-end landscape architecture firm.",
    challenge: "The firm needed a way to showcase their complex, beautiful projects. Their old site didn't do justice to the quality of their work and was difficult to navigate on mobile devices.",
    solution: "We built an image-heavy, immersive portfolio site. We used subtle animations to guide the user through the projects. The site is fully responsive, ensuring the photos look great on any screen size.",
    outcome: "The site won a local design award and significantly increased inquiries from high-net-worth individuals. The client reported a 50% increase in project budget for incoming leads."
  },
  {
    id: "5",
    slug: "fintech-flow",
    title: "Fintech Flow",
    category: "App Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwYXBwJTIwdWl8ZW58MXx8fHwxNzY2NjQ4NTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    result: "1M+ App Downloads",
    client: "Flow Finance",
    description: "UI/UX design for a personal finance management application targeted at Gen Z users.",
    challenge: "Flow Finance needed to make complex financial data feel accessible and engaging for a younger demographic that typically finds finance boring.",
    solution: "We used gamification principles and vibrant data visualization to create an engaging user experience. The interface focuses on positive reinforcement and clear, actionable insights.",
    outcome: "The app reached 1 million downloads within the first year and maintains a 4.8-star rating on the App Store."
  }
];