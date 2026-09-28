import eventOne from "../../assets/eventBannerOne.jpg";
import eventTwo from "../../assets/eventBannerTwo.jpg";
import eventThree from "../../assets/eventBannerThree.jpg";
import eventFour from "../../assets/eventBannerFour.jpg";
import eventFive from "../../assets/eventBannerFive.jpg";
import eventSix from "../../assets/eventBannerSix.jpg";
import { Type } from "lucide-react";

export const mockEvents = [
  {
    id: 1,
    title: "SBS MTV The Kpop Show",
    banner: eventOne,
    description:
      "Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop recording.",
    date: "21 September, 2026",
    place: "Uyo",
    type: "Live Music Experience",
    openTime: "4:00PM"
    categories:  ["Music", "Nightlife", "Any Category"]
  },
  {
    id: 2,
    title: "Vibes City Show",
    banner: eventTwo,
    description:
      "Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop recording",
    date: "01 October, 2026",
    place: "Port Harcourt",
    type: "Night chilling Experience",
    openTime: "9:00PM",
    categories:  ["Music", "Any Category"]
  },
  {
    id: 3,
    title: "Street Boxing Exhibition",
    banner: eventThree,
    description:
      "Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop recording",
    date: "05 November, 2026",
    place: "Lagos",
     type: "Live Boxing Experience",
    openTime: "5:00PM",
    categories:  ["Sport", "Nightlife", "Any Category"]
  },
  {
    id: 4,
    title: "Unfathomable Fight Night",
    banner: eventFour,
    description:
      "Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop recording",
    date: "26 December, 2026",
    place: "Uyo",
    type: "Live Boxing Experience",
    openTime: "6:00PM",
    categories:  ["Sport", "Nightlife", "Any Category"]
  },
  {
    id: 5,
    title: "Championship Tournament",
    banner: eventFive,
    description:
      "Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop recording",
    date: "14 August December, 2026",
    place: "Calaber",
    type: "Live Football Experience",
    openTime: "10:00AM",
    categories:  ["Sport", "Any Category"]
  },
   {
    id: 6,
    title: "Kids Tech Holiday Camp",
    banner: eventSix,
    description:
      "Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop recording",
    date: "30 November, 2026",
    place: "Uyo",
    type: "Tech Experience",
    openTime: "8:00AM",
    categories:  ["Tech", "Any Category"]
  },
];
