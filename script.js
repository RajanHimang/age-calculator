const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

const currentDate = new Date();

const calculateAge = function () {
  const birthdayValue = birthdayEl.value;

  // Check for empty input
  if (!birthdayValue) {
    alert("Please enter your date of birth!");
    return;
  }

  const birthDate = new Date(birthdayValue);

  // Check for invalid date
  if (isNaN(birthDate.getTime())) {
    alert("Please enter a valid date!");
    return;
  }

  // Check if the date is in the future
  if (birthDate > currentDate) {
    resultEl.innerText = "Date of birth cannot be in the future!";
    return;
  }

  // Get age details
  const { age, ageMonth, ageDate } = getAge(birthdayValue);

  // Display the result
  if (age >= 0 && ageMonth >= 0 && ageDate >= 0) {
    const yearText = age > 1 ? "years" : "year";
    const monthText = ageMonth > 1 ? "months" : "month";
    const dayText = ageDate > 1 ? "days" : "day";

    if (age === 0 && ageMonth === 0 && ageDate === 0) {
      resultEl.innerText = "You are 0 year, 0 month, and 0 day old.";
    } else {
      resultEl.innerText = `You are ${age} ${yearText}, ${ageMonth} ${monthText}, and ${ageDate} ${dayText} old.`;
    }
  } else {
    resultEl.innerText = "Please enter a valid birthdate!";
  }
};

const getAge = function (birthdayValue) {
  const birthDate = new Date(birthdayValue);

  const curYear = currentDate.getFullYear();
  const curMonth = currentDate.getMonth() + 1;
  const curDate = currentDate.getDate();

  const year = birthDate.getFullYear();
  const month = birthDate.getMonth() + 1;
  const date = birthDate.getDate();

  let age = curYear - year;
  let ageMonth = curMonth - month;
  let ageDate = curDate - date;

  // Adjust the age if current month is earlier than birth month or if today is earlier than birth date
  if (ageMonth < 0 || (ageMonth === 0 && ageDate < 0)) {
    age--;
    ageMonth += 12;
  }

  // Adjust age and month if the current date is earlier than the birth date
  if (ageDate < 0) {
    const daysInLastMonth = new Date(curYear, curMonth - 1, 0).getDate();
    ageDate += daysInLastMonth;
    ageMonth--;
  }

  return { age, ageMonth, ageDate };
};

// Add event listener to the button
btnEl?.addEventListener("click", calculateAge);
