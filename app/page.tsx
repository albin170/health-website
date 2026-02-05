"use client";

import { useState } from "react";

export default function Page() {
  const [symptom, setSymptom] = useState("");
  const [score, setScore] = useState(0);

  const questions = [
    "I feel stressed or anxious frequently",
    "I have trouble sleeping",
    "I find it hard to concentrate on studies",
    "I feel overwhelmed by academic pressure",
    "I feel low or unmotivated",
  ];

  return (
    <main style={{ padding: 40, fontFamily: "Arial", color: "white", background: "#0f172a", minHeight: "100vh" }}>
      <h1>Health & Student Mental Wellness</h1>
      <p>Symptom guidance • Mental health support • Student care</p>

      <hr style={{ margin: "20px 0" }} />

      {/* Symptom Checker */}
      <h2>Symptom Checker</h2>
      <input
        value={symptom}
        onChange={(e) => setSymptom(e.target.value)}
        placeholder="Enter a symptom"
        style={{
          padding: "8px",
          width: "250px",
          borderRadius: "6px",
          border: "none"
        }}
      />
      <p style={{ fontSize: 12 }}>Not a medical diagnosis.</p>

      <hr style={{ margin: "30px 0" }} />

      {/* Mental Health Test */}
      <h2>Mental Health Self-Test</h2>
      <p>0 = Never | 1 = Sometimes | 2 = Often</p>

      {questions.map((q, i) => (
        <div key={i} style={{ marginBottom: "20px" }}>
          <p>{q}</p>
          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={() => setScore(score + 0)}>0</button>
            <button onClick={() => setScore(score + 1)}>1</button>
            <button onClick={() => setScore(score + 2)}>2</button>
          </div>
        </div>
      ))}

      <h3>Total Score: {score}</h3>

      {score <= 3 && <p style={{ color: "lightgreen" }}>Low stress 👍</p>}
      {score > 3 && score <= 6 && <p style={{ color: "orange" }}>Moderate stress ⚠️</p>}
      {score > 6 && <p style={{ color: "red" }}>High stress 🚨 Please seek help.</p>}

      <footer style={{ fontSize: 12, marginTop: 40 }}>
        For emergencies, contact a healthcare professional.
      </footer>
    </main>
  );
}
