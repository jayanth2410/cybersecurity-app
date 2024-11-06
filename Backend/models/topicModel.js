// // backend/models/topicModel.js
// const mongoose = require('mongoose');

// const topicSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   introduction: { type: String },
//   videoLink: { type: String },
//   referenceLink: { type: String },
// });

// const Topic = mongoose.model('Topic', topicSchema);

// module.exports = Topic;



// backend/models/topicModel.js

const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  name: { type: String, required: true },
  introduction: { type: String },
  videoLink: { type: String },
  referenceLink: { type: String },
  category: { type: String }, // Add category field
  subCategory: { type: String }, // Add subCategory field
});

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;
