// src/components/Courses.js
import React, { useState, useEffect } from "react";
import { fetchTopics } from "../api/api"; // Adjusted import for API
import Menu from "./Menu";
import Display from "./Display";
import "./Courses.css";

function Courses() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTopics = async () => {
      try {
        const data = await fetchTopics();
        setTopics(data);
      } catch (error) {
        setError("Error fetching topics");
      } finally {
        setLoading(false);
      }
    };

    loadTopics();
  }, []);

  return (
    <div className="app">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <Menu topics={topics} onSelectTopic={setSelectedTopic} />
          <Display selectedTopic={selectedTopic} />
        </>
      )}
    </div>
  );
}

export default Courses;
