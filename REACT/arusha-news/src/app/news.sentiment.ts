// pages/api/news-sentiment.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import request from 'request';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const url = 'https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=demo';

  request.get(
    {
      url: url,
      json: true,
      headers: { 'User-Agent': 'request' }
    },
    (err, response, data) => {
      if (err) {
        res.status(500).json({ error: 'Error fetching data' });
      } else if (response.statusCode !== 200) {
        res.status(response.statusCode).json({ error: 'Error fetching data' });
      } else {
        res.status(200).json(data);
      }
    }
  );
}
