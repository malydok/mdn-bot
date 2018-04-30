const queryOutput = json => {
  const out = [`Found **${json.count} matches**.`];
  out.push(json.documents[0].url);
  return out.join('\n');
};

module.exports = queryOutput;
