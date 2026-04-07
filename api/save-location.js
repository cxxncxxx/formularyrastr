export default async function handler(req, res) {
  const { id, lat, lon } = JSON.parse(req.body);

  const SUPABASE_URL = "https://bxtzdxehpsyvziiqwpza.supabase.co";
  const SUPABASE_KEY = "sb_publishable_klwriPR0NcsJtlIqIj3TJA_7hebCQFd";

  await fetch(`${SUPABASE_URL}/rest/v1/locations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`
    },
    body: JSON.stringify({
      id,
      lat,
      lon
    })
  });

  res.status(200).json({ ok: true });
}
