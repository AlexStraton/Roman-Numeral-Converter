const input = document.getElementById("number");
const button = document.getElementById("convert-btn");
const output = document.getElementById("output");

const romanNumerals = [
  { value: 1000, numeral: "M" },
  { value: 900, numeral: "CM" },
  { value: 500, numeral: "D" },
  { value: 400, numeral: "CD" },
  { value: 100, numeral: "C" },
  { value: 90, numeral: "XC" },
  { value: 50, numeral: "L" },
  { value: 40, numeral: "XL" },
  { value: 10, numeral: "X" },
  { value: 9, numeral: "IX" },
  { value: 5, numeral: "V" },
  { value: 4, numeral: "IV" },
  { value: 1, numeral: "I" },
];

function toRoman(num) {
  let romanNumeral = "";
  for (let i = 0; i < romanNumerals.length; i++) {
    const currentNumber = romanNumerals[i];
    while (num >= currentNumber.value) {
      romanNumeral += currentNumber.numeral;
      num -= currentNumber.value;
    }
  }
  output.textContent = romanNumeral;
}

button.addEventListener("click", function () {
  if (input.value.trim() === "") {
    output.textContent = "Please enter a valid number";
  } else if (input.value >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
  } else if (input.value <= -1) {
    output.textContent = "Please enter a number greater than or equal to 1";
  } else {
    toRoman(input.value);
  }
});

reset.addEventListener("click", function () {
  input.value = "";
  output.textContent = "Enter a Number:";
});

