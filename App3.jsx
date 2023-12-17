import React, { useEffect, useState, useCallback } from "react";

const App3 = () => {
  const [length, setLength] = useState(9);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (number) {
      string += "1234567890";
    }
    if (character) {
      string += "!@#$%^~&*";
    }
    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * string.length);
      pass += string.charAt(char);
    }
    setPassword(pass);
  }, [length, number, character]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100"
      }`}
    >
      <h1
        className={`text-4xl ${
          darkMode ? "bg-blue-700" : "bg-red-500"
        } p-5 rounded-full mb-8`}
      >
        Password Generator
      </h1>
      <div
        className={`bg-white p-8 rounded-lg shadow-md w-96 ${
          darkMode ? "text-gray-900" : "text-black"
        }`}
      >
        <input
          type="text"
          readOnly
          placeholder="Generated Password"
          value={password}
          className={`p-3 border rounded mb-4 w-full ${
            darkMode ? "bg-gray-800 text-white" : "bg-gray-100"
          }`}
          onChange={(e) => e.target.value}
        />

        <div className="mb-4 flex items-center">
          <label className="mr-2">Length: {length}</label>
          <input
            type="range"
            max={20}
            min={5}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className={`w-full ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}
          />
        </div>

        <div className="mb-4 space-x-4">
          <input
            type="checkbox"
            checked={number}
            onChange={() => setNumber((prev) => !prev)}
            className={`mr-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          />
          <label
            className={`mr-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Include Numbers
          </label>

          <input
            type="checkbox"
            checked={character}
            onChange={() => setCharacter((prev) => !prev)}
            className={`mr-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          />
          <label
            className={`mr-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Include Special Characters
          </label>
        </div>

        <button
          className={`py-2 px-4 ${
            darkMode ? "bg-gray-800" : "bg-blue-500"
          } text-white rounded`}
          onClick={toggleDarkMode}
        >
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default App3;
