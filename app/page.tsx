"use client";

import { useState } from "react";

export default function Home() {
  const [score, setScore] = useState<number>(0);
  const [showHelp, setShowHelp] = useState<boolean>(false);

  const questions = [
    "I feel stressed or anxious frequently",
    "I have trouble sleeping",
    "I find it hard to concentrate on studies",
    "I feel overwhelmed by academic pressure",
    "I feel low or unmotivated",
  ];

  const addScore = (value: number) => {
    const newScore = score + value;
    setScore(newScore);
    if (newScore >= 7) setShowHelp(true);
  };

  return (
    <main style={styles.page}>
      <div style={styles.card}>
        <h1>Health & Student Mental Wellness</h1>
        <p style={styles.sub}>
          Symptom guidance • Mental health support • Student care
        </p>
      </div>

      <div style={styles.card}>
        <h2>Mental Health Self-Test</h2>
        <p>0 = Never | 1 = Sometimes | 2 = Often</p>

        {questions.map((q, i) => (
          <div key={i} style={styles.question}>
            <p>{q}</p>
            <div>
              <button onClick={() => addScore(0)}>0</button>
              <button onClick={() => addScore(1)}>1</button>
              <button onClick={() => addScore(2)}>2</button>
            </div>
          </div>
        ))}

        <h3>Total Score: {score}</h3>

        {score <= 3 && <p style={{ color: "green" }}>Low stress 👍</p>}
        {score > 3 && score <= 6 && (
          <p style={{ color: "orange" }}>Moderate stress ⚠️</p>
        )}
        {score > 6 && (
          <p style={{ color: "red" }}>High stress 🚨</p>
        )}
      </div>

      {showHelp && (
        <div style={{ ...styles.card, background: "#fee2e2" }}>
          <h2>Emergency Support</h2>
          <p>Please reach out for help:</p>
          <ul>
            <li>KIRAN (India): 1800-599-0019</li>
            <li>AASRA: +91-22-27546669</li>
          </ul>
        </div>
      )}

      <footer style={styles.footer}>
        Not a medical diagnosis. For emergencies, contact professionals.
      </footer>
    </main>
  );
}

const styles: any = {
  page: {
    minHeight: "100vh",
    padding: "20px",
    background: "#0f172a",
    color: "white",
  },
  card: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  sub: {
    opacity: 0.8,
  },
  question: {
    marginBottom: "15px",
  },
  footer: {
    textAlign: "center",
    fontSize: "12px",
    opacity: 0.7,
  },
};

