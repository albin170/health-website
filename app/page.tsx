"use client";

import React, { useState } from "react";

export default function Page() {
  const [symptom, setSymptom] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [showHelp, setShowHelp] = useState<boolean>(false);

  const questions: string[] = [
    "I feel stressed or anxious frequently",
    "I have trouble sleeping",
    "I find it hard to concentrate on studies",
    "I feel overwhelmed by academic pressure",
    "I feel low or unmotivated",
  ];

  const handleScore = (value: number) => {
    const newScore = score + value;
    setScore(newScore);
    if (newScore > 6) setShowHelp(true);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Arial",
        backgroundColor: "#0f172a",
        color: "white",
      }}
    >
      <h1>Health & Student Mental Wellness</h1>
      <p>Symptom guidance • Mental health support • Student care</p>

      <hr />

      {/* Symptom Checker */}
      <section style={{ marginTop: "20px" }}>
        <h2>Symptom Checker</h2>
        <input
          type="text"
          value={symptom}
          onChange={(e) => setSymptom(e.target.value)}
          placeholder="Enter a symptom (e.g. headache, stress)"
          style={{ padding: "8px", width: "250px" }}
        />
        <p style={{ fontSize: "12px" }}>
          Not a medical diagnosis.
        </p>
      </section>

      <hr />

      {/* Mental Health Test */}
      <section style={{ marginTop: "20px" }}>
        <h2>Mental Health Self-Test</h2>
        <p>0 = Never | 1 = Sometimes | 2 = Often</p>

        {questions.map((q, i) => (
          <div key={i} style={{ marginBottom: "15px" }}>
            <p>{q}</p>
            <button onClick={() => handleScore(0)}>0</button>{" "}
            <button onClick={() => handleScore(1)}>1</button>{" "}
            <button onClick={() => handleScore(2)}>2</button>
          </div>
        ))}

        <h3>Total Score: {score}</h3>

        {score <= 3 && <p style={{ color: "lightgreen" }}>Low stress 👍</p>}
        {score > 3 && score <= 6 && (
          <p style={{ color: "orange" }}>Moderate stress ⚠️</p>
        )}
        {score > 6 && (
          <p style={{ color: "red" }}>High stress 🚨</p>
        )}
      </section>

      {/* Helpline */}
      {showHelp && (
        <section
          style={{
            backgroundColor: "#7f1d1d",
            padding: "15px",
            marginTop: "20px",
          }}
        >
          <h3>You are not alone</h3>
          <p>Reach out for help:</p>
          <ul>
            <li>KIRAN (India): 1800-599-0019</li>
            <li>AASRA: +91-22-27546669</li>
          </ul>
        </section>
      )}

      <footer style={{ marginTop: "40px", fontSize: "12px" }}>
        For emergencies, contact a healthcare professional.
      </footer>
    </main>
  );
}
