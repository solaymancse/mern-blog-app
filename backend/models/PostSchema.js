const mongoose = require("mongoose");
const schema = mongoose.Schema({
  title: { type: String, require },
  description: { type: String, require },
  imageFileSet: { type: String, require },
  publishedAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("posts", schema);
