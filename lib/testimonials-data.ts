export type Testimonial = {
  name: string;
  area: string;
  review: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Priya S.",
    area: "Viman Nagar",
    review:
      "Honestly felt like my apartment was deep cleaned by a hotel staff. Super professional, on time, and smelled amazing after!",
    rating: 5,
  },
  {
    name: "Rohan M.",
    area: "Koregaon Park",
    review:
      "The monthly plan is incredibly affordable. My maid left town and Brooomin stepped in seamlessly.",
    rating: 5,
  },
  {
    name: "Sneha T.",
    area: "Kharadi",
    review:
      "Booked for office cleaning. The team was thorough, fast, and respectful of our workspace. Will book again.",
    rating: 5,
  },
];
