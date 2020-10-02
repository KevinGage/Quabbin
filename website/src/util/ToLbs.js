const ozToLbs = (oz) => {
  if (oz === '') {
    return 0;
  }
  const num = parseInt(oz);

  if (isNaN(num)) {
    return 0;
  }

  const lbs = Math.floor(num/16);
  const remainder = num % 16;
  return `${lbs}.${remainder}`
}

export default ozToLbs;