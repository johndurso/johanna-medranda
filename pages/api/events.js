export default async function handler(req, res) {
  const apiKey = process.env.GOOGLE_API_KEY;
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const url =
    'https://sheets.googleapis.com/v4/spreadsheets/' +
    sheetId +
    '/values/Sheet1?key=' +
    apiKey;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Google API error: ' + response.status);
    }

    const data = await response.json();
    const rows = data.values;

    if (!rows || rows.length < 2) {
      return res.status(200).json([]);
    }

    const headers = rows[0].map(function(h) {
      return h.trim().toLowerCase();
    });

    const events = rows.slice(1).map(function(row) {
    const obj = {};
    headers.forEach(function(header, i) {
        obj[header] = row[i] || '';
    });
    return obj;
    });

    events.sort(function(a, b) {
    return new Date(a.date) - new Date(b.date);
    });

    res.status(200).json(events);

    res.status(200).json(events);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch events' });
  }
}