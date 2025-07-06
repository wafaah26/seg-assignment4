import React, { useState } from "react";

export default function Survey({ onSubmit }) {
  const [comment, setComment] = useState("");

  return (
    <div className="card p-3 my-4">
      <h4>We'd love your feedback! 😊</h4>
      <p>Your opinion helps us improve. Please share your experience with us.</p>
      <textarea
        className="form-control mb-3"
        rows={3}
        placeholder="Tell us what you think..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        className="btn btn-primary"
        disabled={!comment.trim()}
        onClick={() => {
          onSubmit(comment);
          setComment("");
        }}
      >
        Submit Feedback
      </button>
    </div>
  );
}
