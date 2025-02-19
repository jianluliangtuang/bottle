import React, { useState } from "react";

const Singup = () => {
    const [username, setUsername] = useState("");
  const [localData, setLocalData] = useState(localStorage.getItem("username") || "");
  const [sessionData, setSessionData] = useState(sessionStorage.getItem("username") || "");

  // Save to Local Storage
  const saveToLocal = () => {
    if (username.trim() !== "") {
      localStorage.setItem("username", username);
      setLocalData(username);
      alert("Saved to Local Storage!");
    } else {
      alert("Please enter a username.");
    }
  };

  // Save to Session Storage
  const saveToSession = () => {
    if (username.trim() !== "") {
      sessionStorage.setItem("username", username);
      setSessionData(username);
      alert("Saved to Session Storage!");
    } else {
      alert("Please enter a username.");
    }
  };

  // Retrieve Local Storage
  const getFromLocal = () => {
    setLocalData(localStorage.getItem("username") || "No data found");
  };

  // Retrieve Session Storage
  const getFromSession = () => {
    setSessionData(sessionStorage.getItem("username") || "No data found");
  };

  // Clear Local Storage
  const clearLocal = () => {
    localStorage.removeItem("username");
    setLocalData("");
    alert("Local Storage Cleared!");
  };

  // Clear Session Storage
  const clearSession = () => {
    sessionStorage.removeItem("username");
    setSessionData("");
    alert("Session Storage Cleared!");
  };
  return (
    <div>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center w-96">
        <h2 className="text-2xl font-bold mb-4">React + Tailwind Storage</h2>

        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 rounded-md border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="mt-4 space-x-2">
          <button onClick={saveToLocal} className="bg-blue-500 px-4 py-2 rounded-md">Save to Local</button>
          <button onClick={saveToSession} className="bg-green-500 px-4 py-2 rounded-md">Save to Session</button>
        </div>

        <div className="mt-4 space-x-2">
          <button onClick={getFromLocal} className="bg-yellow-500 px-4 py-2 rounded-md">Get Local</button>
          <button onClick={getFromSession} className="bg-purple-500 px-4 py-2 rounded-md">Get Session</button>
        </div>

        <div className="mt-4 space-x-2">
          <button onClick={clearLocal} className="bg-red-500 px-4 py-2 rounded-md">Clear Local</button>
          <button onClick={clearSession} className="bg-pink-500 px-4 py-2 rounded-md">Clear Session</button>
        </div>

        <h3 className="mt-4 text-lg">Local Storage: {localData || "No data"}</h3>
        <h3 className="text-lg">Session Storage: {sessionData || "No data"}</h3>
      </div>
    </div>
    </div>
  )
}

export default Singup
