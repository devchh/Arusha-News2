// models/Articles.ts

import mongoose, { Document, Model, Schema } from 'mongoose';

interface IArticle extends Document {
  title: string;
  content: string;
  tags: string[];
}

const ArticleSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: [{ type: String }]
});

const Article: Model<IArticle> = mongoose.models.Article || mongoose.model<IArticle>('Article', ArticleSchema);

export default Article;
