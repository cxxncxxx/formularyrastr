export default function handler(req, res) {
  const id = Math.random().toString(36).substring(2, 10);

  global.links = global.links || {};
  global.links[id] = { locations: [] };

  res.json({
    link: `${req.headers.origin}/track.html?id=${id}`,
    id
  });
}
