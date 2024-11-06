// client/src/components/Display.js
import React, { useState, useEffect } from "react";
import { fetchTopicDetails } from "../api/api"; // Importing the API function
import ReactMarkdown from "react-markdown";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./Display.css";

function Display({ selectedTopic }) {
  const [topic, setTopic] = useState(null);
  const [error, setError] = useState(null);
  const [copiedIndex, setCopiedIndex] = useState(null); // Track which code block was copied

  useEffect(() => {
    const loadTopicDetails = async () => {
      if (selectedTopic) {
        try {
          const data = await fetchTopicDetails(selectedTopic); // Fetch topic details
          setTopic(data);
          setError(null); // Clear any existing errors
        } catch (error) {
          setError("Error fetching topic details");
        }
      }
    };
    loadTopicDetails();
  }, [selectedTopic]);

  const handleCopy = (index) => {
    setCopiedIndex(index); // Mark which block was copied
    setTimeout(() => {
      setCopiedIndex(null); // Reset copied state after 2 seconds
    }, 2000);
  };

  // Render code block with copy functionality
  const renderCodeBlock = ({ node, inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || "");
    const codeContent = String(children).replace(/\n$/, "");

    return !inline && match ? (
      <div className="code-block">
        <pre className={className} {...props}>
          <code>{codeContent}</code>
        </pre>
        <CopyToClipboard
          text={codeContent}
          onCopy={() => handleCopy(node.position.start.line)}
        >
          <button className="copy-button">Copy</button>
        </CopyToClipboard>
        {copiedIndex === node.position.start.line && (
          <span className="copied-text">Copied!</span>
        )}
      </div>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  };

  if (!selectedTopic) {
    return <div className="no-selection">Select a topic from the sidebar.</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="topic-content">
      <h1>{topic?.name}</h1>
      <ReactMarkdown components={{ code: renderCodeBlock }}>
        {topic?.introduction}
      </ReactMarkdown>
      {topic?.videoLink && (
        <div className="video-container">
          <iframe
            src={topic.videoLink}
            title={topic.name}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
      {topic?.referenceLink && (
        <div>
          <h3>References:</h3>
          <ul>
            {topic.referenceLink.split(",").map((ref, index) => (
              <li key={index}>
                <a href={ref} target="_blank" rel="noopener noreferrer">
                  {ref}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Display;
