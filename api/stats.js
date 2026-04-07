export default function handler(req, res) {
  const { id } = req.query;

  global.links = global.links || {};

  if (!global.links[id]) {
    return res.status(404).json({ error: "No existe" });
  }

  res.json(global.links[id]);
}
