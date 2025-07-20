const dailyData = {
  apple: [
    { day: 0, brix: 13.1, pH: 3.5, firmness: 1.19 },
    { day: 2, brix: 12.9, pH: 3.52, firmness: 1.08 },
    { day: 4, brix: 13.2, pH: 3.57, firmness: 9.93 },
    { day: 6, brix: 13.5, pH: 3.62, firmness: 9.03 },
  ],
  banana: [
    { day: 0, brix: 4.5, pH: 5.0, firmness: 4.0 },
    { day: 2, brix: 10.0, pH: 5.2, firmness: 3.0 },
    { day: 4, brix: 17.0, pH: 5.4, firmness: 2.0 },
    { day: 6, brix: 23.0, pH: 5.6, firmness: 10.0 },
  ],
  mango: [
    { day: 0, brix: 12.0, pH: 3.2, firmness: 2.5 },
    { day: 2, brix: 14.0, pH: 3.4, firmness: 1.8 },
    { day: 4, brix: 16.0, pH: 3.6, firmness: 1.2 },
    { day: 6, brix: 18.0, pH: 3.8, firmness: 7.0 },
  ],
  orange: [
    { day: 0, brix: 11.0, pH: 3.5, firmness: 3.0 },
    { day: 2, brix: 12.0, pH: 3.6, firmness: 2.5 },
    { day: 4, brix: 13.0, pH: 3.7, firmness: 2.0 },
    { day: 6, brix: 14.0, pH: 3.8, firmness: 1.5 },
  ],
  kiwi: [
    { day: 0, brix: 9.0, pH: 3.0, firmness: 3.5 },
    { day: 2, brix: 10.0, pH: 3.1, firmness: 2.8 },
    { day: 4, brix: 11.0, pH: 3.2, firmness: 2.2 },
    { day: 6, brix: 12.0, pH: 3.3, firmness: 1.6 },
  ],
  tangerine: [
    { day: 0, brix: 10.0, pH: 3.5, firmness: 2.8 },
    { day: 2, brix: 11.0, pH: 3.6, firmness: 2.2 },
    { day: 4, brix: 12.0, pH: 3.7, firmness: 1.8 },
    { day: 6, brix: 13.0, pH: 3.8, firmness: 1.4 },
  ],
  mandarin: [
    { day: 0, brix: 9.0, pH: 3.5, firmness: 2.6 },
    { day: 2, brix: 10.0, pH: 3.6, firmness: 2.0 },
    { day: 4, brix: 11.0, pH: 3.7, firmness: 1.6 },
    { day: 6, brix: 12.0, pH: 3.8, firmness: 1.2 },
  ],
  cherry: [
    { day: 0, brix: 14.0, pH: 3.2, firmness: 2.0 },
    { day: 2, brix: 15.0, pH: 3.3, firmness: 1.6 },
    { day: 4, brix: 16.0, pH: 3.4, firmness: 1.2 },
    { day: 6, brix: 17.0, pH: 3.5, firmness: 8.0 },
  ],
  grape: [
    { day: 0, brix: 14.0, pH: 3.1, firmness: 1.8 },
    { day: 2, brix: 15.0, pH: 3.2, firmness: 1.4 },
    { day: 4, brix: 16.0, pH: 3.3, firmness: 10.0 },
    { day: 6, brix: 17.0, pH: 3.4, firmness: 7.0 },
  ],
  strawberry: [
    { day: 0, brix: 8.0, pH: 3.3, firmness: 1.5 },
    { day: 2, brix: 9.0, pH: 3.4, firmness: 1.2 },
    { day: 4, brix: 10.0, pH: 3.5, firmness: 9.0 },
    { day: 6, brix: 11.0, pH: 3.6, firmness: 6.0 },
  ],
  blueberry: [
    { day: 0, brix: 9.0, pH: 3.0, firmness: 1.4 },
    { day: 2, brix: 10.0, pH: 3.1, firmness: 1.1 },
    { day: 4, brix: 11.0, pH: 3.2, firmness: 8.0 },
    { day: 6, brix: 12.0, pH: 3.3, firmness: 5.0 },
  ],
  lemon: [
    { day: 0, brix: 8.0, pH: 2.5, firmness: 3.0 },
    { day: 2, brix: 9.0, pH: 2.6, firmness: 2.8 },
    { day: 4, brix: 10.0, pH: 2.7, firmness: 2.6 },
    { day: 6, brix: 11.0, pH: 2.8, firmness: 2.4 },
  ],
  nectarine: [
    { day: 0, brix: 13.0, pH: 3.2, firmness: 2.2 },
    { day: 2, brix: 14.0, pH: 3.3, firmness: 1.8 },
    { day: 4, brix: 15.0, pH: 3.4, firmness: 1.4 },
    { day: 6, brix: 16.0, pH: 3.5, firmness: 10.0 },
  ],
  dragonfruit: [
    { day: 0, brix: 9.0, pH: 4.3, firmness: 2.0 },
    { day: 2, brix: 10.0, pH: 4.4, firmness: 1.6 },
    { day: 4, brix: 11.0, pH: 4.5, firmness: 1.2 },
    { day: 6, brix: 12.0, pH: 4.6, firmness: 8.0 },
  ],
  tomato: [
    { day: 0, brix: 5.3, pH: 4.2, firmness: 1.8 },
    { day: 2, brix: 5.0, pH: 4.3, firmness: 2.0 },
    { day: 4, brix: 5.0, pH: 4.4, firmness: 1.7 },
    { day: 6, brix: 5.0, pH: 5, firmness: 1.7 },
  ],
  cherry_tomato: [
    { day: 0, brix: 9.3, pH: 3.8, firmness: 3.8 },
    { day: 2, brix: 14.0, pH: 4.0, firmness: 2.0 },
    { day: 4, brix: 9.0, pH: 4.8, firmness: 1.8 },
    { day: 6, brix: 11.5, pH: 5.0, firmness: 1.5 },
  ],
  peach: [
    { day: 0, brix: 12.0, pH: 3.2, firmness: 2.2 },
    { day: 2, brix: 13.0, pH: 3.3, firmness: 1.8 },
    { day: 4, brix: 14.0, pH: 3.4, firmness: 1.4 },
    { day: 6, brix: 15.0, pH: 3.5, firmness: 10.0 },
  ],
  plum: [
    { day: 0, brix: 15.0, pH: 4.0, firmness: 3.6 },
    { day: 2, brix: 15.5, pH: 4.0, firmness: 3.4 },
    { day: 4, brix: 15.0, pH: 4.0, firmness: 2.5 },
    { day: 6, brix: 15.0, pH: 3.0, firmness: 2.3 },
  ],
  raspberry: [
    { day: 0, brix: 10.0, pH: 3.0, firmness: 1.2 },
    { day: 2, brix: 11.0, pH: 3.1, firmness: 9.0 },
    { day: 4, brix: 12.0, pH: 3.2, firmness: 7.0 },
    { day: 6, brix: 13.0, pH: 3.3, firmness: 5.0 },
  ],
  pear: [
    { day: 0, brix: 10.5, pH: 4.0, firmness: 0.9 },
    { day: 2, brix: 14.0, pH: 5, firmness: 1.2 },
    { day: 4, brix: 12.0, pH: 5, firmness: 1.2 },
    { day: 6, brix: 13.0, pH: 5, firmness: 1.0 },
  ],
  avocado: [
    { day: 0, brix: 1.0, pH: 6.5, firmness: 3.0 },
    { day: 2, brix: 2.0, pH: 6.6, firmness: 2.4 },
    { day: 4, brix: 3.0, pH: 6.7, firmness: 1.8 },
    { day: 6, brix: 4.0, pH: 6.8, firmness: 1.2 },
  ],
};

const fruitSelect = document.getElementById("fruit");
const inputTypeSelect = document.getElementById("input-type");
const valueSlider = document.getElementById("value");
const valueDisplay = document.getElementById("value-display");
const outputDiv = document.getElementById("output");

// Update slider range & display based on fruit & data type
function updateSliderRange() {
  const fruit = fruitSelect.value;
  const inputType = inputTypeSelect.value;

  const dataPoints = dailyData[fruit];
  if (!dataPoints) return;

  const values = dataPoints.map(d => {
    if (inputType === "brix") return d.brix;
    if (inputType === "pH") return d.pH;
    if (inputType === "hardness") return d.firmness;
  });

  const min = Math.min(...values);
  const max = Math.max(...values);

  valueSlider.min = min.toFixed(1);
  valueSlider.max = max.toFixed(1);

  const range = max - min;
  valueSlider.step = range > 10 ? "0.5" : "0.1";

  valueSlider.value = ((min + max) / 2).toFixed(1);
  valueDisplay.textContent = valueSlider.value;
  outputDiv.textContent = ""; // Clear output on slider change
}

valueSlider.addEventListener("input", () => {
  valueDisplay.textContent = valueSlider.value;
  outputDiv.textContent = ""; 
});

fruitSelect.addEventListener("change", updateSliderRange);
inputTypeSelect.addEventListener("change", updateSliderRange);

updateSliderRange(); 

document.getElementById("calculate").addEventListener("click", () => {
  const fruit = fruitSelect.value;
  const inputType = inputTypeSelect.value;
  const inputVal = parseFloat(valueSlider.value);

  const dataPoints = dailyData[fruit];
  if (!dataPoints) {
    outputDiv.textContent = "Fruit data not found.";
    return;
  }

  let closest = dataPoints[0];
  let closestDiff = Math.abs(getDataValue(closest, inputType) - inputVal);

  for (const dp of dataPoints) {
    const diff = Math.abs(getDataValue(dp, inputType) - inputVal);
    if (diff < closestDiff) {
      closest = dp;
      closestDiff = diff;
    }
  }
  const values = dataPoints.map(d => getDataValue(d, inputType));
  const min = Math.min(...values);
  const max = Math.max(...values);
  const midpoint = (min + max) / 2;
  const position = getDataValue(closest, inputType);
  let label = "";
  if (inputType === "brix") {
    label = position < midpoint ? "Sour" : "Sweet";
  } else if (inputType === "pH") {
    label = position < midpoint ? "Acidic" : "Alkaline";
  } else if (inputType === "hardness") {
    label = position < midpoint ? "Hard" : "Soft";
  }

  // Display
  outputDiv.innerHTML = `
    <h3>Match Results</h3>
    <p><strong>Fruit:</strong> ${capitalize(fruit)}</p>
    <p><strong>Day:</strong> ${closest.day}</p>
    <p><strong>Sweetness (Brix %):</strong> ${closest.brix} <em>${closest.brix < midpoint ? "Sour" : "Sweet"}</em></p>
    <p><strong>pH Level:</strong> ${closest.pH} <em>${closest.pH < midpoint ? "Acidic" : "Alkaline"}</em></p>
    <p><strong>Hardness:</strong> ${closest.firmness} <em>${closest.firmness < midpoint ? "Hard" : "Soft"}</em></p>
  `;
});


function getDataValue(dataPoint, inputType) {
  if (inputType === "brix") return dataPoint.brix;
  if (inputType === "pH") return dataPoint.pH;
  if (inputType === "hardness") return dataPoint.firmness;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).replace('_', ' ');
}
