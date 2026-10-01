import eventOne from "../../assets/eventBannerOne.jpg";
import eventTwo from "../../assets/eventBannerTwo.jpg";
import eventThree from "../../assets/eventBannerThree.jpg";
import eventFour from "../../assets/eventBannerFour.jpg";
import eventFive from "../../assets/eventBannerFive.jpg";
import eventSix from "../../assets/eventBannerSix.jpg";


export const mockEvents = [
  {
    // =====================================================
    // EVENT 1
    // =====================================================
    id: 1,
    slug: "sbs-mtv-the-kpop-show",

    // Basic Information
    title: "SBS MTV The Kpop Show",
    banner: eventOne,

    description:
      "Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop recording.",

    type: "Live Music Experience",

    categories: ["Music", "Nightlife", "Any Category"],

    // Date & Time
    date: "21 September, 2026",
    startTime: "4:00 PM",
    endTime: "10:00 PM",

    // Venue
    venue: {
      name: "The Warfield",
      address: "982 Market Street, San Francisco",
      city: "Uyo",
      country: "Nigeria",
      directionsUrl: "",
    },

    // About
    about: {
      title: "An unforgettable experience filled with great moments, exciting energy, and everything that brings people together.",
      content:
        "SBS MTV The Kpop Show brings fans together for an exciting live music experience filled with performances, entertainment and unforgettable moments.",
    },

    // Schedule
    schedule: [
    {
      id: "event-1-schedule-1",
      title: "Doors Open",
      time: "4:00 PM",
      description: "Guests arrive and get settled before the show begins.",
    },
    {
      id: "event-1-schedule-2",
      title: "Main Kpop Show",
      time: "6:00 PM",
      description: "The main live music experience featuring performances and entertainment.",
    },
  ],

    // Featured Guests
    featuredPeople: [
      {
        id: "event-1-person-1",
        name: "Featured Artist",
        role: "Performing Artist",
        image: "",
        bio: "Featured performer at the Kpop Show.",
      },
      {
        id: "event-1-person-2",
        name: "Special Guest",
        role: "Special Guest",
        image: "",
        bio: "Special guest appearing during the event.",
      },
    ],

    // Gallery
    gallery: [
      eventOne,
      // Add additional event photos here
    ],

    // Tickets
    tickets: [
      {
        id: "event-1-ticket-1",
        name: "Regular",
        price: 10000,
        currency: "NGN",

        shortDescription: "General admission to the Kpop Show.",

        description:
          "Enjoy general admission access to SBS MTV The Kpop Show and experience the live performances and entertainment.",

        benefits: [
          "General event access",
          "Access to the main show",
          "Access to general viewing areas",
        ],

        restrictions: [],

        availability: {
          total: 1000,
          remaining: 1000,
        },
      },

      {
        id: "event-1-ticket-2",
        name: "VIP",
        price: 25000,
        currency: "NGN",

        shortDescription: "Premium access to the Kpop Show.",

        description:
          "Enjoy premium access to the event with an enhanced viewing experience and priority entry.",

        benefits: [
          "VIP event access",
          "Priority entry",
          "Premium viewing area",
        ],

        restrictions: [],

        availability: {
          total: 200,
          remaining: 200,
        },
      },
    ],

    // Organizer
    organizer: {
      id: "organizer-1",
      name: "SBS Events",
      logo: "",
      description:
        "An entertainment team creating memorable live music experiences.",
    },

    // FAQs
    faqs: [
      {
        question: "What time should I arrive?",
        answer: "Doors open at 4:00 PM.",
      },
      {
        question: "What does my ticket include?",
        answer:
          "Your ticket provides access according to the ticket type purchased.",
      },
      {
        question: "Can I get a refund?",
        answer: "Tickets are subject to the event refund policy.",
      },
    ],

    // Policies
    policies: {
      refundPolicy: "Tickets are subject to the event refund policy.",
      ageRestriction: "All ages",
      entryRequirements: ["Valid ticket required for entry."],
    },
  },

  // =====================================================
  // EVENT 2
  // =====================================================
  {
    id: 2,
    slug: "vibes-city-show",

    title: "Vibes City Show",
    banner: eventTwo,

    description:
      "A vibrant night of music, entertainment and unforgettable city vibes.",

    type: "Night Chilling Experience",

    categories: ["Music", "Any Category"],

    date: "01 October, 2026",
    startTime: "9:00 PM",
    endTime: "3:00 AM",

    venue: {
      name: "The Warfield",
      address: "982 Market Street, San Francisco",
      city: "Port Harcourt",
      country: "Nigeria",
      directionsUrl: "",
    },

    about: {
      title: "An unforgettable experience filled with great moments, exciting energy, and everything that brings people together.",
      content:
        "Vibes City Show is a late-night entertainment experience bringing music lovers together for a night of performances, DJs, socializing and good energy.",
    },
    

      schedule: [
    {
      id: "event-2-schedule-1",
      title: "Doors Open",
      time: "4:00 PM",
      description: "Guests arrive and get settled before the show begins.",
    },
    {
      id: "event-2-schedule-2",
      title: "Main Kpop Show",
      time: "6:00 PM",
      description: "The main live music experience featuring performances and entertainment.",
    },
    {
      id: "event-2-schedule-2",
      title: "DJ Session",
      time: "8:00 PM",
      description: "Live DJ performances and entertainment.",
    },
  ],


    featuredPeople: [
      {
        id: "event-2-person-1",
        name: "Featured DJ",
        role: "DJ",
        image: "",
        bio: "Featured DJ for the night.",
      },
      {
        id: "event-2-person-2",
        name: "Guest Artist",
        role: "Performing Artist",
        image: "",
        bio: "Special performing artist.",
      },
    ],

    gallery: [eventTwo],

    tickets: [
      {
        id: "event-2-ticket-1",
        name: "Regular",
        price: 5000,
        currency: "NGN",

        shortDescription: "General access to Vibes City Show.",

        description:
          "Enjoy a full night of music, performances and entertainment.",

        benefits: [
          "General event access",
          "Access to performances",
        ],

        restrictions: ["18+"],

        availability: {
          total: 1000,
          remaining: 1000,
        },
      },

      {
        id: "event-2-ticket-2",
        name: "VIP",
        price: 15000,
        currency: "NGN",

        shortDescription: "Premium access and viewing.",

        description:
          "Enjoy a premium experience with priority access and an enhanced viewing area.",

        benefits: [
          "VIP access",
          "Priority entry",
          "Premium viewing area",
        ],

        restrictions: ["18+"],

        availability: {
          total: 150,
          remaining: 150,
        },
      },
    ],

    organizer: {
      id: "organizer-2",
      name: "Vibes City",
      logo: "",
      description:
        "A team focused on creating memorable entertainment experiences.",
    },

    faqs: [
      {
        question: "What time does the event start?",
        answer: "Doors open at 9:00 PM.",
      },
      {
        question: "Is the event 18+?",
        answer: "Yes, this event is intended for adults.",
      },
    ],

    policies: {
      refundPolicy: "Tickets are subject to the event refund policy.",
      ageRestriction: "18+",
      entryRequirements: ["Valid ticket required."],
    },
  },

  // =====================================================
  // EVENT 3
  // =====================================================
  {
    id: 3,
    slug: "street-boxing-exhibition",

    title: "Street Boxing Exhibition",
    banner: eventThree,

    description:
      "Experience an exciting live boxing exhibition featuring competitive bouts, entertainment and an electric crowd atmosphere.",

    type: "Live Boxing Experience",

    categories: ["Sport", "Nightlife", "Any Category"],

    date: "05 November, 2026",
    startTime: "5:00 PM",
    endTime: "10:00 PM",

    venue: {
      name: "The Warfield",
      address: "982 Market Street, San Francisco",
      city: "Lagos",
      country: "Nigeria",
      directionsUrl: "",
    },

    about: {
      title: "An unforgettable experience filled with great moments, exciting energy, and everything that brings people together.",
      content:
        "Street Boxing Exhibition brings boxing fans together for an exciting evening of exhibition bouts, athletic performances and live entertainment.",
    },


    schedule: [
      {
        id: "event-3-schedule-1",
        title: "Doors Open",
        time: "4:00 PM",
        description: "Guests arrival and get seating .",
      },
      {
        id: "event-3-schedule-2",
        title: "Main show",
        time: "6:00 PM",
        description: "Opening exhibition bouts",
      },
      {
        id: "event-3-schedule-3",
        title: "Main Exhibition",
        time: "7:00 PM",
        description: "Main event.",
      },
       {
        id: "event-3-schedule-4",
        title: "Closing",
        time: "10:00 PM",
        description: "Winner announcement.",
      },
    ],

 
    featuredPeople: [
      {
        id: "event-3-person-1",
        name: "Featured Boxer",
        role: "Boxer",
        image: "",
        bio: "Featured boxer competing in the exhibition.",
      },
      {
        id: "event-3-person-2",
        name: "Event Host",
        role: "Host",
        image: "",
        bio: "Host for the boxing exhibition.",
      },
    ],

    gallery: [eventThree],

    tickets: [
      {
        id: "event-3-ticket-1",
        name: "General Admission",
        price: 7500,
        currency: "NGN",

        shortDescription: "General access to the boxing exhibition.",

        description:
          "Get access to the live boxing exhibition and experience the action from the general viewing area.",

        benefits: [
          "General event access",
          "Access to all scheduled bouts",
        ],

        restrictions: [],
        availability: {
          total: 800,
          remaining: 800,
        },
      },

      {
        id: "event-3-ticket-2",
        name: "VIP",
        price: 20000,
        currency: "NGN",

        shortDescription: "Premium ringside experience.",

        description:
          "Enjoy premium access with a closer view of the action and priority entry.",

        benefits: [
          "VIP access",
          "Premium seating",
          "Priority entry",
        ],

        restrictions: [],
        availability: {
          total: 100,
          remaining: 100,
        },
      },
    ],

    organizer: {
      id: "organizer-3",
      name: "Street Boxing Events",
      logo: "",
      description:
        "Organizers creating exciting live sporting experiences.",
    },

    faqs: [
      {
        question: "When do doors open?",
        answer: "Doors open at 5:00 PM.",
      },
      {
        question: "Are children allowed?",
        answer: "Entry requirements depend on the event policy.",
      },
    ],

    policies: {
      refundPolicy: "Tickets are subject to the event refund policy.",
      ageRestriction: "All ages",
      entryRequirements: ["Valid ticket required."],
    },
  },

  // =====================================================
  // EVENT 4
  // =====================================================
  {
    id: 4,
    slug: "unfathomable-fight-night",

    title: "Unfathomable Fight Night",
    banner: eventFour,

    description:
      "A high-energy live fight experience bringing fans together for an unforgettable night of competition and entertainment.",

    type: "Live Boxing Experience",

    categories: ["Sport", "Nightlife", "Any Category"],

    date: "26 December, 2026",
    startTime: "6:00 PM",
    endTime: "11:00 PM",

    venue: {
      name: "The Warfield",
      address: "982 Market Street, San Francisco",
      city: "Uyo",
      country: "Nigeria",
      directionsUrl: "",
    },

    about: {
      title: "An unforgettable experience filled with great moments, exciting energy, and everything that brings people together.",
      content:
        "Unfathomable Fight Night delivers an exciting evening of live competition, athletic performances and entertainment for fight fans.",
    },

    schedule: [
      {
        id: "event-4-schedule-1",
        title: "Doors Open",
        startTime: "6:00 PM",
        description: "Audience arrival and seating.",
      },
      {
        id: "event-4-schedule-2",
        title: "Opening Fights",
        time: "7:00 PM",
        description: "Opening bouts of the evening.",
      },
      {
        id: "event-4-schedule-3",
        title: "Main Fight",
        time: "9:00 PM",
        description: "Main fight of the evening.",
      },
      {
        id: "event-4-schedule-4",
        title: "Closing",
        time: "10:30 PM",
        description: "Closing announcements and activities.",
      },
    ],

    featuredPeople: [
      {
        id: "event-4-person-1",
        name: "Featured Fighter",
        role: "Boxer",
        image: "",
        bio: "Featured fighter at Fight Night.",
      },
      {
        id: "event-4-person-2",
        name: "Fight Night Host",
        role: "Host",
        image: "",
        bio: "Host for the event.",
      },
    ],

    gallery: [eventFour],

    tickets: [
      {
        id: "event-4-ticket-1",
        name: "Regular",
        price: 7500,
        currency: "NGN",

        shortDescription: "General access to Fight Night.",

        description:
          "Experience the full Fight Night event with access to the general viewing areas.",

        benefits: [
          "General event access",
          "Access to all scheduled fights",
        ],

        restrictions: [],
        availability: {
          total: 800,
          remaining: 800,
        },
      },

      {
        id: "event-4-ticket-2",
        name: "VIP",
        price: 20000,
        currency: "NGN",

        shortDescription: "Premium Fight Night experience.",

        description:
          "Enjoy premium seating, priority entry and a closer view of the action.",

        benefits: [
          "VIP access",
          "Premium seating",
          "Priority entry",
        ],

        restrictions: [],
        availability: {
          total: 150,
          remaining: 150,
        },
      },
    ],

    organizer: {
      id: "organizer-4",
      name: "Unfathomable Events",
      logo: "",
      description:
        "Organizers creating live sporting and entertainment experiences.",
    },

    faqs: [
      {
        question: "What time does the event begin?",
        answer: "Doors open at 6:00 PM.",
      },
      {
        question: "What does VIP include?",
        answer:
          "VIP includes premium seating and priority entry.",
      },
    ],

    policies: {
      refundPolicy: "Tickets are subject to the event refund policy.",
      ageRestriction: "All ages",
      entryRequirements: ["Valid ticket required."],
    },
  },

  // =====================================================
  // EVENT 5
  // =====================================================
  {
    id: 5,
    slug: "championship-tournament",

    title: "Championship Tournament",
    banner: eventFive,

    description:
      "Experience a live football tournament featuring exciting competition, passionate fans and an unforgettable sporting atmosphere.",

    type: "Live Football Experience",

    categories: ["Sport", "Any Category"],

    date: "14 August, 2026",
    startTime: "10:00 AM",
    endTime: "6:00 PM",

    venue: {
      name: "The Warfield",
      address: "982 Market Street, San Francisco",
      city: "Calabar",
      country: "Nigeria",
      directionsUrl: "",
    },

    about: {
      title: "An unforgettable experience filled with great moments, exciting energy, and everything that brings people together.",
      content:
        "Championship Tournament brings football fans together for a full day of competitive matches, entertainment and community.",
    },

    schedule: [
      {
        id: "event-5-schedule-1",
        title: "Gates Open",
        time: "10:00 AM",
        description: "Fans arrive and enter the venue.",
      },
      {
        id: "event-5-schedule-2",
        title: "Opening Ceremony",
        time: "10:30 AM",
        description: "Official opening of the tournament.",
      },
      {
        id: "event-5-schedule-3",
        title: "Tournament Matches",
        time: "11:00 AM",
        description: "Competitive tournament matches.",
      },
      {
        id: "event-5-schedule-4",
        title: "Championship Final",
        time: "4:00 PM",
        description: "The final match of the tournament.",
      },
      {
        id: "event-5-schedule-5",
        title: "Awards & Closing",
        time: "5:30 PM",
        description: "Awards presentation and closing ceremony.",
      },
    ],

    featuredPeople: [
      {
        id: "event-5-person-1",
        name: "Featured Player",
        role: "Football Player",
        image: "",
        bio: "Featured participant in the tournament.",
      },
      {
        id: "event-5-person-2",
        name: "Tournament Host",
        role: "Host",
        image: "",
        bio: "Host for the championship tournament.",
      },
    ],

    gallery: [eventFive],

    tickets: [
      {
        id: "event-5-ticket-1",
        name: "Regular",
        price: 5000,
        currency: "NGN",

        shortDescription:
          "General admission to the championship tournament.",

        description:
          "Enjoy access to the tournament and experience the matches from the general viewing areas.",

        benefits: [
          "General event access",
          "Access to tournament matches",
          "Access to closing ceremony",
        ],

        restrictions: [],

        availability: {
          total: 1000,
          remaining: 1000,
        },
      },

      {
        id: "event-5-ticket-2",
        name: "VIP",
        price: 15000,
        currency: "NGN",

        shortDescription:
          "Premium access to the championship tournament.",

        description:
          "Enjoy premium seating, priority entry and an enhanced tournament experience.",

        benefits: [
          "VIP access",
          "Premium viewing area",
          "Priority entry",
        ],

        restrictions: [],

        availability: {
          total: 150,
          remaining: 150,
        },
      },
    ],

    organizer: {
      id: "organizer-5",
      name: "Championship Events",
      logo: "",
      description:
        "Organizers creating competitive sporting experiences.",
    },

    faqs: [
      {
        question: "When does the tournament start?",
        answer: "Gates open at 10:00 AM.",
      },
      {
        question: "What does VIP include?",
        answer:
          "VIP includes premium viewing and priority entry.",
      },
    ],

    policies: {
      refundPolicy: "Tickets are subject to the event refund policy.",
      ageRestriction: "All ages",
      entryRequirements: ["Valid ticket required."],
    },
  },

  // =====================================================
  // EVENT 6
  // =====================================================
  {
    id: 6,
    slug: "kids-tech-holiday-camp",

    title: "Kids Tech Holiday Camp",
    banner: eventSix,

    description:
      "An interactive holiday technology experience designed to help young learners explore creativity, technology and digital skills.",

    type: "Tech Experience",

    categories: ["Tech", "Any Category"],

    date: "30 November, 2026",
    startTime: "8:00 AM",
    endTime: "4:00 PM",

    venue: {
      name: "The Warfield",
      address: "982 Market Street, San Francisco",
      city: "Uyo",
      country: "Nigeria",
      directionsUrl: "",
    },

    about: {
      title: "An unforgettable experience filled with great moments, exciting energy, and everything that brings people together. Come celebrate.",
      content:
        "Kids Tech Holiday Camp is an interactive technology experience designed to introduce young participants to technology, creativity and practical digital skills in a fun environment.",
    },

    schedule: [
      {
        id: "event-6-schedule-1",
        title: "Registration & Welcome",
        time: "8:00 AM",
        description:
          "Registration, introductions and orientation for participants.",
      },
      {
        id: "event-6-schedule-2",
        title: "Technology Workshop",
        time: "9:00 AM",
        description:
          "An interactive technology learning session.",
      },
      {
        id: "event-6-schedule-3",
        title: "Creative Tech Activity",
        time: "11:30 AM",
        description:
          "A hands-on activity where participants apply what they have learned.",
      },
      {
        id: "event-6-schedule-4",
        title: "Project Showcase",
        time: "2:00 PM",
        description:
          "Participants showcase what they created during the camp.",
      },
      {
        id: "event-6-schedule-5",
        title: "Closing Session",
        time: "3:00 PM",
        description:
          "Final activities and closing of the camp.",
      },
    ],

    featuredPeople: [
      {
        id: "event-6-person-1",
        name: "Tech Instructor",
        role: "Instructor",
        image: "",
        bio:
          "Technology instructor leading participants through the camp.",
      },
      {
        id: "event-6-person-2",
        name: "Guest Mentor",
        role: "Mentor",
        image: "",
        bio:
          "Guest mentor helping participants explore technology and creativity.",
      },
    ],

    gallery: [eventSix],

    tickets: [
      {
        id: "event-6-ticket-1",
        name: "Standard",
        price: 10000,
        currency: "NGN",

        shortDescription:
          "Full access to the technology camp.",

        description:
          "Provides access to the Kids Tech Holiday Camp, including scheduled workshops, activities and the project showcase.",

        benefits: [
          "Full camp access",
          "Technology workshops",
          "Hands-on activities",
          "Project showcase",
        ],

        restrictions: [
          "Parent or guardian information may be required.",
        ],

        availability: {
          total: 100,
          remaining: 100,
        },
      },

      {
        id: "event-6-ticket-2",
        name: "Premium",
        price: 20000,
        currency: "NGN",

        shortDescription:
          "Enhanced access to the technology camp.",

        description:
          "Includes full camp access with additional premium learning materials and benefits.",

        benefits: [
          "Full camp access",
          "All workshops",
          "Hands-on activities",
          "Premium materials",
          "Project showcase",
        ],

        restrictions: [
          "Parent or guardian information may be required.",
        ],

        availability: {
          total: 50,
          remaining: 50,
        },
      },
    ],

    organizer: {
      id: "organizer-6",
      name: "Kids Tech Events",
      logo: "",
      description:
        "An organization creating fun and educational technology experiences for young learners.",
    },

    faqs: [
      {
        question: "What time should participants arrive?",
        answer: "Registration begins at 8:00 AM.",
      },
      {
        question: "What should participants bring?",
        answer:
          "Participants should bring any required personal learning materials specified by the organizers.",
      },
      {
        question: "Who can attend?",
        answer:
          "The camp is designed for children and young learners.",
      },
    ],

    policies: {
      refundPolicy:
        "Tickets are subject to the event refund policy.",
      ageRestriction: "Children and young learners",
      entryRequirements: [
        "Valid ticket required.",
        "Parent or guardian information may be required.",
      ],
    },
  },
];
