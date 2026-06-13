// ===========================================================================
// Support Life Foundation — content source of truth (exact PDF content).
// ===========================================================================

export const FALLBACK_IMAGE = '/images/hero-volunteers.png';

export const IMAGES = {
    // Real Support Life Foundation photography (provided by the organization)
    heroVolunteers: '/images/hero-volunteers.png',
    foodHands: '/images/volunteers-1.png',
    distribution: '/images/volunteers-2.png',
    carryingBox: '/images/volunteers-1.png',
    community: '/images/volunteers-2.png',
    mission: '/images/volunteers-1.png',
    sierraLeone: '/images/sierra-leone.png',
    // Topical imagery for program themes without a dedicated org photo
    hotMeal:
        'https://images.unsplash.com/photo-1547592180-85f173990554?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600',
    education:
        'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600',
    tutoring:
        'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600',
    vaccine:
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600',
    census:
        'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600',
    fire:
        'https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600',
};

export const CONTACT = {
    phone: '+(510) 541-6293',
    phoneHref: 'tel:+15105416293',
    email: 'info@supportlives.org',
    emailHref: 'mailto:info@supportlives.org',
    address: '3349 International Blvd. Suite 3, Oakland, CA 94601',
    addressMap:
        'https://maps.google.com/?q=3349+International+Blvd+Suite+3+Oakland+CA+94601',
};

export const SOCIALS = [
    { name: 'Facebook', icon: 'facebook', href: '#' },
    { name: 'Twitter', icon: 'twitter', href: '#' },
    { name: 'Instagram', icon: 'instagram', href: '#' },
];

export const TAGLINE = 'Empowering Communities, Inspiring Action.';

export const MISSION_STATEMENT =
    'Our goal is to alleviate the various forms of oppression in society by developing unique programs that maximize the potential of every community we serve.';

export const NAV_LINKS = [
    { label: 'Programs', to: '/programs' },
    { label: 'International Programs', to: '/international' },
    { label: 'Get Involved', to: '/get-involved' },
    { label: 'Mission', to: '/mission' },
];

// --- Impact stats band -----------------------------------------------------
export const IMPACT_STATS = [
    { value: '20,000+', label: 'COVID-19 vaccines distributed across the Bay Area' },
    { value: '1,400+', label: 'Census job applications secured for the community' },
    { value: 'Weekly', label: 'HALAL hot meals delivered to families in need' },
    { value: 'Local + Global', label: 'Programs spanning Oakland to Sierra Leone' },
];

// --- Programs --------------------------------------------------------------
// status: 'active' | 'inactive' | 'expired'
export const PROGRAMS = [
    {
        slug: 'you-are-not-alone',
        title: 'You Are Not Alone!',
        short: 'YANA Community Food Share',
        category: 'Local',
        status: 'active',
        icon: 'truck',
        image: IMAGES.foodHands,
        summary:
            'This volunteer driven food redistribution program delivers fresh produce and groceries to our local communities in need.',
        sections: [
            {
                heading: 'Receive YANA Donations',
                body:
                    'If you or someone you know needs food assistance, YANA is here for you. Fill out the YANA Client Form below to request fresh produce and groceries delivered with dignity and care to families across our local communities.',
            },
            {
                heading: 'Volunteer in YANA',
                body:
                    'YANA runs entirely on the generosity of volunteers. Fill out the YANA volunteer form below to help sort, pack, and deliver fresh produce and groceries to neighbors in need.',
            },
        ],
        ctas: [
            { label: 'YANA Client Form', variant: 'primary' },
            { label: 'YANA Volunteer Form', variant: 'secondary' },
        ],
    },
    {
        slug: 'hot-meals',
        title: 'Hot Meals',
        short: 'Weekly HALAL meals',
        category: 'Local',
        status: 'active',
        icon: 'utensils',
        image: IMAGES.hotMeal,
        summary:
            'This program utilizes our community kitchen and perishable ingredients to create delicious weekly delivered meals to people in need.',
        sections: [
            {
                heading: 'Free HALAL Hot Meals',
                body:
                    'We are offering families free HALAL hot meals from local restaurants and kitchens every week until September! The hot meals are curated, balanced, healthy meals made up of select items and offerings from the restaurant and pre-packaged in to-go boxes for your convenience.',
            },
            {
                heading: 'Allergy & Dietary Needs',
                body:
                    'We are not able to accommodate any specific allergy and dietary needs through our program at this time.',
            },
        ],
        ctas: [{ label: 'Request Hot Meals', variant: 'primary' }],
    },
    {
        slug: 'project-educate',
        title: 'Project Educate',
        short: 'College tutors for students',
        category: 'Local',
        status: 'active',
        icon: 'graduation-cap',
        image: IMAGES.tutoring,
        summary:
            'This program enables high school students that struggle academically to have access to college tutors.',
        sections: [
            {
                heading: 'What is Project Educate?',
                body:
                    "High schools around the country are suffering from a lack of funding, resources, and most importantly teachers. The student-to-teacher ratio is at an all time high and our communities' children pay the ultimate price. Project Educate is a program designed to alleviate some of that pressure by utilizing the power of volunteerism to provide teaching assistants in every classroom.",
            },
            {
                heading: 'Our Volunteers are Students Too',
                body:
                    'We gather volunteers from various colleges and universities, including UC Berkeley! The volunteers earn course credit for their efforts, along with an enriching experience.',
            },
        ],
        ctas: [{ label: 'Become a Tutor', variant: 'primary' }],
    },
    {
        slug: 'covid-19-vaccination',
        title: 'COVID-19 Mobile Vaccination Clinics',
        short: 'FEMA vaccine partnership',
        category: 'Local',
        status: 'inactive',
        icon: 'syringe',
        image: IMAGES.vaccine,
        summary:
            'Support Life foundation partnered with FEMA to distribute over 20,000 COVID-19 vaccines all over the Bay Area.',
        sections: [
            {
                heading: 'A Bay Area-wide Response',
                body:
                    'Support Life Foundation partnered with FEMA to distribute over 20,000 COVID-19 vaccines all over the Bay Area, bringing accessible healthcare directly to the communities that needed it most.',
            },
        ],
        ctas: [],
    },
    {
        slug: 'the-hiring-2020-census',
        title: 'The Hiring — 2020 Census',
        short: 'U.S. Census 2020 jobs',
        category: 'Local',
        status: 'expired',
        icon: 'landmark',
        image: IMAGES.census,
        summary:
            'In 2020 the decennial Census reinitiated. Support Life worked around the clock to secure as many part-time positions as possible for our local community.',
        sections: [
            {
                heading: 'This Program Has Expired',
                body:
                    'Over 1400 applications! The Hiring is over, but you can still learn more about the U.S. Census 2020. Support Life worked around the clock to secure as many part-time and full-time positions as possible for our local community.',
            },
        ],
        ctas: [{ label: 'Learn more', variant: 'secondary' }],
    },
    {
        slug: 'millbrae-fire-campaign',
        title: 'Millbrae Fire Campaign',
        short: 'Disaster relief fundraiser',
        category: 'Local',
        status: 'inactive',
        icon: 'flame',
        image: IMAGES.fire,
        summary:
            'In April 2020, we fundraised for the families that were suddenly facing homelessness after a fire burned down their homes in Millbrae, CA.',
        sections: [
            {
                heading: 'The Details',
                body:
                    '“Terrified and hopeless” were the words Olga Sanchez, a Millbrae fire victim, used to describe the emotions that were running through her as she witnessed her apartment building being ravaged by the flames. In April 2020, we fundraised for the families that were suddenly facing homelessness after a fire burned down their homes in Millbrae, CA.',
            },
        ],
        ctas: [],
    },
];

export const getProgram = (slug) => PROGRAMS.find((p) => p.slug === slug);
export const LOCAL_PROGRAMS = PROGRAMS.filter((p) => p.category === 'Local');
export const ACTIVE_PROGRAMS = PROGRAMS.filter((p) => p.status === 'active');

// --- International program --------------------------------------------------
export const INTERNATIONAL = {
    slug: 'islamic-center-sierra-leone',
    title: 'Islamic Center of Sierra Leone',
    subtitle: 'Love Speech',
    image: IMAGES.sierraLeone,
    raised: 9949,
    goal: 250000,
    summary:
        "We're really excited about what we're creating on this land — a place that's going to be so much more than just buildings.",
    body:
        'We are building a mega mosque, a community center, a seminary, a conference spot, and a hub for workforce development. We have already built a fully equipped school and are now expanding after such a resoundingly positive response. To fulfill the basic needs of the community, namely food production, water and education, we are including a man-made lake, food distribution service, and education facility.',
    pillars: [
        { icon: 'landmark', title: 'Mega Mosque', text: 'A central place of worship for the growing community.' },
        { icon: 'users', title: 'Community Center', text: 'A gathering hub bringing neighbors together.' },
        { icon: 'book-open', title: 'Seminary & School', text: 'A fully equipped school, already built and expanding.' },
        { icon: 'briefcase', title: 'Workforce Development', text: 'A hub equipping people with skills and opportunity.' },
        { icon: 'droplets', title: 'Water & Lake', text: 'A man-made lake supporting food production and water needs.' },
        { icon: 'wheat', title: 'Food Production', text: 'A food distribution service for the community.' },
    ],
};

export const formatCurrency = (n) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

// --- Get involved pathways --------------------------------------------------
export const INVOLVE_PATHWAYS = [
    {
        icon: 'hand-heart',
        title: 'Volunteer',
        text: 'Join our volunteers sorting, packing, and delivering food, or tutoring students through Project Educate.',
        cta: 'Volunteer with us',
    },
    {
        icon: 'gift',
        title: 'Donate',
        text: 'Your gift fuels hot meals, food redistribution, education, and disaster relief across our communities.',
        cta: 'Make a donation',
    },
    {
        icon: 'megaphone',
        title: 'Spread the Word',
        text: 'Share our mission, watch the Support Life Documentary, and help inspire action in your network.',
        cta: 'Watch the documentary',
    },
];

// --- Donation tiers (visual only) ------------------------------------------
export const DONATION_TIERS = [
    { amount: 25, title: 'Feed a Neighbor', text: 'Provides a week of fresh produce through YANA Community Food Share.' },
    { amount: 75, title: 'Hot Meals for a Family', text: 'Delivers curated, balanced HALAL hot meals to a family in need.', featured: true },
    { amount: 150, title: 'Empower a Student', text: 'Supports college tutoring for high schoolers through Project Educate.' },
    { amount: 500, title: 'Build Globally', text: 'Advances the Islamic Center of Sierra Leone’s school, water, and food programs.' },
];
