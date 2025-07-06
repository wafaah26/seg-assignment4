import React, { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Checkout() {
  const { cart, clearCart, setOrderConfirmed } = useContext(CartContext);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [orderDone, setOrderDone] = useState(false);

  useEffect(() => {
    setOrderConfirmed(false);
  }, [setOrderConfirmed]);

  if (cart.length === 0 && !orderDone) {
    return <Navigate to="/" replace />;
  }

  function handleChange(field, value) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function nextStep() {
    if (step === 1) {
      if (!formData.name || !formData.email || !formData.address) {
        alert("Please fill all personal info fields.");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!formData.cardName || !formData.cardNumber || !formData.expiry || !formData.cvv) {
        alert("Please fill all payment fields.");
        return;
      }
      setOrderDone(true);
      setOrderConfirmed(true);
      clearCart();
    }
  }

  function prevStep() {
    if (step > 1) setStep(step - 1);
  }

  return (
    <div>
      <h2>Checkout</h2>

      {!orderDone && (
        <>
          <div className="mb-3">
            <strong>Step {step} of 2</strong>
          </div>

          {step === 1 && (
            <div className="card p-3 mb-3">
              <h5>Personal Information</h5>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Shipping Address</label>
                <textarea
                  className="form-control"
                  rows="2"
                  value={formData.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="card p-3 mb-3">
              <h5>Payment Information</h5>
              <div className="mb-3">
                <label className="form-label">Cardholder Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.cardName}
                  onChange={(e) => handleChange("cardName", e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Card Number</label>
                <input
                  type="text"
                  maxLength={16}
                  className="form-control"
                  value={formData.cardNumber}
                  onChange={(e) => handleChange("cardNumber", e.target.value)}
                />
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label className="form-label">Expiry Date</label>
                  <input
                    type="month"
                    className="form-control"
                    value={formData.expiry}
                    onChange={(e) => handleChange("expiry", e.target.value)}
                  />
                </div>
                <div className="col">
                  <label className="form-label">CVV</label>
                  <input
                    type="password"
                    maxLength={3}
                    className="form-control"
                    value={formData.cvv}
                    onChange={(e) => handleChange("cvv", e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          <div className="d-flex justify-content-between">
            {step > 1 && (
              <button className="btn btn-secondary" onClick={prevStep}>
                Back
              </button>
            )}
            <button className="btn btn-primary" onClick={nextStep}>
              {step === 1 ? "Next: Payment" : "Confirm Order"}
            </button>
          </div>
        </>
      )}

      {orderDone && (
        <>
          <div className="alert alert-success mt-4">
            <h4>Order Confirmed!</h4>
            <p>Thank you for your purchase, {formData.name}! We will email you the confirmation shortly.</p>
          </div>

          <div className="card p-4 mt-4">
            <h5>We'd love your feedback!</h5>
            <SurveyInline />
          </div>
        </>
      )}
    </div>
  );
}

function SurveyInline() {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return submitted ? (
    <div className="alert alert-info mt-3">Thank you for your feedback!</div>
  ) : (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">How was your shopping experience?</label>
        <textarea
          className="form-control"
          rows={4}
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-success">Submit Feedback</button>
    </form>
  );
}
