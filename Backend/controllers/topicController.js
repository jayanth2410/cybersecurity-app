// backend/controllers/topicController.js
const Topic = require('../models/topicModel');

exports.getAllTopics = async (req, res) => {
  try {
    const topics = await Topic.find();
    res.json(topics);
  } catch (error) {
    res.status(500).json({ message: `Error fetching topics: ${error.message}` });
  }
};

exports.getTopicsById = async (req, res) => {
  const topicId = req.params.id;
  try {
    const topic = await Topic.findById(topicId);
    if (!topic) return res.status(404).json({ message: 'Topic not found' });
    res.json(topic);
  } catch (error) {
    res.status(500).json({ message: `Error fetching topic details: ${error.message}` });
  }
};

exports.createTopic = async (req, res) => {
  const { name, introduction, videoLink, referenceLink, category, subCategory } = req.body;

  try {
    const newTopic = new Topic({ name, introduction, videoLink, referenceLink, category, subCategory });
    await newTopic.save();
    res.status(201).json(newTopic);
  } catch (error) {
    res.status(500).json({ message: 'Error creating topic' });
  }
};

exports.updateTopic = async (req, res) => {
  const { id } = req.params;
  const { name, introduction, videoLink, referenceLink, category, subCategory } = req.body;

  try {
    const updatedTopic = await Topic.findByIdAndUpdate(
      id,
      { name, introduction, videoLink, referenceLink, category, subCategory },
      { new: true }
    );

    if (!updatedTopic) return res.status(404).json({ message: 'Topic not found' });

    res.json(updatedTopic);
  } catch (error) {
    res.status(500).json({ message: 'Error updating topic' });
  }
};

exports.deleteTopic = async (req, res) => {
  const { id } = req.params;

  try {
    const topic = await Topic.findByIdAndDelete(id);
    if (!topic) return res.status(404).json({ message: 'Topic not found' });
    res.json({ message: 'Topic deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting topic' });
  }
};
