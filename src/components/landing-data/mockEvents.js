import eventOne from "../../assets/eventBannerOne.jpg";
import eventTwo from "../../assets/eventBannerTwo.jpg";
import eventThree from "../../assets/eventBannerThree.jpg";
import eventFour from "../../assets/eventBannerFour.jpg";
import eventFive from "../../assets/eventBannerFive.jpg";
import eventSix from "../../assets/eventBannerSix.jpg";
import guestOne from "../../assets/guestOne.png"
import guestTwo from "../../assets/guestTwo.png"
import guestThree from "../../assets/guestThree.png"
import galleryOne from "../../assets/galleryOne.jpg"
import galleryTwo from "../../assets/galleryTwo.jpg"
import galleryThree from "../../assets/galleryThree.jpg"
import galleryFour from "../../assets/galleryFour.jpg"
import galleryFive from "../../assets/galleryFive.jpg"
import gallerySix from "../../assets/gallerySix.jpg"
import gallerySeven from "../../assets/gallerySeven.jpg"



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

    latitude: 4.9990,
    longitude: 7.9405,

    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=4.9990,7.9405"
    },

    // About
    about: {
      title:
        "An unforgettable experience filled with great moments, exciting energy, and everything that brings people together.",
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
        description:
          "The main live music experience featuring performances and entertainment.",
      },
    ],

    // Featured Guests
    featuredPeople: {
      title: "Featured Speakers",
      items: [
        {
          id: "event-1-person-1",
          name: "Nori mark",
          role: "Creative Director",
          image: guestOne,
        },
        {
          id: "event-1-person-2",
          name: "Daniel Brian",
          role: "Music Producer",
          image: guestTwo,
        },
        {
          id: "event-1-person-3",
          name: "juan Chichi",
          role: "Tour Host",
          image: guestThree,
        },
      ],
    },

    // Gallery
    gallery: [
        { id: "event-1-photo-1", url: galleryOne },
        { id: "event-1-photo-2", url: galleryTwo },
        { id: "event-1-photo-3", url: galleryThree },
        { id: "event-1-photo-4", url: galleryFour },
    ],

    // Tickets
    tickets: [
      {
        id: "event-1-ticket-1",
        name: "Regular",
        price: 10000,
        currency: "NGN",
        benefits: [
          "General admission",
          "Main floor access",
          "Digital event keepsake",
        ],
        availability: {
          total: 1000,
          remaining: 1000,
          showRemaining: false,
        },
      },
      {
        id: "event-1-ticket-2",
        name: "VIP",
        price: 25000,
        currency: "NGN",
        benefits: [
          "Priority entry",
          "Premium floor section",
          "Exclusive tour merchandise",
        ],
        availability: {
          total: 200,
          remaining: 200,
          showRemaining: false,
        },
      },
      {
        id: "event-1-ticket-3",
        name: "VVIP",
        price: 60000,
        currency: "NGN",
        benefits: [
          "Front-row reserved seat",
          "Pre-show soundcheck",
          "Artist photo opportunity",
        ],
        availability: {
          total: 50,
          remaining: 50,
          showRemaining: false,
        },
      },
    ],
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
    city: "Uyo",
    country: "Nigeria",

    latitude: 4.9990,
    longitude: 7.9405,

    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=4.9990,7.9405"
    },

    about: {
      title:
        "An unforgettable experience filled with great moments, exciting energy, and everything that brings people together.",
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
        description:
          "The main live music experience featuring performances and entertainment.",
      },
      {
        id: "event-2-schedule-3",
        title: "DJ Session",
        time: "8:00 PM",
        description: "Live DJ performances and entertainment.",
      },
    ],

    featuredPeople: {
      title: "Featured Speakers",
      items: [
        {
          id: "event-2-person-1",
          name: "Nori mark",
          role: "Creative Director",
          image: guestOne,
        },
        {
          id: "event-2-person-2",
          name: "Daniel Brian",
          role: "Music Producer",
          image: guestTwo,
        },
        {
          id: "event-2-person-3",
          name: "juan Chichi",
          role: "Tour Host",
          image: guestThree,
        },
        {
          id: "event-2-person-4",
          name: "juan Chichi",
          role: "Tour Host",
          image: guestThree,
        },
        {
          id: "event-2-person-5",
          name: "Nori mark",
          role: "Creative Director",
          image: guestOne,
        },
        {
          id: "event-2-person-6",
          name: "Daniel Brian",
          role: "Music Producer",
          image: guestTwo,
        },
        {
          id: "event-2-person-7",
          name: "Daniel Brian",
          role: "Music Producer",
          image: guestTwo,
        },
      ],
    },
  
   gallery: [
        { id: "event-2-photo-1", url: galleryOne },
        { id: "event-2-photo-2", url: galleryTwo },
        { id: "event-2-photo-3", url: galleryThree },
        { id: "event-2-photo-4", url: galleryFour },
        { id: "event-2-photo-5", url: galleryFive },
        { id: "event-2-photo-6", url: gallerySix },
    ],

    tickets: [
      {
        id: "event-2-ticket-1",
        name: "Regular",
        price: 5000,
        currency: "NGN",
        benefits: [
          "General event access",
          "Access to all performances",
          "Open dance floor",
        ],
        availability: {
          total: 1000,
          remaining: 1000,
          showRemaining: false,
        },
      },
      {
        id: "event-2-ticket-2",
        name: "VIP",
        price: 15000,
        currency: "NGN",
        benefits: [
          "Priority entry",
          "Reserved lounge area",
          "Complimentary welcome drink",
        ],
        availability: {
          total: 150,
          remaining: 150,
          showRemaining: false,
        },
      },
      {
        id: "event-2-ticket-3",
        name: "VVIP",
        price: 30000,
        currency: "NGN",
        benefits: [
          "Private table service",
          "Meet the DJ",
          "Express bar access",
        ],
        availability: {
          total: 50,
          remaining: 50,
          showRemaining: false,
        },
      },
    ],
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
    city: "Uyo",
    country: "Nigeria",

    latitude: 4.9990,
    longitude: 7.9405,

    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=4.9990,7.9405"
    },

    about: {
      title:
        "An unforgettable experience filled with great moments, exciting energy, and everything that brings people together.",
      content:
        "Street Boxing Exhibition brings boxing fans together for an exciting evening of exhibition bouts, athletic performances and live entertainment.",
    },

    schedule: [
      {
        id: "event-3-schedule-1",
        title: "Doors Open",
        time: "4:00 PM",
        description: "Guests arrival and get seating.",
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

    featuredPeople: {
      title: "",
      items: [],
    },

    gallery: [
        { id: "event-3-photo-1", url: galleryOne },
        { id: "event-3-photo-2", url: galleryTwo },
        { id: "event-3-photo-3", url: galleryThree },
        { id: "event-3-photo-4", url: galleryFour },
        { id: "event-3-photo-5", url: galleryFive },
        { id: "event-3-photo-6", url: gallerySix },
        { id: "event-3-photo-7", url: gallerySeven },
    ],

    tickets: [
      {
        id: "event-3-ticket-1",
        name: "General Admission",
        price: 7500,
        currency: "NGN",
        benefits: [
          "General event access",
          "Standing viewing area",
          "Access to all scheduled bouts",
        ],
        availability: {
          total: 800,
          remaining: 800,
          showRemaining: false,
        },
      },
      {
        id: "event-3-ticket-2",
        name: "VIP",
        price: 20000,
        currency: "NGN",
        benefits: [
          "Priority entry",
          "Premium seating",
          "Closer view of the ring",
        ],
        availability: {
          total: 100,
          remaining: 100,
          showRemaining: false,
        },
      },
      {
        id: "event-3-ticket-3",
        name: "VVIP",
        price: 60000,
        currency: "NGN",
        benefits: [
          "Ringside seat",
          "Meet the fighters",
          "Exclusive event merchandise",
        ],
        availability: {
          total: 40,
          remaining: 40,
          showRemaining: false,
        },
      },
    ],
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

    latitude: 4.9990,
    longitude: 7.9405,

    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=4.9990,7.9405"
    },

    about: {
      title:
        "An unforgettable experience filled with great moments, exciting energy, and everything that brings people together.",
      content:
        "Unfathomable Fight Night delivers an exciting evening of live competition, athletic performances and entertainment for fight fans.",
    },

    schedule: [
      {
        id: "event-4-schedule-1",
        title: "Doors Open",
        time: "6:00 PM",
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

    featuredPeople: {
      title: "Featured Speakers",
      items: [
        {
          id: "event-4-person-1",
          name: "Nori mark",
          role: "Creative Director",
          image: guestOne,
        },
        {
          id: "event-4-person-2",
          name: "Daniel Brian",
          role: "Music Producer",
          image: guestTwo,
        },
        {
          id: "event-4-person-3",
          name: "juan Chichi",
          role: "Tour Host",
          image: guestThree,
        },
        {
          id: "event-4-person-4",
          name: "juan Chichi",
          role: "Tour Host",
          image: guestThree,
        },
        {
          id: "event-4-person-5",
          name: "Nori mark",
          role: "Creative Director",
          image: guestOne,
        },
        {
          id: "event-4-person-6",
          name: "Daniel Brian",
          role: "Music Producer",
          image: guestTwo,
        },
        {
          id: "event-4-person-7",
          name: "Daniel Brian",
          role: "Music Producer",
          image: guestTwo,
        },
        {
          id: "event-4-person-8",
          name: "Daniel Brian",
          role: "Music Producer",
          image: guestTwo,
        },
      ],
    },

   
    gallery: [
        { id: "event-4-photo-1", url: galleryOne },
        { id: "event-4-photo-2", url: galleryTwo },
    ],


    tickets: [
      {
        id: "event-4-ticket-1",
        name: "Regular",
        price: 7500,
        currency: "NGN",
        benefits: [
          "General event access",
          "Standing viewing area",
          "Access to all scheduled fights",
        ],
        availability: {
          total: 800,
          remaining: 800,
          showRemaining: false,
        },
      },
      {
        id: "event-4-ticket-2",
        name: "VIP",
        price: 20000,
        currency: "NGN",
        benefits: [
          "Priority entry",
          "Premium seating",
          "Closer view of the ring",
        ],
        availability: {
          total: 150,
          remaining: 12,
          showRemaining: true,
        },
      },
    ],
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
    city: "Lagos",
    country: "Nigeria",

    latitude: 4.9990,
    longitude: 7.9405,

    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=4.9990,7.9405"
    },

    about: {
      title:
        "An unforgettable experience filled with great moments, exciting energy, and everything that brings people together.",
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

    featuredPeople: {
      title: "Featured Speakers",
      items: [
        {
          id: "event-5-person-1",
          name: "Daniel Brian",
          role: "Music Producer",
          image: guestTwo,
        },
        {
          id: "event-5-person-2",
          name: "juan Chichi",
          role: "Tour Host",
          image: guestThree,
        },
      ],
    },

    gallery: [],

    tickets: [
      {
        id: "event-5-ticket-1",
        name: "Regular",
        price: 5000,
        currency: "NGN",
        benefits: [
          "General event access",
          "Access to tournament matches",
          "Access to closing ceremony",
        ],
        availability: {
          total: 1000,
          remaining: 1000,
          showRemaining: false,
        },
      },
      {
        id: "event-5-ticket-2",
        name: "VIP",
        price: 15000,
        currency: "NGN",
        benefits: [
          "Priority entry",
          "Premium viewing area",
          "Reserved seating",
        ],
        availability: {
          total: 150,
          remaining: 150,
          showRemaining: false,
        },
      },
      {
        id: "event-5-ticket-3",
        name: "VVIP",
        price: 30000,
        currency: "NGN",
        benefits: [
          "Front-row seat",
          "Meet the players",
          "Access to the awards ceremony",
        ],
        availability: {
          total: 50,
          remaining: 0,
          showRemaining: false,
        },
      },
    ],
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

    latitude: 4.9990,
    longitude: 7.9405,

    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=4.9990,7.9405"
    },

    about: {
      title:
        "An unforgettable experience filled with great moments, exciting energy, and everything that brings people together. Come celebrate.",
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
        description: "An interactive technology learning session.",
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
        description: "Final activities and closing of the camp.",
      },
    ],

    featuredPeople: {
      title: "Featured Speakers",
      items: [
        {
          id: "event-6-person-1",
          name: "Nori mark",
          role: "Creative Director",
          image: guestOne,
        },
        {
          id: "event-6-person-2",
          name: "Daniel Brian",
          role: "Music Producer",
          image: guestTwo,
        },
        {
          id: "event-6-person-3",
          name: "juan Chichi",
          role: "Tour Host",
          image: guestThree,
        },
        {
          id: "event-6-person-4",
          name: "juan Chichi",
          role: "Tour Host",
          image: guestThree,
        },
      ],
    },

    
    gallery: [
        { id: "event-6-photo-1", url: galleryOne },
        { id: "event-6-photo-2", url: galleryTwo },
        { id: "event-6-photo-3", url: galleryThree },
    ],


    tickets: [
      {
        id: "event-6-ticket-1",
        name: "Standard",
        price: 10000,
        currency: "NGN",
        benefits: [
          "Full camp access",
          "Technology workshops",
          "Hands-on activities",
          "Project showcase",
        ],
        availability: {
          total: 100,
          remaining: 100,
          showRemaining: false,
        },
      },
      {
        id: "event-6-ticket-2",
        name: "Premium",
        price: 20000,
        currency: "NGN",
        benefits: [
          "Everything in Standard",
          "Premium learning materials",
          "Take-home project kit",
        ],
        availability: {
          total: 50,
          remaining: 50,
          showRemaining: false,
        },
      },
    ],
  },
];

