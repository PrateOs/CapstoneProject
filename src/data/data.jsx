import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const promo = [
  {
    title: '30% Off This Weekend',
    description: 'Enjoy 30% OFF this weekend only! Don’t miss out – shop now! 🛍️',
    getImageSrc: () => require("../assets/images/food_1.jpg"),
  },
];

const projects = [
    {
      title: 'Greek salad',
      price: '$12.99',
      description: 'Fresh Greek salad with feta, olives, and veggies.',
      getImageSrc: () => require("../assets/images/food_1.jpg"),
    },
    {
      title: 'Bruchetta',
      price: '$5.99',
      description: 'Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned salt and olive oil.',
      getImageSrc: () => require("../assets/images/food_2.jpg"),
    },
    {
      title: 'Lemon Dessert',
      price: '$5.00',
      description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      getImageSrc: () => require("../assets/images/food_3.jpg"),
    },
  ];

  const socials = [
    {
      icon: faEnvelope,
      url: "mailto:hello@example.com",
    },
  ];

  export {promo, projects, socials}  