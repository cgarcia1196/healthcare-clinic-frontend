import React, { useState } from "react";
import homePageMain from "../assets/homePageMain.jpg";
import axios from "axios";

const Header = () => {
  const [symptoms, setSymptoms] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!symptoms.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await axios.post("http://localhost:4000/api/user/ai-helper", {
        patientText: symptoms,
      });

      setResponse(res.data.aiResponse);
    } catch (error) {
      setResponse("⚠ Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center text-center space-y-8 px-4 py-12 max-w-3xl mx-auto">
      {/* Title */}
      <h1 className="text-4xl font-semibold tracking-tight text-gray-900">
        Book an Appointment Today
      </h1>

      {/* Image */}
      <div className="w-full max-w-2xl aspect-[16/9] overflow-hidden rounded-xl shadow-lg">
        <img src={homePageMain} alt="" className="w-full h-full object-cover" />
      </div>

      {/* AI Symptom Checker */}
      <div className="w-full space-y-4 text-left">
        <p className="text-lg font-medium text-gray-700">
          Not sure which doctor you need? Describe your symptoms below
        </p>

        <textarea
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder="Example: chest pain, shortness of breath, dizziness..."
          className="w-full p-4 border rounded-lg shadow-sm resize-none min-h-[120px] outline-none"
        />

        <button
          onClick={handleSubmit}
          disabled={loading || !symptoms.trim()}
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition-all"
        >
          {loading ? "Analyzing..." : "Find the Best Doctor"}
        </button>
      </div>

      {/* AI Response */}
      {response && (
        <div className="w-full p-4 border rounded-lg bg-green-50 text-gray-700 shadow-md text-left">
          <h3 className="font-semibold text-lg mb-2">Recommended Doctor:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default Header;
