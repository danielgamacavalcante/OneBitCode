const dayjs = require("dayjs");

function birthday(date) {
  const objDateBirthday = dayjs(date);
  const today = dayjs();

  const ageInYears = today.diff(objDateBirthday, "year");
  const nextBirthday = objDateBirthday.add(ageInYears + 1, "year");
  const daysToNextBirthday = nextBirthday.diff(today, "day");
  console.log(`Idade: ${ageInYears}`);
  console.log(`Próximo Aniversário:${nextBirthday.format("DD/MM/YYYY")}`);
  if (daysToNextBirthday == 0) {
    console.log(`Dias até próximo aniversário: ${daysToNextBirthday + 1}`);
  } else {
    console.log(`Dias até próximo aniversário: ${daysToNextBirthday}`);
  }
  if (daysToNextBirthday == 365) {
    console.log("Parabéns pelo seu Aniversário!");
  }
}

birthday("1992-04-28");
