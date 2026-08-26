// Load all images in src/assets/images
const imageModules = import.meta.glob('./assets/images/**/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default'
});

/**
 * Get a single image URL by relative path
 * @param {string} relativePath - Path relative to src/assets/images/ (e.g. "bmich/cover.jpg")
 */
export const getImage = (relativePath) => {
  const fullPath = `./assets/images/${relativePath}`;
  return imageModules[fullPath] || '';
};

export const personalInfo = {
  name: "Kushani Withanage",
  initials: "KW",
  photoUrl: "/images/kushani_portrait.jpg",
  avatarUrl: "/images/kushani_portrait.jpg",
  title: "Employer Branding Executive | Content & Brand Experience",
  headline: "Specialized in Industry Engagement, Employer Branding, Stakeholder Collaboration & Experiential Programs",
  shortBio: "Creative, hands-on marketing and content professional with extensive experience across the IT education and technology sector, combining employer branding, short-form video production, flagship event operations, brand storytelling, and high-impact stakeholder engagement.",
  email: "dhanushikakwk@gmail.com",
  phone: "+94 70 385 98520",
  location: "Kaluthara, Western Province, Sri Lanka",
  educationHighlight: "Bachelor of Information Technology (BIT) - UCSC",
  diplomaHighlight: "Diploma in Digital Marketing",
  currentRole: "Head of Academic Affairs",
  currentCompany: "Institute of Computer Engineering Technology (iCET)",
  availability: "Open for Global & National Strategic Roles",
  socials: {
    linkedin: "https://www.linkedin.com/in/kushani-withanage",
    // youtube: "https://www.youtube.com/@iCETLK",
    //facebook: "https://www.facebook.com/kushaniwithanage",
    // instagram: "https://www.instagram.com/kushani_withanage"
  }
};

export const keyMetrics = [
  {
    id: "flagship-event",
    value: "500+ Pax",
    label: "Flagship Event Execution",
    sublabel: "Organized BMICH ceremonial & industry award productions",
    tag: "Event Operations"
  },
  {
    id: "digital-reach",
    value: "175,000+",
    label: "Video & Digital Reach",
    sublabel: "Short-form content, podcast series, and organic views",
    tag: "Content Strategy"
  },
  {
    id: "conversion-rate",
    value: "67%",
    label: "Workshop Lead Conversion",
    sublabel: "Lead-to-enrollment rate for high-funnel technical masterclasses",
    tag: "Funnel Marketing"
  },
  {
    id: "initiatives-count",
    value: "10+",
    label: "Flagship Brand Projects",
    sublabel: "Documented end-to-end media campaigns, tours, and summits",
    tag: "Brand Leadership"
  }
];


export const projects = [
  //Diploma Awarding Ceremony @ BMICH
  {
    id: "icet-diploma-awarding-ceremony-bmich",
    title: "Diploma Awarding Ceremony @ BMICH",
    subtitle: " ",
    category: "Events & Ceremonies",
    featured: true,
    role: "Project Lead",
    date: "Annual Flagship Production",
    venue: "BMICH, Colombo",
    summary: "",
    details: "iCET's first major graduation event, held at the Bandaranaike Memorial International Conference Hall (BMICH) , Sri Lanka's premier national venue for large-scale conferences and ceremonies. I led the entire event from the ground up, bringing together 500+ students and parents for a milestone institutional moment. ",
    coverImage: getImage("bmich/diploma_award_ceremony_01.jpg"),
    videos: [
      {
        id: "bmich-valedictory-2",
        title: "Diploma Award Ceremony 2025 | Official Event Trailer 🎓",
        subtitle: "Interviews with leading Tech CEOs & Academic Guests",
        embedUrl: "https://www.youtube.com/embed/bxreixs6ra4?si=jpO9K4YkFq66ZNcE",
        //thumbnailUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
        duration: "5:00",
        views: "600+ Views"
      },
      {
        id: "bmich-highlight-1",
        title: "Diploma Award Ceremony 2025 | Live from BMICH 🎓",
        subtitle: "Keynotes, Graduate Procession & Valedictorian Honours",
        embedUrl: "https://www.youtube.com/embed/w2miFQthag8?si=lFJSekaFHeiY_ctY",
        // thumbnailUrl: "/assets/images/Diploma_Ceremony_Live_Thumbnail.jpg",
        duration: "2:34:32",
        views: "2.2K Views"
      }
    ],
    gallery: [
      {
        id: "bmich-g1",
        url: getImage("bmich/diploma_award_ceremony_01.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "bmich-g2",
        url: getImage("bmich/diploma_award_ceremony_02.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "bmich-g3",
        url: getImage("bmich/diploma_award_ceremony_03.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "bmich-g4",
        url: getImage("bmich/diploma_award_ceremony_04.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "bmich-g5",
        url: getImage("bmich/diploma_award_ceremony_05.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "bmich-g6",
        url: getImage("bmich/diploma_award_ceremony_06.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "bmich-g7",
        url: getImage("bmich/diploma_award_ceremony_07.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "bmich-g8",
        url: getImage("bmich/diploma_award_ceremony_08.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "bmich-g9",
        url: getImage("bmich/diploma_award_ceremony_09.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "bmich-g10",
        url: getImage("bmich/diploma_award_ceremony_10.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "bmich-g11",
        url: getImage("bmich/diploma_award_ceremony_11.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "bmich-g12",
        url: getImage("bmich/diploma_award_ceremony_12.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "bmich-g13",
        url: getImage("bmich/diploma_award_ceremony_13.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "bmich-g14",
        url: getImage("bmich/diploma_award_ceremony_14.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "bmich-g15",
        url: getImage("bmich/diploma_award_ceremony_15.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "bmich-g16",
        url: getImage("bmich/diploma_award_ceremony_16.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "bmich-g17",
        url: getImage("bmich/diploma_award_ceremony_17.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "bmich-g18",
        url: getImage("bmich/diploma_award_ceremony_18.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "bmich-g19",
        url: getImage("bmich/diploma_award_ceremony_19.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "bmich-g20",
        url: getImage("bmich/diploma_award_ceremony_20.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "bmich-g21",
        url: getImage("bmich/diploma_award_ceremony_21.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "bmich-g22",
        url: getImage("bmich/diploma_award_ceremony_22.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "bmich-g23",
        url: getImage("bmich/diploma_award_ceremony_23.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "bmich-g24",
        url: getImage("bmich/diploma_award_ceremony_24.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "bmich-g25",
        url: getImage("bmich/diploma_award_ceremony_25.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "bmich-g26",
        url: getImage("bmich/diploma_award_ceremony_26.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "bmich-g27",
        url: getImage("bmich/diploma_award_ceremony_27.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "bmich-g28",
        url: getImage("bmich/diploma_award_ceremony_28.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "bmich-g29",
        url: getImage("bmich/diploma_award_ceremony_29.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "bmich-g30",
        url: getImage("bmich/diploma_award_ceremony_30.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "bmich-g31",
        url: getImage("bmich/diploma_award_ceremony_31.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "bmich-g32",
        url: getImage("bmich/diploma_award_ceremony_32.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "bmich-g33",
        url: getImage("bmich/diploma_award_ceremony_33.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "bmich-g34",
        url: getImage("bmich/diploma_award_ceremony_34.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "bmich-g35",
        url: getImage("bmich/diploma_award_ceremony_35.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "bmich-g36",
        url: getImage("bmich/diploma_award_ceremony_36.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "bmich-g37",
        url: getImage("bmich/diploma_award_ceremony_37.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "bmich-g38",
        url: getImage("bmich/diploma_award_ceremony_38.jpg"),
        title: "",
        caption: ""
      }
    ],
    metrics: [
      { label: "Audience Attendance", value: "500+ Pax" },
      { label: "Post-Event Reach", value: "10,000+ Views" },
      { label: "Community Engagement", value: "1,000+ Engagements" },
      { label: "Budget Managed", value: "LKR 1.5M - 2M" }
    ],
    responsibilities: [
      "Comprehensive Event Operations & Execution: Led complete event planning and execution, including venue, program flow, guest management, production, logistics, and media.",
      "Cross-Functional Stakeholder Alignment: Coordinated venue management, catering, guest speakers, production teams, vendors, and internal stakeholders.",
      "Budgetary Management & Vendor Oversight: Managed an event budget of approximately LKR 2M, including vendor coordination and cost control.",
      "Experiential Brand & Visual Direction: Managed event branding and physical experience including graduation cloaks, awards, certificates, printed materials, LED screens, sound, and stage setup.",
      "Media Strategy & Production: Developed strategy for photography, videography, promotional content, and social media coverage with the multimedia team.",
      "Brand Identity & Quality Governance: Ensured every visual touchpoint and piece of content stayed consistent with the institution's brand identity, from stage design to social posts."
    ],
    tags: ["Event Production", "BMICH", "Stage Direction", "VIP Protocol", "Media Coverage"],
    mediaLinks: [
      { label: "YouTube Live Stream", url: "https://www.youtube.com/live/w2miFQthag8?si=dA7NegzziNTF3RGR", type: "youtube" },
      { label: "Official Event Trailer", url: "https://youtu.be/bxreixs6ra4?si=zBm11PLXB8mCoBaX", type: "youtube" },
      { label: "LinkedIn Video", url: "https://www.linkedin.com/posts/icetsrilanka_officialtrailer-icet-awardingceremony-activity-7384518284437790720-wtMS?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD9z9OMBifQOuo3HoaoQ-LfydKskts-0UJo", type: "linkedin" },
      { label: "LinkedIn Post", url: "https://www.linkedin.com/posts/icetsrilanka_proud-moments-from-the-icet-diploma-awarding-activity-7397185754319347712-POMQ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD9z9OMBifQOuo3HoaoQ-LfydKskts-0UJo", type: "linkedin" },
      { label: "Facebook Photo Album", url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2FiCETSriLanka%2Fposts%2Fpfbid025diWjjKbKgX86v3J2snTUtSRMLtv3vgPQ4Km2GYk143Yqb8aZBDXFGaMyXrAcRLbl&show_text=true&width=500", type: "facebook" }
    ]
  },
  //TechTalk Podcast Series
  {
    id: "techtalk-podcast-series",
    title: "TechTalk: Industry Insight Podcast Series",
    subtitle: "Original YouTube & Spotify Tech Leadership Video Series",
    category: "Podcasts & Video",
    featured: true,
    role: "Content Strategist & Production Lead ",
    date: "Ongoing Series",
    venue: "",
    summary: "",
    details: "An ongoing YouTube podcast I conceived and launched from scratch, featuring lead software engineers and tech executives in conversation about industry trends and career pathways, built to give students direct,authentic exposure to the software industry.",
    coverImage: getImage("techtalk_podcast/cover_image.jpeg"),
    videos: [
      {
        id: "podcast-ep4",
        title: "Episode 04: DevOps Engineer කෙනෙක් වෙන්නේ කොහොමද?",
        subtitle: "Exploring the next frontier in distributed systems",
        embedUrl: "https://www.youtube.com/embed/_DEWaMy2uv0?si=ZtTTSq1zneNlVTNr",
        //thumbnailUrl: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80",
        duration: "44:29",
        views: "4.5K Views"
      },
      {
        id: "podcast-ep3",
        title: "Episode 03: QA Engineer කෙනෙක් වෙන්න නම් මේ දේවල් හරියටම දැනගෙන පටන් ගන්න",
        subtitle: "Examining the impact of no-code/low-code platforms on modern software development",
        embedUrl: "https://www.youtube.com/embed/-4otW2eHobc?si=gkNHp0ArNWUWiQG7",
        //thumbnailUrl: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80",
        duration: "1:01:42",
        views: "1K Views"
      },
      {
        id: "podcast-ep2",
        title: "Episode 02: AI තියෙද්දී Software Engineer කෙනෙක් වෙන්න Fundamentals ඕනද?",
        subtitle: "Discussion with Senior DevOps & AI Research Engineers",
        embedUrl: "https://www.youtube.com/embed/pc65w_Ldokk?si=k0AykrUXrZCabuAf",
        //thumbnailUrl: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80",
        duration: "50:49",
        views: "3.6K Views"
      },
      {
        id: "podcast-ep1",
        title: "Episode 01: Entrepreneur කෙනෙක් වෙන්න හැමෝටම පුළුවන්",
        subtitle: "Featuring Principal Architects from Tier-1 Software Firms",
        embedUrl: "https://www.youtube.com/embed/sJNk_JlDiLU?si=3UllVwciFvYCk5rz",
        //thumbnailUrl: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80",
        duration: "49:09",
        views: "600+ Views"
      },
      {
        id: "podcast-short-1",
        title: "Short Video 01: Worried about #AI & your Software Career?",
        subtitle: "Featuring Principal Architects from Tier-1 Software Firms",
        embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fweb.facebook.com%2Freel%2F1259469532691060%2F&show_text=false&width=267&t=0",
        //thumbnailUrl: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80",
        duration: "49:09",
        views: "138K+ Views"
      }
    ],
    gallery: [
      {
        id: "podcast-g1",
        url: getImage("techtalk_podcast/qa_01.jpeg"),
        title: "",
        caption: ""
      },
      {
        id: "podcast-g2",
        url: getImage("techtalk_podcast/qa_02.jpeg"),
        title: "",
        caption: ""
      },
      {
        id: "podcast-g3",
        url: getImage("techtalk_podcast/qa_03.jpeg"),
        title: "",
        caption: ""
      },
      {
        id: "podcast-g4",
        url: getImage("techtalk_podcast/qa_04.jpeg"),
        title: "",
        caption: ""
      },
      {
        id: "podcast-g5",
        url: getImage("techtalk_podcast/mob_01.jpeg"),
        title: "",
        caption: ""
      }
    ],
    metrics: [
      { label: "Short-Form Video Reach", value: "150,000+ Views" },
      { label: "Long-Form Core Reach", value: "10,000+ Views" },
      { label: "Top Viral Reel Reach", value: "138,000+ Views" },
      { label: "Published Core Episodes", value: "4 Episodes" }
    ],
    responsibilities: [
      "Strategic Concept & Framework Leadership: Founded and led an industry podcast series end-to-end concept, content direction, episode topics, and production workflow, positioning iCET as a platform connecting students with the software industry.",
      "Executive Guest Sourcing & Trend Alignment: Recruited and coordinated industry experts, including Lead Engineers and technology professionals, researching live tech trends to shape relevant, timely discussion topics.",
      "End-to-End Production Pipeline Governance: Owned the full production pipeline: guest coordination, content planning, recording, and publishing, working closely with the multimedia team on editing direction, visuals, thumbnails, and final cuts.",
      "Multi-Channel Publishing Optimization: Managed YouTube channel strategy and publishing titles, descriptions, topics, and content presentation alongside promotional and distribution strategies across digital platforms."
    ],
    tags: ["Content Strategy", "Podcast Production", "Employer Branding", "YouTube Strategy", "Social Media Reach", "Tech Industry Engagement"],
    mediaLinks: [
      { label: "DevOps Podcast Episodes", url: "https://youtu.be/_DEWaMy2uv0?si=XVQ6zzwMk6AYyqNf", type: "youtube" },
      { label: "DevOps Behind the Scenes Reel", url: "https://web.facebook.com/share/r/1DKh74jmez/", type: "facebook" },
      { label: "DevOps LinkedIn Post", url: "https://www.linkedin.com/posts/icetsrilanka_icet-techpodcast-devops-activity-7465700896526503936-cNVU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9z9OMBifQOuo3HoaoQ-LfydKskts-0UJo", type: "linkedin" },
      { label: "QA Podcast Episodes", url: "https://youtu.be/-4otW2eHobc?si=AhHI9Uf9rIGKDBSu", type: "youtube" },
      { label: "QA Facebook Reel", url: "https://web.facebook.com/share/v/19a8TFtpPU/", type: "facebook" },
      { label: "QA Behind the Scenes Reel", url: "https://web.facebook.com/share/r/1DGLpEKdBk/", type: "facebook" },
      { label: "QA LinkedIn Post", url: "https://www.linkedin.com/posts/icetsrilanka_icet-techpodcast-qualityassurance-activity-7457380238604378112-cJlP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9z9OMBifQOuo3HoaoQ-LfydKskts-0UJo", type: "linkedin" },
      { label: "Software Engineering Podcast Episode", url: "https://youtu.be/pc65w_Ldokk?si=21EnwMy3vVPq6qeh", type: "youtube" },
      { label: "Software Engineering Instagram Reel", url: "https://www.instagram.com/reels/DTz0dVRkSTS/", type: "instagram" },
      { label: "Software Engineering LinkedIn Post", url: "https://www.linkedin.com/posts/icetsrilanka_softwareengineering-icetpodcast-futureitjobs-activity-7417942523395944448-Ayq6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9z9OMBifQOuo3HoaoQ-LfydKskts-0UJo", type: "linkedin" },
      { label: "Entrepreneurship Podcast Episode", url: "https://youtu.be/sJNk_JlDiLU?si=mHI08zHk7h5VNSQh", type: "youtube" },
      { label: "Entrepreneurship Facebook Reel", url: "https://web.facebook.com/share/v/1Jrbntt2CN/", type: "facebook" },
      { label: "Special Viral Facebook Reel (138K views)", url: "https://web.facebook.com/reel/1259469532691060", type: "facebook" }
    ]
  },
  //BuilderX Workshop Series
  {
    id: "builderx-workshop-series",
    title: "BuilderX Industry Workshop Series  ",
    subtitle: "High-Intensity Collaborative Developer Innovation Event",
    category: "Workshops & Tech",
    featured: true,
    role: "Event Strategist & Campaign Lead",
    date: "Multi-Edition Series",
    venue: "",
    summary: "",
    details: "BuilderX is an industry-led, multi-track technical workshop initiative designed to bridge the gap between academic learning and high-demand tech skills (AI, DevOps, IoT). The initiative acts as a high-funnel community outreach and employer branding platform, bringing external students, industry leaders, and developers together through hands-on technical sessions",
    coverImage: getImage("builderX/cover_image.jpeg"),
    videos: [
      {
        id: "builderx-ai-promo",
        title: "AI Track Teaser & Speaker Announcement",
        subtitle: "Promotional video showcasing hands-on AI project scope and industry mentors",
        embedUrl: "https://www.youtube.com/embed/8b1jrCL8xlA?si=OhzBy4m_7YiZJq_r",
        // thumbnailUrl: getImage("builderx/ai-promo-thumb.jpg"),
        duration: "1:15",
        views: "100+ Views"
      },
      {
        id: "builderx-devops-launch",
        title: "DevOps Workshop Official Launch - Facebook",
        subtitle: "Official launch trailer and technical curriculum reveal",
        embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fweb.facebook.com%2Freel%2F1697795164861036%2F&show_text=false&width=267&t=0",
        // thumbnailUrl: getImage("builderx/devops-launch-thumb.jpg"),
        duration: "0:48",
        views: "2.2K Views"
      }
    ],
    gallery: [
      {
        id: "builderx-g1",
        url: getImage("builderX/dev02.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "builderx-g2",
        url: getImage("builderX/dev01.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "builderx-g3",
        url: getImage("builderX/ai01.jpg"),
        title: "",
        caption: ""
      }
    ],
    metrics: [
      { label: "Organic Video Views", value: "13,000+" },
      { label: "Online Registrations", value: "600+" },
      { label: "Physical Participants", value: "400+ (67% Conv.)" },
      { label: "Student Lead Inquiries", value: "600+" },
      { label: "Participant LinkedIn Posts", value: "200+" },
      { label: "Positive Google Reviews", value: "100+" }
    ],
    responsibilities: [
      "Campaign Content Creation & Speaker Alignment: Conceptualized and executed the pre-event promotional strategy by scripting, producing, and managing video trailers, speaker announcements, and marketing collateral in direct collaboration with host.",
      "Audience Nurturing & Attendance Conversion: Managed registration communication and audience engagement to convert online interest into physical attendance.",
      "Multi-Hall Technical Event Production: Coordinated presenters, academic, technical, and multimedia teams to run simultaneous sessions across multiple lecture halls, including live technical setup.",
      "User-Generated Advocacy & Asset Distribution: Drove organic brand visibility by encouraging student generated content and post event social sharing, alongside certificates, photography, and video coverage."
    ],
    tags: ["Employer Branding", "Technical Workshops", "Lead Generation", "Event Production", "Community Outreach", "Developer Engagement"],
    mediaLinks: [
      { label: "DevOps Official Launch - Facebook Video", url: "https://web.facebook.com/share/r/1HVYXSWN1B/", type: "facebook" },
      { label: "DevOps Official Launch - Facebook Post", url: "https://web.facebook.com/share/p/1BaCxxgyZb/", type: "facebook" },
      { label: "DevOps Official Launch - Instagram", url: "https://www.instagram.com/reel/DamqIuJjfLS/?utm_source=ig_web_copy_link&igsi=NTc4MTIwNjQ2YQ==", type: "instagram" },
      { label: "DevOps Promotional Video - Facebook Video", url: "https://web.facebook.com/share/r/1M9q2BQVTw/", type: "facebook" },
      { label: "DevOps Promotional Video - Instagram", url: "https://www.instagram.com/reel/Dak56F4kShP/?utm_source=ig_web_copy_link&igsi=NTc4MTIwNjQ2YQ==", type: "instagram" },
      { label: "AI Promotional Video - Facebook Video", url: "https://web.facebook.com/share/v/1H6F5Ze9fB/", type: "facebook" },
      { label: "AI Promotional Video - Instagram", url: "https://www.instagram.com/reel/Db7k83PjQao/?utm_source=ig_web_copy_link&igsi=NTc4MTIwNjQ2YQ==", type: "instagram" },
      { label: "AI Promotional Video - Facebook Post", url: "https://www.facebook.com/share/p/1Ee1hGqTih/", type: "facebook" }
    ]
  },
  //Industry Minds
  {
    id: "industry-minds-experiential-learning",
    title: "Industry Minds – Experiential Learning Program",
    subtitle: "Human-Centered Problem Solving & Industry Collaboration",
    category: "Experiential Learning & Outreach",
    featured: false,
    role: "Program Lead",
    date: "Multi-Edition Initiative",
    venue: "",
    summary: "",
    details: "Led an experiential learning program connecting students with real businesses, tech companies, and government bodies. Personally mentored students through the last 2 editions, not a standard problem-solving format, but one built around identifying genuine human needs before defining the problem.",
    coverImage: getImage("industryMinds/industryMind_01.jpg"),
    videos: [

    ],
    gallery: [
      {
        id: "im-g1",
        url: getImage("industryMinds/industryMind_01.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "im-g2",
        url: getImage("industryMinds/industryMind_02.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "im-g3",
        url: getImage("industryMinds/industryMind_03.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "im-g4",
        url: getImage("industryMinds/industryMind_04.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "im-g5",
        url: getImage("industryMinds/industryMind_05.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "im-g6",
        url: getImage("industryMinds/industryMind_06.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "im-g7",
        url: getImage("industryMinds/industryMind_07.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "im-g8",
        url: getImage("industryMinds/industryMind_08.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "im-g9",
        url: getImage("industryMinds/industryMind_09.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "im-g10",
        url: getImage("industryMinds/industryMind_10.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "im-g11",
        url: getImage("industryMinds/industryMind_11.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "im-g12",
        url: getImage("industryMinds/industryMind_12.jpg"),
        title: "",
        caption: ""
      }
    ],
    metrics: [
      { label: "Program Editions Led", value: "2 Editions" },
      { label: "Methodology", value: "Human-Centered Design" },
      { label: "Stakeholder Ecosystem", value: "Enterprise & Government" }
    ],
    responsibilities: [
      "End-to-End Leadership: Directed the entire program, connecting academic studies with real-world industry and government challenges.",
      "Stakeholder Partnerships: Built relationships with businesses and government bodies to coordinate visits, research, and mentorships.",
      "Human-Centered Mentorship: Guided students through design-thinking methods to solve genuine, real-world human needs.",
      "Brand & Media Strategy: Led promotional campaigns and multimedia content creation in collaboration with marketing teams."
    ],
    tags: ["Higher Education", "International Admissions", "Counseling", "Digital Campaigns"],
    mediaLinks: [
      { label: "Event Highlights", url: "https://www.facebook.com/share/p/18zwMQMd3E/", type: "facebook" }
    ]
  },
  //Student Success Story Series 
  {
    id: "student-success-story-series",
    title: "Student Success Story Series",
    subtitle: "Authentic Memory-Driven Institutional Storytelling",
    category: "Digital Content & Media",
    featured: false,
    role: "Content Strategist & Production Lead",
    date: "Ongoing Series",
    venue: "",
    summary: "",
    details: "An original, self-initiated storytelling initiative designed to showcase genuine classroom experiences, human connections, and institutional impact through unscripted multimedia narratives.",
    coverImage: getImage("successStory/successStory_01.jpeg"),
    videos: [
      {
        id: "success-story-ep1",
        title: "Student Success Story - Episode 01",
        // subtitle: "Personal journeys, classroom memories, and lecturer mentorship",
        embedUrl: "https://www.youtube.com/embed/hX5Rw_G1Nlw?si=fDgF1qGACIpkfYzZ",
        // thumbnailUrl: getImage("successStory/ep1-thumbnail.jpg"),
        duration: "16:21",
        // views: "700+ Views"
      }
    ],
    gallery: [
      {
        id: "sss-g1",
        url: getImage("successStory/successStory_01.jpeg"),
        title: "",
        caption: ""
      },
      {
        id: "sss-g2",
        url: getImage("successStory/successStory_02.jpeg"),
        title: "",
        caption: ""
      }
    ],
    metrics: [
      { label: "Content Format", value: "Memory-Driven Narratives" },
      { label: "Production Role", value: "Concept & Direction Lead" }
    ],
    responsibilities: [
      "Concept & Strategy: Originated the entire concept and episode structure to deliver authentic, memory-focused narrative content.",
      "Talent Direction: Coordinated students and lecturers to ensure natural, unscripted, and impactful interviews.",
      "Creative & Editorial Direction: Guided video editors on footage, memories, and social storytelling while holding final sign-off."
    ],
    tags: ["Content Strategy", "Video Production", "Storytelling", "Creative Direction", "Student Engagement", "Brand Experience"],
    mediaLinks: [
      { label: "YouTube – Success Story Episode 01", url: "https://youtu.be/hX5Rw_G1Nlw?si=Dc1kJISb8LZB_RI7", type: "youtube" }
    ]
  },
  //Company-Led Technology Workshops 
  {
    id: "company-led-technology-workshops",
    title: "Company-Led Technology Workshops",
    subtitle: "Corporate Partnerships & Technical Skill Exposure",
    category: "Industry Engagement",
    featured: false,
    role: "Industry Relations & Event Coordinator",
    date: "Ongoing Program",
    venue: "Live Hybrid (Campus & Web Stream)",
    summary: "",
    details: "Coordinated workshops conducted by software companies to expose students to current technologies, industry culture, and career opportunities.",
    coverImage: getImage("companyWorkshop/workshop_01.jpg"),
    videos: [
      {
        id: "work-vid-1",
        title: "iCET x Tecciance Workshop ",
        subtitle: "Empowering students to build quality software from the start. 💡✨",
        embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fweb.facebook.com%2Freel%2F942898998019590%2F&show_text=false&width=267&t=0",
        //thumbnailUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
        duration: " ",
        views: " "
      },
      {
        id: "work-vid-2",
        title: "iCET x Nexova Workshop ",
        subtitle: "Introduction to Low-code Platforms!",
        embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fweb.facebook.com%2FiCETSriLanka%2Fvideos%2F1233444608475646%2F&show_text=false&width=375&t=0",
        //thumbnailUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
        duration: " ",
        views: " "
      }
    ],
    gallery: [
      {
        id: "cw-g1",
        url: getImage("companyWorkshop/workshop_01.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "cw-g2",
        url: getImage("companyWorkshop/workshop_02.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "cw-g3",
        url: getImage("companyWorkshop/workshop_03.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "cw-g4",
        url: getImage("companyWorkshop/workshop_04.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "cw-g5",
        url: getImage("companyWorkshop/workshop_05.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "cw-g6",
        url: getImage("companyWorkshop/workshop_06.jpeg"),
        title: "",
        caption: ""
      },
      {
        id: "cw-g7",
        url: getImage("companyWorkshop/workshop_07.jpeg"),
        title: "",
        caption: ""
      },
      {
        id: "cw-g8",
        url: getImage("companyWorkshop/workshop_08.jpeg"),
        title: "",
        caption: ""
      }
    ],
    metrics: [
      { label: "Partner Companies", value: "Multiple Tech Firms" },
      { label: "Focus Area", value: "Tech Culture & Skills" },
      { label: "Media Output", value: "Multi-Platform Highlights" }
    ],
    responsibilities: [
      "Coordinated with participating technology companies and industry professionals.",
      "Developed communication activities to increase student participation.",
      "Coordinated photography, video, and social media coverage.",
      "Worked with the multimedia team to produce event content."
    ],
    tags: ["Industry Relations", "Tech Workshops", "Event Coordination", "Student Engagement", "Corporate Partnerships"],
    mediaLinks: [
      { label: "Tecciance Session 02", url: "https://www.linkedin.com/posts/icetsrilanka_icet-tecciance-softwareengineering-activity-7366803956125089794-nS4Y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9z9OMBifQOuo3HoaoQ-LfydKskts-0UJo", type: "linkedin" },
      { label: "Maash Session", url: "https://web.facebook.com/share/p/19eTgM1jwz/", type: "facebook" },
      { label: "Tecciance Session 01", url: "https://web.facebook.com/share/r/1EyKvP4ZTe/", type: "facebook" },
      { label: "Nexova Session", url: "https://web.facebook.com/share/v/1CFyKVDyva/", type: "facebook" }
    ]
  },

  //Industry Exposure Visit 
  {
    id: "zone24x7-industry-exposure-visit",
    title: "Zone24x7 Industry Exposure Visit",
    subtitle: "Corporate Site Exposure & Direct Industry Engagement",
    category: "Industry Engagement",
    featured: false,
    role: "Project & Media Coordinator",
    date: "",
    venue: "",
    summary: "Build direct connection with company an industry exposure visit.",
    details: "Coordinated and build direct connection with company an industry exposure visit, providing students with direct exposure to a professional software engineering environment.",
    coverImage: getImage("industryVisit/industryVisit_01.jpeg"),
    videos: [
      {
        id: "iv-vid-1",
        title: "Zone24x7 Industry Exposure Visit ",
        subtitle: "",
        embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7396779968514535424?collapsed=1",
        thumbnailUrl: getImage("industryVisit/industryVisit_01.jpeg"),
        duration: "1:02",
        views: ""
      }
    ],
    gallery: [
      {
        id: "iv-g1",
        url: getImage("industryVisit/industryVisit_01.jpeg"),
        title: "",
        caption: ""
      },
      {
        id: "iv-g2",
        url: getImage("industryVisit/industryVisit_02.jpeg"),
        title: "",
        caption: ""
      },
      {
        id: "iv-g3",
        url: getImage("industryVisit/industryVisit_03.jpeg"),
        title: "",
        caption: ""
      },
      {
        id: "iv-g4",
        url: getImage("industryVisit/industryVisit_04.jpeg"),
        title: "",
        caption: ""
      },
      {
        id: "iv-g5",
        url: getImage("industryVisit/industryVisit_05.jpeg"),
        title: "",
        caption: ""
      },
      {
        id: "iv-g6",
        url: getImage("industryVisit/industryVisit_06.jpeg"),
        title: "",
        caption: ""
      },
      {
        id: "iv-g7",
        url: getImage("industryVisit/industryVisit_07.jpeg"),
        title: "",
        caption: ""
      },
      {
        id: "iv-g8",
        url: getImage("industryVisit/industryVisit_08.jpeg"),
        title: "",
        caption: ""
      },
      {
        id: "iv-g9",
        url: getImage("industryVisit/industryVisit_09.jpeg"),
        title: "",
        caption: ""
      },
      {
        id: "iv-g10",
        url: getImage("industryVisit/industryVisit_10.jpeg"),
        title: "",
        caption: ""
      },
      {
        id: "iv-g11",
        url: getImage("industryVisit/industryVisit_11.jpeg"),
        title: "",
        caption: ""
      },
      {
        id: "iv-g12",
        url: getImage("industryVisit/industryVisit_12.jpeg"),
        title: "",
        caption: ""
      },
      {
        id: "iv-g13",
        url: getImage("industryVisit/industryVisit_13.jpeg"),
        title: "",
        caption: ""
      }
    ],
    metrics: [
      { label: "Partner Company", value: "Zone24x7" },
      { label: "Event Type", value: "Corporate Site Visit" },
      { label: "Media Coverage", value: "LinkedIn Highlights" }
    ],
    responsibilities: [
      "Coordinated directly with company leadership and HR representatives.",
      "Managed pre-visit communication, scheduling, student coordination, and logistics.",
      "Planned media coverage and coordinated the multimedia team.",
      "Managed student transportation and on-site coordination.",
      "Supported post-event social media content creation."
    ],
    tags: ["Industry Visit", "Corporate Relations", "Event Coordination", "Logistics Leadership", "Student Engagement"],
    mediaLinks: [
      { label: "LinkedIn Post", url: "https://www.linkedin.com/posts/icetsrilanka_icet-zone24x7-softwareengineering-activity-7395045735282429953-B_Lp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9z9OMBifQOuo3HoaoQ-LfydKskts-0UJo", type: "linkedin" },
      { label: "LinkedIn Video", url: "https://www.linkedin.com/posts/icetsrilanka_icet-zone24x7-softwareengineering-activity-7396780144549351424-UdHl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9z9OMBifQOuo3HoaoQ-LfydKskts-0UJo", type: "linkedin" }
    ]
  },
  //Inauguration Day
  {
    id: "inauguration-day-new-intake",
    title: "Inauguration Day – New Intake Program",
    subtitle: "Large-Scale Student Orientation & Keynote Event",
    category: "Events & Program Management",
    featured: true,
    role: "Program & Event Lead",
    date: "Multi-Intake Series",
    venue: "",
    summary: "Led large-scale orientation programs for 500+ students, blending academic onboarding with live industry insights.",
    details: "Managed large-scale intake inauguration programs welcoming 500+ physical and online students, combiningacademic orientation, industry sessions, technology setup, and brand communication.",
    coverImage: getImage("inaugurationDay/inauguration_01.jpg"),
    videos: [
      {
        id: "inaug-vid-1",
        title: "June 2026 Intake",
        subtitle: "",
        embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7479725588660764673?collapsed=1",
        //thumbnailUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
        duration: "",
        views: ""
      },
      {
        id: "inaug-vid-2",
        title: "January 2026 Intake",
        subtitle: "",
        embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7442446342364327936?collapsed=1",
        //thumbnailUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
        duration: "",
        views: ""
      }
    ],
    gallery: [
      {
        id: "inaug-g1",
        url: getImage("inaugurationDay/inauguration_01.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "inaug-g2",
        url: getImage("inaugurationDay/inauguration_02.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "inaug-g3",
        url: getImage("inaugurationDay/inauguration_03.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "inaug-g4",
        url: getImage("inaugurationDay/inauguration_04.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "inaug-g5",
        url: getImage("inaugurationDay/inauguration_05.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "inaug-g6",
        url: getImage("inaugurationDay/inauguration_06.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "inaug-g7",
        url: getImage("inaugurationDay/inauguration_07.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "inaug-g8",
        url: getImage("inaugurationDay/inauguration_08.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "inaug-g9",
        url: getImage("inaugurationDay/inauguration_09.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "inaug-g10",
        url: getImage("inaugurationDay/inauguration_10.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "inaug-g11",
        url: getImage("inaugurationDay/inauguration_11.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "inaug-g12",
        url: getImage("inaugurationDay/inauguration_12.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "inaug-g13",
        url: getImage("inaugurationDay/inauguration_13.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "inaug-g14",
        url: getImage("inaugurationDay/inauguration_14.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "inaug-g15",
        url: getImage("inaugurationDay/inauguration_15.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "inaug-g16",
        url: getImage("inaugurationDay/inauguration_16.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "inaug-g17",
        url: getImage("inaugurationDay/inauguration_17.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "inaug-g18",
        url: getImage("inaugurationDay/inauguration_18.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "inaug-g19",
        url: getImage("inaugurationDay/inauguration_19.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "inaug-g20",
        url: getImage("inaugurationDay/inauguration_20.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "inaug-g21",
        url: getImage("inaugurationDay/inauguration_21.jpg"),
        title: "",
        caption: ""
      },
      {
        id: "inaug-g22",
        url: getImage("inaugurationDay/inauguration_22.jpg"),
        title: "",
        caption: ""
      }
    ],
    metrics: [
      { label: "Student Attendance", value: "500+ Students per Intake" },
      { label: "Delivery Mode", value: "Hybrid (Physical & Online)" },
      { label: "Execution Scope", value: "Full-Day Multi-Track" }
    ],
    responsibilities: [
      "Planned and coordinated full-day programs involving 500+ students.",
      "Coordinated industry experts, Lead Engineers, speakers, and internal teams.",
      "Managed simultaneous physical and online sessions.",
      "Coordinated speaker schedules and event timelines.",
      "Worked with marketing and multimedia teams on photography, video, and promotional content.",
      "Ensured smooth coordination between academic, technical, marketing, and operational teams."
    ],
    tags: ["Event Leadership", "Student Orientation", "Hybrid Events", "Operations Management", "Cross-Functional Coordination"],
    mediaLinks: [
      { label: "2026 June Intake", url: "https://www.linkedin.com/posts/icetsrilanka_icet-icetlife-softwareengineering-activity-7479725640795963393-xrng?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9z9OMBifQOuo3HoaoQ-LfydKskts-0UJo", type: "LinkedIn" },
      { label: "2026 Jan Intake", url: "https://www.linkedin.com/posts/icetsrilanka_se-activity-7442446464741617665-cjIq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9z9OMBifQOuo3HoaoQ-LfydKskts-0UJo", type: "LinkedIn" },
      { label: "2025 June Intake", url: "https://web.facebook.com/share/v/1GtYXJZCxZ/", type: "facebook" }
    ]
  },
  //Government Industry Research Project 
  {
    id: "government-industry-research-project",
    title: "Government Industry Research Project – Department of Motor Traffic",
    subtitle: "Public Sector Process Research & Student Exposure",
    category: "Experiential Learning & Outreach",
    featured: false,
    role: "Project Coordinator",
    date: "3-Month Research Project",
    venue: "",
    summary: "Coordinated a three-month research project bridging students with government operations.",
    details: "Coordinated a three-month internal research project with the Department of Motor Traffic, providing students with practical exposure to a government organization and real-world business processes.",
    coverImage: getImage("govResearchProject/gov_01.jpeg"),
    videos: [

    ],
    gallery: [
      {
        id: "dmt-g1",
        url: getImage("govResearchProject/gov_01.jpeg"),
        title: "",
        caption: ""
      },
      {
        id: "dmt-g2",
        url: getImage("govResearchProject/gov_02.jpeg"),
        title: "",
        caption: ""
      },
      {
        id: "dmt-g3",
        url: getImage("govResearchProject/gov_03.jpeg"),
        title: "",
        caption: ""
      },
      {
        id: "dmt-g4",
        url: getImage("govResearchProject/gov_04.jpeg"),
        title: "",
        caption: ""
      },
      {
        id: "dmt-g5",
        url: getImage("govResearchProject/gov_05.jpeg"),
        title: "",
        caption: ""
      },
      {
        id: "dmt-g6",
        url: getImage("govResearchProject/gov_06.jpeg"),
        title: "",
        caption: ""
      },
      {
        id: "dmt-g7",
        url: getImage("govResearchProject/gov_07.jpeg"),
        title: "",
        caption: ""
      },
      {
        id: "dmt-g8",
        url: getImage("govResearchProject/gov_08.jpeg"),
        title: "",
        caption: ""
      },
      {
        id: "dmt-g9",
        url: getImage("govResearchProject/gov_09.jpeg"),
        title: "",
        caption: ""
      }
    ],
    metrics: [
      { label: "Partner Entity", value: "Dept. of Motor Traffic" },
      { label: "Project Duration", value: "3 Months" },
      { label: "Student Researchers", value: "10+ Students" }
    ],
    responsibilities: [
      "Maintained direct communication with DMT management and project stakeholders.",
      "Coordinated 10+ student researchers throughout the project.",
      "Managed project communication, timelines, research activities, and stakeholder requirements.",
      "Guided students throughout research and documentation.",
      "Coordinated successful completion and handover of the final research output."
    ],
    tags: ["Public Sector Research", "Government Partnerships", "Student Leadership", "Project Coordination", "Process Mapping"],
    mediaLinks: [
      { label: "Department of Motor Traffic (DMT) Project", url: "https://www.linkedin.com/posts/icetsrilanka_icet-industrylearning-govtech-activity-7457326278527049729-u7Yr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9z9OMBifQOuo3HoaoQ-LfydKskts-0UJo", type: "linkedin" }
    ]
  },
  // Laya Outbound Leadership Program
  {
    id: "laya-outbound-leadership-program",
    title: "Laya Outbound Leadership Program",
    subtitle: "Military-Led Team Building & Leadership Development",
    category: "Events & Program Management",
    featured: false,
    role: "Program Coordinator",
    date: "",
    venue: "Laya Resorts, Kukulegaga",
    summary: "Military-Led Team Building & Leadership Development.",
    details: "Coordinated full-day leadership and team-building programs conducted with Sri Lankan Army trainers.",
    coverImage: getImage("outboundTraining/obt_01.jpeg"),
    videos: [
      {
        id: "inaug-vid-1",
        title: "June 2026 Intake",
        subtitle: "",
        embedUrl: "https://www.youtube.com/embed/VT533jaApm4?si=n6PMB9jl5MLfc4XC",
        //thumbnailUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
        duration: "",
        views: ""
      }
    ],
    gallery: [
      {
        id: "obt-g1",
        url: getImage("outboundTraining/obt_01.jpeg"),
        title: "",
        caption: ""
      },
      {
        id: "obt-g2",
        url: getImage("outboundTraining/obt_02.jpeg"),
        title: "",
        caption: ""
      }
    ],
    metrics: [
      { label: "Training Partner", value: "Sri Lanka Army Trainers" },
      { label: "Program Format", value: "Full-Day Leadership & Outbound" },
      { label: "Operations Scope", value: "End-to-End Logistics" }
    ],
    responsibilities: [
      "Planned program schedules, logistics, accommodation, transportation, and training arrangements.",
      "Coordinated communication with students, parents, trainers, hotels, and transportation providers.",
      "Managed participant experience and operational execution.",
      "Coordinated event documentation and media coverage."
    ],
    tags: ["Leadership Training", "Outbound Training", "Program Coordination", "Logistics Leadership", "Event Execution"], mediaLinks: [
      { label: "Youtube Video", url: "https://youtu.be/VT533jaApm4?si=NfbNAWcKY0Ul7dFL", type: "youtube" }
    ]
  }
];

export const competencies = [
  {
    id: "social-media-analytics",
    title: "Social Media & Analytics",
    description: "Own channels the way a top-tier tech brand should — not just scheduling, but building community, tapping cultural moments, and driving real conversation. Skilled at pulling insight from performance data that shapes what gets made next.",
    skills: ["Multi-Platform Channel Strategy", "Community Building", "Analytics-Led Content Optimization"],
    icon: "share-2"
  },
  {
    id: "event-operations",
    title: "Large-Scale Event Production",
    description: "End-to-end execution of prestigious conventions, graduation ceremonies, tech summits, and gala events — from vendor management to stage direction and guest experience.",
    skills: ["Stage Direction & Cues", "VIP Protocol & Hospitality", "Budget & Vendor Management"],
    icon: "calendar"
  },
  {
    id: "content-engine-storytelling",
    title: "Content Engine & Storytelling",
    description: "Concept-to-publish ownership of podcasts, video series, and campaign content — covering scripting, recording direction, editing sign-off, and multi-channel distribution.",
    skills: ["Podcast & Video Production", "Copywriting", "Analytics-Led Optimization"],
    icon: "video"
  },
  {
    id: "internal-communications-project-ownership",
    title: "Internal Communications & Project Ownership",
    description: "Independent leadership of cross-functional teams — academic, technical, marketing, and operational — keeping stakeholders aligned and informed from concept through delivery.",
    skills: ["Cross-Functional Coordination", "Stakeholder Alignment", "Strategic Initiative Ownership"],
    icon: "users"
  }
];

export const careerMilestones = [
  {
    role: "Head of Academic Affairs",
    company: "Institute of Computer Engineering Technology (iCET)",
    period: "Jan 2024 – Present",
    type: "Full-Time Executive",
    location: "Panadura & Colombo, Sri Lanka",
    description: "Own academic operations, industry engagement, content, and student experience for a fast-growing IT education brand.",
    achievements: [
      "Lead 15+ industry professionals across academic and industry-facing initiatives.",
      "Built iCET's podcast, workshop, and student storytelling programs from concept to publish.",
      "Directed the BMICH Diploma Awarding Ceremony for 500+ students and parents.",
      "Own content pipeline end-to-end: research, scripting, recording, editing sign-off, YouTube and social publishing.",
      "Turn emerging tech trends into workshops, podcast topics, and engagement campaigns.",
      "Create the industry, student, and employer stories that carry the brand externally."
    ]
  },
  {
    role: "Lecturer",
    company: "Institute of Computer Engineering Technology (iCET)",
    period: "Jul 2023 – Jan 2025",
    type: "Academic Faculty",
    location: "Panadura & Colombo, Sri Lanka",
    description: "Delivered IT and software engineering education, keeping content industry-relevant through direct collaboration with practitioners; built technical learning materials and supported workshops and student engagement.",
    achievements: [
      "Delivered industry-aligned IT and software engineering curriculum.",
      "Collaborated directly with practitioners to build technical learning materials.",
      "Supported workshop execution and student engagement initiatives."
    ]
  },
  {
    role: "Assistant Lecturer",
    company: "Institute of Computer Engineering Technology (iCET)",
    period: "Jan 2023 – Jun 2023",
    type: "Academic Support",
    location: "Panadura & Colombo, Sri Lanka",
    description: "Supported academic programs, event coordination, and stakeholder communication in a fast-growing institution.",
    achievements: [
      "Assisted in daily academic operations and program administration.",
      "Coordinated campus events and stakeholder communications."
    ]
  }
];

export const educationList = [
  {
    degree: "Bachelor of Information Technology (BIT)",
    institution: "University of Colombo School of Computing (UCSC)",
    period: "In Progress, Expected October 2026",
    details: "Key Modules: Software Engineering & Agile Methodologies, Data Structures & Algorithms, Object-Oriented Analysis & Design (OOAD), Enterprise Application Development, Web Application Development (I & II), User Experience Design, Database Systems, Computer Networks, IT Project Management"
  },
  {
    degree: "Higher Diploma in Information Technology (65 Credits)",
    institution: "University of Colombo School of Computing (UCSC)",
    period: "October 2025",
    details: "Intermediate academic milestone completed under the UCSC external degree program."
  },
  {
    degree: "Diploma in Digital Marketing (DDM)",
    institution: "Sri Lanka Institute of Marketing (SLIM)",
    period: "2024 – 2025",
    details: "Key Modules: Social Media Marketing & Advertising, Content Marketing, Search Engine Optimization (SEO), Digital Campaign Management (SEM, Display & Video Ads), Strategic Digital Planning, Web & App Development Concepts, Contemporary Digital Themes (AI, Data-Driven Marketing, CRM)"
  },
  {
    degree: "G.C.E. Advanced Level (Maths Stream)",
    institution: "Sri Sumangala Balika Vidyalaya - Panadura",
    period: "2019",
    details: "Results: Physics (B), Chemistry (B), Combined Maths (C)"
  },
  {
    degree: "G.C.E. Ordinary Level",
    institution: "Sri Sumangala Balika Vidyalaya - Panadura",
    period: "2015",
    details: "Results: 8 A's, 1 B"
  }
];