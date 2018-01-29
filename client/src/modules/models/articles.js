const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema {(
	url: String,
	title: String,
	date: String
	)};

const article = mongoose.model("article", articleSchema);

module.exports = article;
