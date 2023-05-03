"use strict";

var average = function average() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  var sum = numbers.reduce(function (accum, num) {
    return accum + num;
  }, 0);
  return sum / numbers.length;
};
console.log("M\xE9dia Aritim\xE9tica Simplis: ".concat(average(3, 6, 10, 9)));
// ---------------------------------------------------------------------------------
var weightAverage = function weightAverage() {
  for (var _len2 = arguments.length, entries = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entries[_key2] = arguments[_key2];
  }
  var sum = entries.reduce(function (accum, _ref) {
    var number = _ref.number,
      weight = _ref.weight;
    return accum + number * (weight !== null && weight !== void 0 ? weight : 1);
  }, 0);
  var weightSum = entries.reduce(function (accum, entry) {
    var _entry$weight;
    return accum + ((_entry$weight = entry.weight) !== null && _entry$weight !== void 0 ? _entry$weight : 1);
  }, 0);
  return sum / weightSum;
};
console.log("M\xE9dia Ponderada: ".concat(weightAverage({
  number: 9,
  weight: 3
}, {
  number: 7,
  weight: 5
}, {
  number: 7
}, {
  number: 10,
  weight: 1
})));
// --------------------------------------------------------------------------------
var median = function median() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  var orderedNumbers = [].concat(numbers).sort(function (numb1, numb2) {
    return numb1 - numb2;
  });
  var middle = Math.floor(orderedNumbers.length / 2);
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle];
  }
  var firstMedian = orderedNumbers[middle - 1];
  var secondMedia = orderedNumbers[middle];
  return average(firstMedian, secondMedia);
};
console.log("Mediana: ".concat(median(2, 5, 99, 4, 42, 7)));
console.log("Mediana: ".concat(median(15, 14, 8, 7, 3)));
// -----------------------------------------------------------------------------------------

var mode = function mode() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  var quantities = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num === n;
    }).length];
  });
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantities[0][0];
};
console.log("Moda: ".concat(mode(1, 34, 5, 5, 5, 54, 3, 3, 3, 3, 3, 3, 6, 6, 2, 3, 5, 5)));
// ---------------------------------------------
var label = function label() {
  var element = document.createElement("label");
  for (var _len5 = arguments.length, atributes = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    atributes[_key5] = arguments[_key5];
  }
  Object.assign.apply(Object, [element].concat(atributes));
  return element;
};
var elemt = label({
  id: "labelName",
  "for": "fullname",
  TextContent: "Nome Completo"
});
console.log(elemt.TextContent + "\n" + elemt.id + "\n" + elemt["for"]);