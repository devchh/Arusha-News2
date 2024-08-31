// src/pages/api/articles.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import Article from '../../models/articles'; // Ensure the path is correct

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      await mongoose.connect(process.env.MONGODB_URI as string);

      const articles = await Article.find({});
      res.status(200).json(articles);
    } catch (error) {
      console.error('Error fetching articles:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      mongoose.connection.close();
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default handler;
