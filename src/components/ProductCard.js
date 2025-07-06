import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card h-100 shadow-sm rounded-3">
      <img
        src={product.image}
        alt={product.name}
        style={{
          objectFit: "cover",
          height: "380px",
          width: "100%",
          borderTopLeftRadius: "0.75rem",
          borderTopRightRadius: "0.75rem",
        }}
        className="card-img-top"
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-semibold">{product.name}</h5>
        <p className="card-text mb-2 text-secondary" style={{ fontSize: "0.9rem" }}>
          Size: {product.size} | Color: {product.color} | Sleeve: {product.sleeve}
        </p>

        <div className="mb-3">
          <span className="text-muted text-decoration-line-through me-2" style={{ fontSize: "0.9rem" }}>
            ${product.price.toFixed(2)}
          </span>
          <span className="fw-bold text-danger fs-4">
            ${product.salePrice.toFixed(2)}
          </span>
        </div>

        <button
          className="btn btn-primary w-100 mt-auto"
          onClick={() => {
            addToCart(product);
            alert(`Added "${product.name}" to cart!`);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
