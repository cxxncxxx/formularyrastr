export default function handler(req, res) {
  const { id } = req.query;

  global.links = global.links || {};

  if (!global.links[id]) {
    return res.status(200).json({ locations: [] });
  }

  res.status(200).json(global.links[id]);
}
