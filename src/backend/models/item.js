import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  }, 
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  }
});

const Blog = mongoose.model("Blog", ItemSchema);

export default Blog;