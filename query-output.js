const queryOutput = json =>
  `Found **${json.count} matches**.\n${json.documents[0].url}`;

module.exports = queryOutput;
