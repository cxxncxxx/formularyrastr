export default async function handler(req, res) {
  const { id } = req.query;

  const SUPABASE_URL = "https://bxtzdxehpsyvziiqwpza.supabase.co";
  const SUPABASE_KEY = "sb_publishable_klwriPR0NcsJtlIqIj3TJA_7hebCQFd";

  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/locations?id=eq.${id}&order=created_at.desc`,
    {
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`
      }
    }
  );

  const data = await response.json();

  res.status(200).json({ locations: data });
}
