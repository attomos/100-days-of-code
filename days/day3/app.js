const pomoInput = document.getElementById("pomo");
const daysInput = document.getElementById("days");
const breakfastInput = document.getElementById("breakfast");
const lunchInput = document.getElementById("lunch");
const dinnerInput = document.getElementById("dinner");
const hoursRange = document.getElementById("hours-per-day-range");
const rangeOutput = document.getElementById("range-output");
const outputSection = document.getElementById("output-section");
const calculateButton = document.getElementById("calculate-button");

rangeOutput.innerText = hoursRange.value;
hoursRange.oninput = function () {
  rangeOutput.innerText = this.value;
};

calculateButton.addEventListener("click", () => {
  const pomoInterval = pomoInput.value;
  const days = daysInput.value;
  const breakfast = breakfastInput.value;
  const lunch = lunchInput.value;
  const dinner = dinnerInput.value;
  const hours = hoursRange.value;

  let minutes = days * (hours - breakfast - lunch - dinner) * 60;
  // console.log(minutes);

  let calculatedIntervals = 0;

  // TODO: take a long break every 4 intervals
  for (let i = minutes; minutes >= 25; ) {
    minutes -= 25;
    minutes -= 5;
    calculatedIntervals++;
    // console.log(minutes);
  }

  console.log(calculatedIntervals);

  // const calculatedOutput =
  //   ((hours - breakfast - lunch - dinner) * 60) / pomoInterval;
  // console.log(calculatedOutput);

  outputSection.innerHTML = `It'd take around <strong>${calculatedIntervals}</strong> pomodoro intervals to complete this task.`;
});
