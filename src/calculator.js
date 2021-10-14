function add(stringNumbers) {
  let sum = 0;
  let delimeter = /[,\n]/;
  let numbers = stringNumbers.split(delimeter);

  if (stringNumbers.substring(0, 2) === "//") {
    let nums = stringNumbers.replace(/[^0-9]/, "");
    numbers = nums.split("");
  }
  numbers.forEach((item) => {
    let number = parseInt(item);

    if (isNaN(number) || number > 1000) {
      number = 0;
    }

    if (number < 0) {
      throw "Adding negative numbers:" + number + "not allowed!";
    }
    sum += number;
  });
  return sum;
}

module.exports = add;
