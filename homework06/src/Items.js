import photo from "./photo.jpg";

export const categories = [
  "category 1",
  "category 2",
  "category 3",
  "category 4",
];

const summary =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const materials =
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

export const items = [
  {
    name: "item 1",
    category: categories[0],
    summary: summary,
    photo: photo,
    price: 23,
    materials: materials,
    id: "i1",
  },
  {
    name: "item 2",
    category: categories[1],
    summary: summary,
    photo: photo,
    price: 343,
    materials: materials,
    id: "i2",
  },
  {
    name: "item 3",
    category: categories[2],
    summary: summary,
    photo: photo,
    price: 446,
    materials: materials,
    id: "i3",
  },
  {
    name: "item 4",
    category: categories[3],
    summary: summary,
    photo: photo,
    price: 6,
    materials: materials,
    id: "i4",
  },
  {
    name: "item 5",
    category: categories[0],
    summary: summary,
    photo: photo,
    price: 5767,
    materials: materials,
    id: "i5",
  },
  {
    name: "item 6",
    category: categories[1],
    summary: summary,
    photo: photo,
    price: 77,
    materials: materials,
    id: "i6",
  },
];
