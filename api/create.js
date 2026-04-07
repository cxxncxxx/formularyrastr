export default function handler(req, res) {
  const id = Math.random().toString(36).substring(2, 10);

  global.links = global.links || {};
  global.links[id] = { locations: [] };

  res.status(200).json({
    link: `/track.html?id=${id}`,
    id
  });
}
