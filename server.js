const mongoose = require("mongoose");

// Define the alphabet including lowercase letters, uppercase letters, and numbers
const alphabet =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// Define the length of the generated ID
const idLength = 6;

// Generate a custom Nano ID function using the specified alphabet and length
const generateCustomUrlID = async () => {
  const { customAlphabet } = await import("nanoid");
  return customAlphabet(alphabet, idLength);
};

// Define the model
const shortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: async () => await generateCustomUrlID(),
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});

// Export the model
module.exports = mongoose.model("ShortUrl", shortUrlSchema);
