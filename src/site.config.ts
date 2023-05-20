interface SiteData {
  url: string;
  author: string;
  siteTitle: string;
  ogImage: string;
  properties: {
    name: string;
    link: string;
  }[];
  githubLink: string;
  galleryLink: string;
  gMapsLink: string;
  airbnbLink: string;
  amenities: string[];
  bookingContact: string;
  bookingWhatsapp: string;
  facebookLink: string;
  instagramLink: string;
  emailId: string;
  googleSiteVerification?: string;
  isGoogleAnalyticsEnabled?: boolean;
  menuItems: {
    name: string;
    subItems: {
      name: string;
      price: number;
    }[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const siteData: SiteData = {
  url: "https://sih-darjeeling.netlify.app",
  siteTitle: "Solitude In Himalayas",
  author: "Sugam",
  ogImage: "/og.png",
  galleryLink: "https://photos.app.goo.gl/94KsTv3gK5LWmmt27",
  gMapsLink: "https://g.page/solitude-in-himalayas",
  airbnbLink: "https://www.airbnb.co.in/users/show/474667284",
  bookingContact: "tel:+917431991212",
  bookingWhatsapp: "https://wa.me/917477793196",
  facebookLink: "https://www.facebook.com/solitudeinhimalayas",
  instagramLink: "https://www.instagram.com/solitude_in_himalayas/",
  emailId: "mailto:solitudeinhimalayas@gmail.com",
  githubLink: "https://github.com/sug-chh/sih",
  googleSiteVerification: "EtSzLTzxfZ67ay8RePkm6tdWFvgDHTsnXrxraXDYlkE",
  isGoogleAnalyticsEnabled: true,
  properties: [
    {
      name: "Chalet",
      link: "https://airbnb.com/h/solitude-in-himalayas-chalet",
    },
    {
      name: "Villa",
      link: "https://airbnb.com/h/solitude-in-himalayas-villa",
    },
    {
      name: "Cottage",
      link: "https://airbnb.com/h/solitude-in-himalayas-cottage",
    },
  ],
  amenities: [
    "Tea Estate Tour",
    "Local sightseeing",
    "Market Tour",
    "Nature Walk",
    "Riverside Tour",
    "Bonfire",
    "BBQ",
    "Picnic",
    "Restaurant and Bar",
    "Pet Friendly",
    "Mountain View",
    "Wifi",
    "Garden View",
  ],
  menuItems: [
    {
      name: "Tea & Coffee",
      subItems: [
        {
          name: "Tea",
          price: 30,
        },
        {
          name: "Coffee",
          price: 40,
        },
        {
          name: "Milk",
          price: 30,
        },
      ],
    },
    {
      name: "Hard & Soft Drinks",
      subItems: [
        {
          name: "Coke",
          price: 50,
        },
        {
          name: "Beer",
          price: 200,
        },
        {
          name: "Old monk",
          price: 600,
        },
        {
          name: "Rakshi",
          price: 150,
        },
        {
          name: "Mc Dowell's Whisky",
          price: 800,
        },
        {
          name: "Royal Challenge Whisky",
          price: 1000,
        },
      ],
    },
    {
      name: "Snacks",
      subItems: [
        {
          name: "Omelette",
          price: 50,
        },
        {
          name: "Boiled Egg",
          price: 20,
        },
        {
          name: "Veg Pakora",
          price: 150,
        },
        {
          name: "Chicken Pakora",
          price: 220,
        },
        {
          name: "Paneer Pakora",
          price: 180,
        },
        {
          name: "Wai Wai",
          price: 60,
        },
        {
          name: "Veg Maggie",
          price: 50,
        },
        {
          name: "Egg Maggie",
          price: 70,
        },
        {
          name: "Veg Momos",
          price: 60,
        },
        {
          name: "Chicken Momos",
          price: 100,
        },
        {
          name: "Veg Chowmein",
          price: 150,
        },
        {
          name: "Chicken Chowmein",
          price: 200,
        },
        {
          name: "Chilli Chicken",
          price: 250,
        },
        {
          name: "Chicken Thukpa",
          price: 220,
        },
        {
          name: "Chicken BBQ + Bonfire",
          price: 800,
        },
        {
          name: "Veg BBQ + Bonfire",
          price: 600,
        },
      ],
    },
    {
      name: "Meals",
      subItems: [
        {
          name: "Breakfast",
          price: 150,
        },
        {
          name: "Lunch",
          price: 200,
        },
        {
          name: "Dinner",
          price: 250,
        },
      ],
    },
  ],
  faqs: [
    {
      question:
        "Is it necessary to make a booking in advance for SIH (Solitude in Himalayas)?",
      answer:
        "It is recommended to make a booking in advance to ensure availability, as the demand for Solitude in Himalayas can be high during peak seasons.",
    },
    {
      question:
        "How far is Solitude in Himalayas from the nearest airport / railway station?",
      answer:
        "Solitude in Himalayas is approximately 79kms from Bagdogra International Airport and around 80kms from New Jalpaiguri Railway Station.",
    },
    {
      question:
        "Which route is recommended to take to reach SIH from the nearest airport / railway station?",
      answer:
        "It depends on one's preferences. If one wants to enjoy a scenic drive, the Mirik route is recommended. If one wants to reach SIH quickly, then the Kurseong route is the better option.",
    },
    {
      question:
        "How far is Solitude in Himalayas from Darjeeling Mall or Chowrasta?",
      answer:
        "The distance between Darjeeling Mall and Solitude in Himalayas is around 21kms. It is located close to the Sukhiapokhri / Lepchajagat side of Darjeeling.",
    },
    {
      question:
        "What kind of sightseeing facilities are available at Solitude in Himalayas?",
      answer:
        "Solitude in Himalayas provides pickup, drop and sightseeing facilities via car to various places such as Darjeeling, Mirik, Sukiapokhri, Kurseong, Kalimpong, Sandakhphu, Sikkim, Nepal and more.",
    },
    {
      question: "Are there any walking trails nearby Solitude in Himalayas?",
      answer:
        "The tea gardens surrounding SIH can be explored on foot, and there is also a hiking trail that leads up to the tributary of River Rangeet, which is 5kms from the property.",
    },
    {
      question:
        "What views can one expect from the stays at Solitude in Himalayas?",
      answer:
        "Guests at SIH can enjoy breathtaking views of Mt. Kanchenjunga, which is visible right from the windows of their rooms. Additionally, they can also experience all-around views of the mountains, gardens, forests and valleys.",
    },
    {
      question:
        "What are some nearby tea estates that can be visited from Solitude in Himalayas?",
      answer:
        "Some nearby tea estates that can be visited from Solitude in Himalayas include Lingia Mariabong Tea Estate (4kms), Mim Tea Estate (3.5kms), and Tumsong Tea Estate (1km).",
    },
    {
      question: "Are the roads to Solitude in Himalayas in good condition?",
      answer:
        "Yes, the roads leading to Solitude in Himalayas are good, except for the last 600 meters to the property, which is a kutcha road where only 4x4 cars can maneuver.",
    },
    {
      question:
        "Do guests need to worry about the bad part of the road leading to Solitude in Himalayas?",
      answer:
        "No, guests need not worry about the bad part of the road as the property provides pickup and drop facilities for the last 600 meters bad stretch of the road.",
    },
    {
      question: "Is there parking available at Solitude in Himalayas?",
      answer:
        "Yes, there is parking available at SIH. The parking is an open area located 600 meters away from the property. While the parking area is open, guests need not worry as there are people who will look after their cars.",
    },
    {
      question:
        "When is the ideal time to visit the Solitude in Himalayas?",
      answer:
        "The best months to visit SIH are December to mid-May and mid-September to December. The peak of rainy season in Darjeeling is from mid-May to mid-September, so it may not be the ideal time to visit as the rains can be non-stop.",
    },
    {
      question: "Are pets allowed at Solitude in Himalayas?",
      answer:
        "Yes, we welcome all kinds of pets at no extra cost at SIH. However, we request that all pet owners clean up after their pets and request them to not let their pets disturb other guests.",
    },
    {
      question:
        "Is there wifi and power backup facility available at Solitude in Himalayas?",
      answer:
        "Solitude in Himalayas provides guests with access to a 20mbps WiFi connection and a power backup facility on the premises.",
    },
    {
      question: "What type of meals does Solitude in Himalayas offer?",
      answer:
        "Solitude in Himalayas provides home-cooked tasty meals which are either included in the booking package or can be selected from the menu as a la carte. Refer to the menu section for more details.",
    },
  ],
};
