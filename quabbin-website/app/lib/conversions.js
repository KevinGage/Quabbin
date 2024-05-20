export function stringToOunces(s) {
  if (!s) {
    return 0;
  }
  const stringParts = s.split(".");
  const weight = parseInt(stringParts[0]) * 16;
  return stringParts.length > 1 ? weight + parseInt(stringParts[1]) : weight;
}

export function ozToLbs(oz) {
  if (oz === "") {
    return 0;
  }
  const num = parseInt(oz);

  if (isNaN(num)) {
    return 0;
  }

  const lbs = Math.floor(num / 16);
  const remainder = num % 16;
  return `${lbs}.${remainder}`;
}
