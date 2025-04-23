const axios = require('axios');

export default async function handler(req, res) {
  const { q } = req.query;

  try {
    const response = await axios.get('https://api.genius.com/search', {
      headers: {
        Authorization: `Bearer ${process.env.GENIUS_API_TOKEN}`
      },
      params: { q }
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
