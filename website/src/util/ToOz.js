const stringToOunces = (s) => {
  if (s === '') {
    return 0;
  }
  const stringParts = s.split('.');
  const weight = parseInt(stringParts[0]) * 16;
  return stringParts.length > 1 ? weight + parseInt(stringParts[1]) : weight;
}

export default stringToOunces;