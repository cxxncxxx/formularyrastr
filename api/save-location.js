export default async function handler(req, res) {
  const { id, lat, lon } = JSON.parse(req.body);

  global.links = global.links || {};

  if (!global.links[id]) {
    return res.status(404).json({ error: "No existe" });
  }

  global.links[id].locations.push({
    lat,
    lon,
    date: new Date().toISOString()
  });

  res.json({ ok: true });
}
