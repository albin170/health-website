"use client";

import { useState } from "react";

export default function Page() {
  const [symptom, setSymptom] = useState("");
  const [score, setScore] = useState(0);
  const [showHelp, setShowHelp] = useState(false);
  const [chat, setChat] = useState("");

  const questions = [
    "I feel stressed or anxious frequently",
    "I have trouble sleeping",
    "I find it hard to concentrate on studies",
    "I feel overwhelmed by academic pressure",
    "I feel low or unmotivated",
  ];

  const handleScore = (val) => {
    const newScore = score + val;
    setScore(newScore);
    if (newScore > 6) setShowHelp(true);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-4 md:p-10 font-sans">
      <h1 className="text-3xl font-bold mb-2">Health & Student Mental Wellness</h1>
      <p className="text-slate-300 mb-6">Symptom guidance • Mental health support • Student care</p>

      {/* Symptom Checker */}
      <div className="bg-slate-800 p-4 rounded-xl mb-6">
        <h2 className="text-xl font-semibold mb-2">Symptom Checker</h2>
        <input
          value={symptom}
          onChange={(e) => setSymptom(e.target.value)}
          placeholder="Enter a symptom (e.g. headache, stress)"
          className="w-full p-2 rounded text-black"
        />
        <p className="text-xs text-slate-400 mt-2">Not a medical diagnosis</p>
      </div>

      {/* Mental Health Test */}
      <div className="bg-slate-800 p-4 rounded-xl mb-6">
        <h2 className="text-xl font-semibold mb-2">Mental Health Self-Test</h2>
        <p className="text-sm text-slate-300 mb-4">0 = Never | 1 = Sometimes | 2 = Often</p>

        {questions.map((q, i) => (
          <div key={i} className="mb-4">
            <p className="mb-2">{q}</p>
            <div className="flex gap-2">
              <button onClick={() => handleScore(0)} className="px-3 py-1 bg-slate-600 rounded">0</button>
              <button onClick={() => handleScore(1)} className="px-3 py-1 bg-blue-600 rounded">1</button>
              <button onClick={() => handleScore(2)} className="px-3 py-1 bg-red-600 rounded">2</button>
            </div>
          </div>
        ))}

        <p className="font-semibold">Total Score: {score}</p>
        {score <= 3 && <p className="text-green-400">Low stress 👍</p>}
        {score > 3 && score <= 6 && <p className="text-yellow-400">Moderate stress ⚠️</p>}
        {score > 6 && <p className="text-red-400">High stress 🚨</p>}
      </div>

      {/* Helpline Popup */}
      {showHelp && (
        <div className="bg-red-700 p-4 rounded-xl mb-6">
          <h3 className="font-bold mb-2">You are not alone</h3>
          <p className="text-sm">If you feel overwhelmed, please reach out:</p>
          <ul className="text-sm mt-2">
            <li>📞 KIRAN (India): 1800-599-0019</li>
            <li>📞 AASRA: 91-22-27546669</li>
          </ul>
        </div>
      )}

      {/* AI Chatbot (Basic) */}
      <div className="bg-slate-800 p-4 rounded-xl">
        <h2 className="text-xl font-semibold mb-2">AI Health Assistant</h2>
        <input
          value={chat}
          onChange={(e) => setChat(e.target.value)}
          placeholder="Ask about symptoms or stress..."
          className="w-full p-2 rounded text-black"
        />
        <p className="text-xs text-slate-400 mt-2">AI gives guidance, not diagnosis</p>
      </div>

      <footer className="text-xs text-slate-400 mt-10">
        For emergencies, contact a healthcare professional.
      </footer>
    </main>
  );
}

