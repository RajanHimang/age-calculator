const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

const currentDate = new Date();

const calculateAge = function () {
  const birthdayValue = birthdayEl.value;
  //   console.log(birthdayValue);
  if (!birthdayValue) {
    alert(`Please enter date of birth!`);
  } else {
    const age = getAge(birthdayValue);
    if (age >= 0) {
      resultEl.innerText = `You are ${age} ${age > 1 ? "years" : "year"} old`;
    } else {
      resultEl.innerText = `Please enter the valid birthdate!`;
    }
  }
};

const getAge = function (birthdayValue) {
  const birthDate = new Date(birthdayValue);

  const { curYear, curMonth, curDate } = {
    curYear: currentDate.getFullYear(),
    curMonth: currentDate.getMonth() + 1,
    curDate: currentDate.getDate(),
  };

  const { year, month, date } = {
    year: birthDate.getFullYear(),
    month: birthDate.getMonth() + 1,
    date: birthDate.getDate(),
  };

  //   console.log(year, month, date);

  let age = curYear - year;
  if (curMonth < month || (curMonth === month && curDate < date)) age--;

  return age;
};

btnEl?.addEventListener("click", calculateAge);
