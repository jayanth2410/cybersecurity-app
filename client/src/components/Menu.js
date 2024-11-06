// client/src/components/Menu.js
import React, { useState } from "react";
import "./Menu.css";

function Menu({ onSelectTopic, topics }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null); // Track selected topic

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTopicSelect = (topicId) => {
    setSelectedTopic(topicId); // Set the selected topic ID
    onSelectTopic(topicId);
    setIsMenuOpen(false); // Close menu on topic selection in mobile view
  };

  return (
    <div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? "✕" : "☰ Topics"}
      </button>
      <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
        <ul className="menu">
          {topics.map((topic) => (
            <li
              key={topic._id}
              className={`topic ${selectedTopic === topic._id ? "active" : ""}`} // Add 'active' class if selected
              onClick={() => handleTopicSelect(topic._id)}
            >
              {topic.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
