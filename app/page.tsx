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
    <main style={{ padding: 30, fontFamily: "Arial, sans-serif" }}>
      <h1>Health & Student Mental Wellness</h1>
      <p>Symptom guidance • Mental health support • Student care</p>

      <hr />

      <h2>Symptom Checker</h2>
      <input
        type="text"
        placeholder="Enter a symptom"
        value={symptom}
        onChange={(e) => setSymptom(e.target.value)}
      />
      <p style={{ fontSize: 12 }}>Not a medical diagnosis.</p>

      <hr />

      <h2>Mental Health Self-Test</h2>
      <p>0 = Never | 1 = Sometimes | 2 = Often</p>

      {questions.map((q, i) => (
        <div key={i}>
          <p>{q}</p>
          <button onClick={() => setScore(score + 0)}>0</button>
          <button onClick={() => setScore(score + 1)}>1</button>
          <button onClick={() => setScore(score + 2)}>2</button>
        </div>
      ))}

      <h3>Total Score: {score}</h3>

      {score <= 3 && <p>Low stress 👍</p>}
      {score > 3 && score <= 6 && <p>Moderate stress ⚠️</p>}
      {score > 6 && <p>High stress 🚨 Please seek help.</p>}

      <footer style={{ fontSize: 12, marginTop: 20 }}>
        For emergencies, contact a healthcare professional.
      </footer>
    </main>
  );
}
