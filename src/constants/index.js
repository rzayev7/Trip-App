import heartIcon from "../assets/label-icons/heart.svg";
import sparklesIcons from "../assets/label-icons/sparkles.svg";
import trending1 from "../assets/trending/trending1.png";
import trending2 from "../assets/trending/trending2.png";
import trending3 from "../assets/trending/trending3.png";
import new1 from "../assets/new/new1.png";
import new2 from "../assets/new/new2.png";
import new3 from "../assets/new/new3.png";
import icon1 from "../assets/why-us/icon1.svg";
import icon2 from "../assets/why-us/icon2.svg";
import icon3 from "../assets/why-us/icon3.svg";
import destionationsCard1 from "../assets/destinations/destinationsCard1.png";
import destionationsCard2 from "../assets/destinations/destinationsCard2.png";
import destionationsCard3 from "../assets/destinations/destinationsCard3.png";
import destionationsCard4 from "../assets/destinations/destinationsCard4.png";
import destionationsCard5 from "../assets/destinations/destinationsCard5.png";
import destionationsCard6 from "../assets/destinations/destinationsCard6.png";
import articlePhoto1 from "../assets/blog/articlePhoto1.png";
import articlePhoto2 from "../assets/blog/articlePhoto2.png";
import articlePhoto3 from "../assets/blog/articlePhoto3.png";
import articlePhoto4 from "../assets/blog/articlePhoto4.png";
import articlePhoto5 from "../assets/blog/articlePhoto5.png";
import mustSee1 from "../assets/italy/mustSee1.png";
import mustSee2 from "../assets/italy/mustSee2.png";
import mustSee3 from "../assets/italy/mustSee3.png";
import guideIcon1 from "../assets/italy/guideIcon1.svg";
import guideIcon2 from "../assets/italy/guideIcon2.svg";
import guideIcon3 from "../assets/italy/guideIcon3.svg";
import guideIcon4 from "../assets/italy/guideIcon4.svg";
import guideIcon5 from "../assets/italy/guideIcon5.svg";
import guideIcon6 from "../assets/italy/guideIcon6.svg";

export const trendingItems = [
  {
    id: 1,
    label: {
      icon: sparklesIcons,
      title: "Loved by over 40s",
    },
    country: "Spain",
    title: "Magical Madrid To Marrakech By Train",
    days: 12,
    price: 1299.0,
    photo: trending1,
  },
  {
    id: 2,
    label: {
      icon: heartIcon,
      title: "Loved by couples",
    },
    country: "Italy",
    title: "Spectacular Sicily",
    days: 5,
    price: 250.0,
    photo: trending2,
  },
  {
    id: 3,
    label: null,
    country: "Turkey",
    title: "International Istanbul",
    days: 7,
    price: 400.0,
    photo: trending3,
  },
];

export const newItems = [
  {
    id: 1,
    country: "Spain",
    title: "Magical Madrid To Marrakech By Train",
    days: 12,
    price: 1299.0,
    photo: new1,
  },
  {
    id: 2,
    country: "Italy",
    title: "Spectacular Sicily",
    days: 5,
    price: 250.0,
    photo: new2,
  },
  {
    id: 3,
    country: "Turkey",
    title: "International Istanbul",
    days: 7,
    price: 400.0,
    photo: new3,
  },
];

export const whyUs = [
  {
    id: 1,
    icon: icon1,
    title: "More than 149 travel titles currently in print",
  },
  {
    id: 2,
    icon: icon2,
    title: "Supporting millions of travellers since 1982",
  },
  {
    id: 3,
    icon: icon3,
    title: "Our outstanding customer satisfaction",
  },
];

export const destinations = {
  Europe: [
    "Azores",
    "Croatia",
    "Georgia",
    "Germany",
    "Greece",
    "Iceland",
    "Ireland",
    "Italy",
    "Portugal",
    "Scotland",
    "Spain",
    "United Kingdom",
  ],
  Asia: [
    "Combodia",
    "China",
    "India",
    "Indonesia",
    "Japan",
    "Jordan",
    "South Korea",
    "Sri Lanka",
    "Taiwan",
    "Thailand",
    "Turkey",
    "Vietnam",
  ],
  Africa: [
    "Egypt",
    "Ethiopia",
    "Kenya",
    "Ghana",
    "Madagascar",
    "Mauritius",
    "Morooco",
    "Namibia",
    "Rwanda",
    "South Africa",
    "Uganda",
    "Tanazania & Zanzibar",
  ],
  "C/America": [
    "Belize",
    "Costa Rica",
    "Cuba",
    "Dominican Republic",
    "Guatemala",
    "Honduras",
    "Jamaica",
    "Nicaragua",
    "Mexico",
    "Panama",
    "Puerto Rico",
    "Trinidad and Tobago",
  ],
  "S/America": [
    "Argentina",
    "Bolivia",
    "Brazil",
    "Chile",
    "Colombia",
    "Ecuador",
    "Peru",
  ],
};

export const footerLinks = {
  Menu: ["Destinations", "Private trips", "Blog", "About us"],
  Support: ["Contact us", "FAQ", "Privacy Policy", "Terms of Use"],
  "Follow us": ["Instagram", "Facebook", "Linkedin", "Tiktok"],
};

export const contacts = {
  "Commercial Contacts": [
    {
      label: "To advertise on Tourista",
      email: "advertise@tourista.com",
    },
    {
      label: "To become an affiliate partner",
      email: "affiliate@tourista.com",
    },
    {
      label: "To contact the hotels team",
      email: "hotels@tourista.com",
    },
    {
      label: "Send your request to republish Tourista content",
      email: "contentlicensing@tourista.com",
    },
    {
      label: "To contact the experiences team",
      email: "experiences@tourista.com",
    },
  ],
  "Content Contact": [
    {
      label: "To report an issue to our content teams please contact",
      email: "corrections@tourista.com",
    },
  ],
  "Press Contact": [
    {
      label:
        "If you’re a journalist / influencer with a press enquiry about Tourista, please contact our press office",
      email: "pr@tourista.com",
    },
  ],
  "Partnership Contact": [
    {
      label: "For partnership opportunities:",
      email: "partnerships@tourista.com",
    },
  ],
};

export const faqList = [
  {
    id: 1,
    question:
      "What are the best tips for finding budget-friendly travel accommodations?",
    answer:
      "To discover budget-friendly accommodations, consider the following tips: Book in Advance: Reserving your accommodations well in advance often results in better deals. Comparison Sites: Utilize travel comparison websites to find competitive prices from various providers. Off-Peak Travel: Consider traveling during off-peak seasons for reduced rates. Hostels and Guesthouses: These can be more economical than hotels, especially for solo travelers. Rewards Programs: Sign up for loyalty programs to accumulate points and receive discounts. Local Recommendations: Seek advice from locals or fellow travelers for hidden gems that are easy on the wallet.",
  },
  {
    id: 2,
    question: "How can I find authentic local experiences when traveling?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Orci sagittis eu volutpat odio facilisis mauris sit amet. Morbi tempus iaculis urna id volutpat lacus laoreet non. Odio pellentesque diam volutpat commodo sed egestas. Pellentesque dignissim enim sit amet. Elit sed vulputate mi sit amet. Sollicitudin ac orci phasellus egestas tellus. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Eget nullam non nisi est sit amet facilisis. Enim facilisis gravida neque convallis a cras semper auctor neque. Amet risus nullam eget felis. Eget aliquet nibh praesent tristique magna sit amet. Massa vitae tortor condimentum lacinia quis vel eros donec. Porttitor rhoncus dolor purus non enim praesent. Praesent tristique magna sit amet purus gravida quis. Enim facilisis gravida neque convallis.",
  },
  {
    id: 3,
    question:
      "What should I pack for a long-term trip or backpacking adventure?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Orci sagittis eu volutpat odio facilisis mauris sit amet. Morbi tempus iaculis urna id volutpat lacus laoreet non. Odio pellentesque diam volutpat commodo sed egestas. Pellentesque dignissim enim sit amet. Elit sed vulputate mi sit amet. Sollicitudin ac orci phasellus egestas tellus. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Eget nullam non nisi est sit amet facilisis. Enim facilisis gravida neque convallis a cras semper auctor neque. Amet risus nullam eget felis. Eget aliquet nibh praesent tristique magna sit amet. Massa vitae tortor condimentum lacinia quis vel eros donec. Porttitor rhoncus dolor purus non enim praesent. Praesent tristique magna sit amet purus gravida quis. Enim facilisis gravida neque convallis.",
  },
  {
    id: 4,
    question:
      "What are some strategies for overcoming jet lag when traveling across time zones?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Orci sagittis eu volutpat odio facilisis mauris sit amet. Morbi tempus iaculis urna id volutpat lacus laoreet non. Odio pellentesque diam volutpat commodo sed egestas. Pellentesque dignissim enim sit amet. Elit sed vulputate mi sit amet. Sollicitudin ac orci phasellus egestas tellus. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Eget nullam non nisi est sit amet facilisis. Enim facilisis gravida neque convallis a cras semper auctor neque. Amet risus nullam eget felis. Eget aliquet nibh praesent tristique magna sit amet. Massa vitae tortor condimentum lacinia quis vel eros donec. Porttitor rhoncus dolor purus non enim praesent. Praesent tristique magna sit amet purus gravida quis. Enim facilisis gravida neque convallis.",
  },
  {
    id: 5,
    question:
      "What are the visa requirements for popular tourist destinations?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Orci sagittis eu volutpat odio facilisis mauris sit amet. Morbi tempus iaculis urna id volutpat lacus laoreet non. Odio pellentesque diam volutpat commodo sed egestas. Pellentesque dignissim enim sit amet. Elit sed vulputate mi sit amet. Sollicitudin ac orci phasellus egestas tellus. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Eget nullam non nisi est sit amet facilisis. Enim facilisis gravida neque convallis a cras semper auctor neque. Amet risus nullam eget felis. Eget aliquet nibh praesent tristique magna sit amet. Massa vitae tortor condimentum lacinia quis vel eros donec. Porttitor rhoncus dolor purus non enim praesent. Praesent tristique magna sit amet purus gravida quis. Enim facilisis gravida neque convallis.",
  },
];

export const topDestinations = [
  {
    id: 1,
    country: "Italy",
    title: "International Italy",
    tripPlans: 12,
    price: 199.0,
    photo: destionationsCard1,
  },
  {
    id: 2,
    country: "Portugal",
    title: "International Portugal",
    tripPlans: 54,
    price: 250.0,
    photo: destionationsCard2,
  },
  {
    id: 3,
    country: "Turkiye",
    title: "International Turkiye",
    tripPlans: 19,
    price: 400.0,
    photo: destionationsCard3,
  },
  {
    id: 4,
    country: "Iceland",
    title: "International Iceland",
    tripPlans: 105,
    price: 299.0,
    photo: destionationsCard4,
  },
  {
    id: 5,
    country: "Costa Rica",
    title: "International Costa Rica",
    tripPlans: 23,
    price: 250.0,
    photo: destionationsCard5,
  },
  {
    id: 6,
    country: "Argentina",
    title: "International Argentina",
    tripPlans: 87,
    price: 400.0,
    photo: destionationsCard6,
  },
];

export const blogArticles = [
  {
    id: 1,
    title: "Food & Drink",
    info: "Founded by Pope Julius II in the early 16th century and enlarged by successive pontiffs, the Vatican Museums boast one of the world's greatest art…",
    photo: articlePhoto1,
  },
  {
    id: 2,
    title: "See & Do",
    info: "Everyone wants to see the Colosseum, and it doesn’t disappoint, especially if accompanied by tales of armored gladiators and hungry lions. More...",
    photo: articlePhoto2,
  },
  {
    id: 3,
    title: "Inspiration",
    info: "Founded by Pope Julius II in the early 16th century and enlarged by successive pontiffs, the Vatican Museums boast one of the world's greatest art…",
    photo: articlePhoto3,
  },
  {
    id: 4,
    title: "Travel Tips",
    info: "Everyone wants to see the Colosseum, and it doesn’t disappoint, especially if accompanied by tales of armored gladiators and hungry lions. More...",
    photo: articlePhoto4,
  },
  {
    id: 5,
    title: "Food & Drink",
    info: "In the city of outstanding churches, none can hold a candle to St Peter's, Italy’s largest, richest and most spectacular basilica. Built atop a 4th…",
    photo: articlePhoto5,
  },
];

export const italyMustSeeItems = [
  {
    id: 1,
    title: "Vatican museums",
    info: "Founded by Pope Julius II in the early 16th century and enlarged by successive pontiffs, the Vatican Museums boast one of the world's greatest art…",
    photo: mustSee1,
  },
  {
    id: 2,
    title: "Colosseum",
    info: "Everyone wants to see the Colosseum, and it doesn’t disappoint, especially if accompanied by tales of armored gladiators and hungry lions. More...",
    photo: mustSee2,
  },
  {
    id: 3,
    title: "St Peter's Basilica",
    info: "In the city of outstanding churches, none can hold a candle to St Peter's, Italy’s largest, richest and most spectacular basilica. Built atop a 4th…",
    photo: mustSee3,
  },
];

export const italyGuide = [
  {
    id: 1,
    title: "Best Things to Do",
    info: "Italy has so many delights to offer its visitors, it's hard to know where to start. Here's our pick of the best experiences Italy has to offer you.",
    icon: guideIcon1,
  },
  {
    id: 2,
    title: "Things to Know",
    info: "With so many attractions, it's hard to know where to begin with a trip to Italy. Here's some local insight into the essential things to know before you go.",
    icon: guideIcon2,
  },
  {
    id: 3,
    title: "Transportation",
    info: "Your guide to traveling independently across Italy, from the Alps to the islands.",
    icon: guideIcon3,
  },
  {
    id: 4,
    title: "Visa Requirements",
    info: "Italy is one of the most visited countries in Europe and its many attractions are hard to resist. Find out if you need a visa before you go.",
    icon: guideIcon4,
  },
  {
    id: 5,
    title: "Money and Costs",
    info: "These top budget tips can help you save money while exploring Italy.",
    icon: guideIcon5,
  },
  {
    id: 6,
    title: "Traveling with Kids",
    info: "Experience the best of Italy as a family with this guide to the top things to do there with kids.",
    icon: guideIcon6,
  },
];
