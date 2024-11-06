  // client/src/api/api.js
  import axios from 'axios';

  const API_URL = 'http://localhost:5000/api';

  // Fetch all topics from the backend
  export const fetchTopics = async () => {
    try {
      const response = await axios.get(`${API_URL}/topics`);
      return response.data;
    } catch (error) {
      console.error('Error fetching topics:', error.message);
      throw error;
    }
  };

  // Fetch a specific topic's details by ID
  export const fetchTopicDetails = async (id) => {
    try {
      const response = await axios.get(`${API_URL}/topics/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching topic details:', error.message);
      throw error;
    }
  };
