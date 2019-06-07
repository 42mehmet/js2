"use strict";

const monday = [
  {
    name: "Write a summary HTML/CSS",
    duration: 180
  },
  {
    name: "Some web development",
    duration: 120
  },
  {
    name: "Fix homework for class10",
    duration: 20
  },
  {
    name: "Talk to a lot of people",
    duration: 200
  }
];

const tuesday = [
  {
    name: "Keep writing summary",
    duration: 240
  },
  {
    name: "Some more web development",
    duration: 180
  },
  {
    name: "Staring out the window",
    duration: 10
  },
  {
    name: "Talk to a lot of people",
    duration: 200
  },
  {
    name: "Look at application assignments new students",
    duration: 40
  }
];

const maartjesTasks = monday.concat(tuesday);
const maartjesHourlyRate = 20;

function computeEarnings(tasks, hourlyRate) {
  // Bu yorumu ve asagidaki satiri kendi kodunuzla degistirin
  console.log(tasks, hourlyRate);
}

// eslint-disable-next-line no-unused-vars
const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);

// `earnings` degerini virgulden sonra iki basamaga donusen bir string sekline cevirin. (euro ve cent cinsinden)

console.log(
  `Maartje has earned €${"bu stringi yuvarlanmis euro-cent degiskeni ile degistirin"}`
);

// Asagidaki kodlara dokunmayin
module.exports = {
  maartjesTasks,
  maartjesHourlyRate,
  computeEarnings
};
