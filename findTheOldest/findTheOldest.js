const findTheOldest = oldPeople => {
    // Assume array is not empty
    return oldPeople.reduce((currentOldestPerson, oldPerson) => {
        const currentOldestPersonAge = calculateAge(currentOldestPerson);
        const oldPersonAge = calculateAge(oldPerson);
        return (oldPersonAge > currentOldestPersonAge) ? oldPerson : currentOldestPerson;
    });
};

function calculateAge(oldPerson) {
    if(!('yearOfDeath' in oldPerson)) {
        let thisYear = new Date().getFullYear();
        return thisYear - oldPerson.yearOfBirth;
    }
    return oldPerson.yearOfDeath - oldPerson.yearOfBirth;
}

console.log(findTheOldest([
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    }
]));

module.exports = findTheOldest;
