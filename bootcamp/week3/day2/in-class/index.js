const fahrenheit = (celsius) => {
  const fahrenheitValue = (celsius * 9) / 5 + 32;
  console.log(fahrenheitValue);
};
const fahrenheitConverter = () => {
  for (i = 4; i < process.argv.length; i++) {
    fahrenheit(Number(process.argv[i]));
  }
};

const reverseFahrenheitConverter = () => {
  for (i = 4; i < process.argv.length; i++) {
    console.log(((Number(process.argv[i]) - 32) * 5) / 9);
  }
};

const kelvinConverter = () => {
  for (i = 4; i < process.argv.length; i++) {
    console.log(Number(process.argv[i]) + 273.15);
  }
};

const reverseKelvinConverter = () => {
  for (i = 4; i < process.argv.length; i++) {
    console.log(Number(process.argv[i]) - 273.15);
  }
};

if (process.argv[2] === "celsius" && process.argv[3] === "fahrenheit") {
  fahrenheitConverter();
} else if (process.argv[3] === "celsius" && process.argv[2] === "fahrenheit") {
  reverseFahrenheitConverter();
} else if (process.argv[2] === "celsius" && process.argv[3] === "kelvin") {
  kelvinConverter();
} else if (process.argv[3] === "celsius" && process.argv[2] === "kelvin") {
  reverseKelvinConverter();
}
