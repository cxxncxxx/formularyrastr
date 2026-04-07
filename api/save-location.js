export default async function handler(req, res) {
  try {
    const { id, lat, lon } = JSON.parse(req.body);

    global.links = global.links || {};

    if (!global.links[id]) {
      global.links[id] = { locations: [] };
    }

    global.links[id].locations.push({
      lat,
      lon,
      date: new Date().toISOString()
    });

    res.status(200).json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: "Error" });
  }
}
