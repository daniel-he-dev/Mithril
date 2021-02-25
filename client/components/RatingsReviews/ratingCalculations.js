const ratingCalculations = function (allRatings) {
  let total = 0;
  let ratingsCount = 0;
  let ratingAverage = 0;
  for (let x = 1; x < 6; x++) {
    if (allRatings[x]) {
      total += allRatings[x] * x;
      ratingsCount += parseInt(allRatings[x]);
    }
  }
  if (total && ratingsCount) {
    ratingAverage = total / ratingsCount;
  }

  return {
    ratingAverage,
    total,
    ratingsCount
  };
};

export default ratingCalculations;
