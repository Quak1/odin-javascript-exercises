const findTheOldest = function (persons) {
  return persons.reduce((oldest, current) => {
    oldestAge = getAge(oldest);
    currentAge = getAge(current);
    return oldestAge >= currentAge ? oldest : current;
  });
};

function getAge(person) {
  if (!("yearOfDeath" in person)) {
    const currentYear = new Date().getFullYear();
    return currentYear - person.yearOfBirth;
  }

  return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
