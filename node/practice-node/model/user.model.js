const { default: mongoose } = require("mongoose");

mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { versionKey: false }
);


const userModel = mongoose.model("User", userModel);
module.exports = userModel;
