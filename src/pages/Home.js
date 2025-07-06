import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `url("/images/shirtstore.avif")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "2rem",
          borderRadius: "12px",
          textAlign: "center",
          maxWidth: "600px",
          width: "100%",
        }}
      >
        <h1 className="mb-4" style={{ color: "#222" }}>
          Welcome to Shirtly!
        </h1>

        <div
          className="alert alert-success text-dark"
          role="alert"
          style={{
            backgroundColor: "#e0f7e9",
            fontWeight: "bold",
            fontSize: "1.1rem",
          }}
        >
          🌞 Summer Sale! Get 15% off all shirts — limited time only!
        </div>

        <button
          className="btn btn-primary btn-lg mt-3"
          onClick={() => navigate("/products")}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}
