import React, { useState } from "react";
import FacetedSearch from "../components/FacetedSearch";
import ProductCard from "../components/ProductCard";

const PRODUCTS = [
  {
    id: 1,
    name: "Classic White Shirt",
    size: "M",
    color: "White",
    sleeve: "Long",
    price: 29.99,
    salePrice: 24.99,
    image: "/images/classicwhite.jpg",
  },
  {
    id: 2,
    name: "Casual Blue Shirt",
    size: "L",
    color: "Blue",
    sleeve: "Short",
    price: 24.99,
    salePrice: 21.99,
    image: "/images/blueshort.jpg",
  },
  {
    id: 3,
    name: "Formal Black Shirt",
    size: "S",
    color: "Black",
    sleeve: "Long",
    price: 34.99,
    salePrice: 29.99,
    image: "/images/blacklong.jpg",
  },
  {
    id: 4,
    name: "Red Shirt",
    size: "M",
    color: "Red",
    sleeve: "Short",
    price: 22.99,
    salePrice: 18.99,
    image: "/images/redshort.jpg",
  },
  {
    id: 5,
    name: "Green Shirt",
    size: "L",
    color: "Green",
    sleeve: "Long",
    price: 39.99,
    salePrice: 35.99,
    image: "/images/greenlong.jpg",
  },
  {
    id: 6,
    name: "Blue Shirt",
    size: "M",
    color: "Blue",
    sleeve: "Long",
    price: 31.99,
    salePrice: 27.99,
    image: "/images/bluelong.jpg",
  },
];

export default function Products() {
  const [filters, setFilters] = useState({ size: [], color: [], sleeve: [] });

  function toggleFilter(type, value) {
    setFilters((prev) => {
      const list = prev[type];
      return {
        ...prev,
        [type]: list.includes(value) ? list.filter((v) => v !== value) : [...list, value],
      };
    });
  }

  const filtered = PRODUCTS.filter((p) => {
    if (filters.size.length && !filters.size.includes(p.size)) return false;
    if (filters.color.length && !filters.color.includes(p.color)) return false;
    if (filters.sleeve.length && !filters.sleeve.includes(p.sleeve)) return false;
    return true;
  });

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center fw-bold">Shop Shirts</h2>

      <div className="alert alert-success text-center fs-5" role="alert">
        🌞 Summer Sale! Get 15% off all shirts — limited time only! Don't miss out!
      </div>

      <div className="mb-4">
        <FacetedSearch filters={filters} onChange={toggleFilter} />
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-muted fs-5 mt-5">No shirts match your filters.</p>
      ) : (
        <div className="row g-4">
          {filtered.map((p) => (
            <div key={p.id} className="col-sm-6 col-md-4">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
