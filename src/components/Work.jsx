"use client";
import { useState } from "react";

const workItems = [
  {
    key: "jewelry",
    staticSrc: "/screenshots/jewelry-land.png",
    gifSrc: "/screenshots/iris-demo.gif",
    alt: "Jewelry Retail Showcase",
  },
  {
    key: "whitehouse",
    staticSrc: "/screenshots/white-house-inn.png",
    gifSrc: "/screenshots/white-house-inn.gif",
    alt: "Luxury Rental in Rustic Nauvoo",
  },
  {
    key: "eatit",
    staticSrc: "/screenshots/eat-it.png",
    gifSrc: "/screenshots/eat-it-demo.gif",
    alt: "Recipe Scraper without the Lifestory",
  },
];

export default function Work() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {workItems.map((item) => (
          <img
            key={item.key}
            src={hovered === item.key ? item.gifSrc : item.staticSrc}
            alt={item.alt}
            onMouseEnter={() => setHovered(item.key)}
            onMouseLeave={() => setHovered(null)}
            className="w-full px-3 py-2"
          />
        ))}
      </div>
    </>
  );
}