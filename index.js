const fastcodeDashboard = require("@fastcode.cloud/fastcode-dashboard");

console.log("Starting Project");

fastcodeDashboard.onConnect(function () {
  console.log("Connected to fastcode dashboard");
  setInterval(() => {
    const value = getRandomInt(20, 80);
    console.log(value);
    fastcodeDashboard.dashboard([
      {
        key: "temp",
        value: value,
      },
    ]);
    fastcodeDashboard.dashboard([
      {
        key: "temp2",
        value: 50,
      },
    ]);
  }, 2000);
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
