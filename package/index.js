const max_possible_pair = (data = [], max = 0, key = "") => {
  data = data
    .filter((i) => i?.[key] || i <= max)
    .sort((i, j) => i?.[key] || i - j?.[key] || j)
    .sort((i, j) => i?.id || i - j?.id || j);
  let length = data.length;
  return Array(Math.pow(2, length))
    .fill()
    .map((_, i) => {
      let j = -1,
        k = i,
        res = [];
      while (++j < length) {
        k & 1 && res.push(data[j]);
        k >>= 1;
      }
      return res;
    })
    .slice(1)
    .filter((i) => i.reduce((i, j) => i + j?.[key] || j, 0) <= max);
};

module.exports = max_possible_pair;
