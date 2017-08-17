const ORIGIN = process.env.ORIGIN;

const option = (req, res) => {
  const allow = 'OPTIONS, GET, HEAD, POST';
  res.statusCode = 200;
  res.setHeader('Allow', allow);
  res.setHeader('Access-Control-Allow-Origin', ORIGIN || '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  return res.end(allow);
};

module.exports = option;
