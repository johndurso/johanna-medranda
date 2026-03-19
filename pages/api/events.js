export default async function handler(req, res) {
  const apiKey = process.env.GOOGLE_API_KEY;
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const url =
    'https://sheets.googleapis.com/v4/spreadsheets/' +
    sheetId +
    '/values/Sheet1?key=' +
    apiKey;

  function parseDate(str) {
    if (!str) return null;
    const slashParts = str.split('/');
    if (slashParts.length === 3) {
      return new Date(slashParts[2], slashParts[0] - 1, slashParts[1]);
    }
    const d = new Date(str);
    return isNaN(d) ? null : d;
  }

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


    console.log('Headers:', headers);
    console.log('First data row:', rows[1]);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const events = rows.slice(1).map(function(row) {
      const obj = {};
      headers.forEach(function(header, i) {
        obj[header] = row[i] || '';
      });
      return obj;
    }).filter(function(event) {
      const eventDate = parseDate(event.date);
      return eventDate !== null && eventDate >= today;
    });

    events.sort(function(a, b) {
      return parseDate(a.date) - parseDate(b.date);
    });

    res.status(200).json(events);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch events' });
  }
}