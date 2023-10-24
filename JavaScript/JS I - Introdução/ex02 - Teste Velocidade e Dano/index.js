document.querySelector("#formCar").addEventListener("submit", function (ev) {
  ev.preventDefault();
  const nameCar1 = document.querySelector("#nameCar1").value;
  const nameCar2 = document.querySelector("#nameCar2").value;
  let speedCar1 = document.querySelector("#speedCar1").value;
  let speedCar2 = document.querySelector("#speedCar2").value;
  let moreSpeed = document.querySelector("#moreSpeed");

  if (parseFloat(speedCar1) > parseFloat(speedCar2)) {
    moreSpeed.value = `${nameCar1}`;
  } else {
    if (parseFloat(speedCar1) < parseFloat(speedCar2)) {
      moreSpeed.value = `${nameCar2}`;
    }
  }
});
