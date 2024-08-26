import React from "react";
import img1 from "../../imgs/image-product-1.jpg";
import img2 from "../../imgs/image-product-2.jpg";
import img3 from "../../imgs/image-product-3.jpg";
import img4 from "../../imgs/image-product-4.jpg";
import { Link } from "react-router-dom";
import CollectionsHeading from "./CollectionsHeading";
// Add more imports as needed

function HomePage() {
  const sneakers = [
    {
      id: 1,
      name: "Nike Air Zoom Pegasus 37",
      description: "The ultimate sneaker for running",
      color: "Black",
      brand: "Nike",
      price: 150.0,
      imgUrl: img1,
    },
    {
      id: 2,
      name: "Adidas Ultraboost 18",
      description: "A classic running shoe",
      color: "Blue",
      brand: "Adidas",
      price: 120.0,
      imgUrl: img2,
    },
    {
      id: 3,
      name: "Puma RS-X³ Puzzle",
      description: "A bold and stylish sneaker for everyday wear",
      color: "White",
      brand: "Puma",
      price: 110.0,
      imgUrl: img3,
    },
    {
      id: 4,
      name: "New Balance 990v5",
      description: "Premium performance with a classic silhouette",
      color: "Gray",
      brand: "New Balance",
      price: 175.0,
      imgUrl: img4,
    },
    {
      id: 5,
      name: "Asics Gel-Kayano 27",
      description: "High stability and support for long-distance runs",
      color: "Red",
      brand: "Asics",
      price: 160.0,
      imgUrl: img1,
    },
    {
      id: 6,
      name: "Reebok Zig Kinetica II",
      description: "Innovative design for energy return with every step",
      color: "Green",
      brand: "Reebok",
      price: 140.0,
      imgUrl: img2,
    },
  ];

  return (
    <>
      <CollectionsHeading />
      <div className="m-5 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {sneakers.map((item) => (
          <div
            key={item.id}
            className="flex min-h-[800px] flex-col justify-between rounded p-4 shadow-md"
          >
            <img src={item.imgUrl} alt={item.name} className="mb-4" />
            <h2 className="text-2xl font-bold">{item.name}</h2>
            <p className="text-lg font-medium">
              description: {item.description}
            </p>
            <p className="font-medium">brand: {item.brand}</p>
            <p className="font-medium">price: {`${item.price}$`}</p>
            <Link
              to="/product"
              className="block rounded bg-orange p-4 text-center font-bold text-neutral-100"
            >
              show the product
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default HomePage;
