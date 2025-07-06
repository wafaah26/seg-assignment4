import React from "react";

const SIZE_OPTIONS = ["S", "M", "L"];
const COLOR_OPTIONS = ["White", "Blue", "Black", "Red", "Green"];
const SLEEVE_OPTIONS = ["Short", "Long"];

export default function FacetedSearch({ filters, onChange }) {
  return (
    <div className="card p-3 mb-3">
      <h5>Filter Shirts</h5>
      <div className="mb-2">
        <strong>Size:</strong><br />
        {SIZE_OPTIONS.map((size) => (
          <label key={size} className="me-3">
            <input
              type="checkbox"
              checked={filters.size.includes(size)}
              onChange={() => onChange("size", size)}
            /> {size}
          </label>
        ))}
      </div>
      <div className="mb-2">
        <strong>Color:</strong><br />
        {COLOR_OPTIONS.map((color) => (
          <label key={color} className="me-3">
            <input
              type="checkbox"
              checked={filters.color.includes(color)}
              onChange={() => onChange("color", color)}
            /> {color}
          </label>
        ))}
      </div>
      <div className="mb-2">
        <strong>Sleeve Length:</strong><br />
        {SLEEVE_OPTIONS.map((sleeve) => (
          <label key={sleeve} className="me-3">
            <input
              type="checkbox"
              checked={filters.sleeve.includes(sleeve)}
              onChange={() => onChange("sleeve", sleeve)}
            /> {sleeve}
          </label>
        ))}
      </div>
    </div>
  );
}
