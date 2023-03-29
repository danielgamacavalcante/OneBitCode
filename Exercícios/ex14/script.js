const average = (...numbers) => {
  const sum = numbers.reduce((accum, num) => accum + num, 0);
  return sum / numbers.length;
};

console.log(`Média Aritimética Simplis: ${average(3, 6, 10, 9)}`);
// ---------------------------------------------------------------------------------
const weightAverage = (...entries) => {
  const sum = entries.reduce(
    (accum, { number, weight }) => accum + number * (weight ?? 1),
    0
  );
  const weightSum = entries.reduce(
    (accum, entry) => accum + (entry.weight ?? 1),
    0
  );
  return sum / weightSum;
};

console.log(
  `Média Ponderada: ${weightAverage(
    { number: 9, weight: 3 },
    { number: 7, weight: 5 },
    { number: 7 },
    { number: 10, weight: 1 }
  )}`
);
// --------------------------------------------------------------------------------
const median = (...numbers) => {
  const orderedNumbers = [...numbers].sort((numb1, numb2) => numb1 - numb2);
  const middle = Math.floor(orderedNumbers.length / 2);
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle];
  }

  const firstMedian = orderedNumbers[middle - 1];

  const secondMedia = orderedNumbers[middle];

  return average(firstMedian, secondMedia);
};

console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`);
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`);
// -----------------------------------------------------------------------------------------

const mode = (...numbers) => {
  const quantities = numbers.map((num) => [
    num,
    numbers.filter((n) => num === n).length,
  ]);
  quantities.sort((a, b) => b[1] - a[1]);
  return quantities[0][0];
};

console.log(
  `Moda: ${mode(1, 34, 5, 5, 5, 54, 3, 3, 3, 3, 3, 3, 6, 6, 2, 3, 5, 5)}`
);
