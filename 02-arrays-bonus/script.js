const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE
console.log(teachers);
// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
// provare con nell'array
const reversedTeachers = [];

for (let i = teachers.length - 1; i >= 0; i--) {
  reversedTeachers.push(teachers[i]);
  //console.log(newOrder);
}

console.log(reversedTeachers);

//const reversedTeachers = teachers.reverse();
//console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

console.log(longNames);

// controllo partendo da 0 tutti gli insegnanti nell'array
for (let i = 0; i < teachers.length; i++) {
  //console.log(teachers);
  //per l'insegnante che ho, controllo il numero di caratteri e se uguale o superiore a 5, inserisco nel nuovo array
  //creo variabile da appoggio

  if (teachers[i].length >= 5) {
    longNames.push(teachers[i]);
  }
}
console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
// usare ciclo for
console.log(teachers);
teachers.splice(teachers.indexOf("Ed"), 1);
console.log(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = false;
console.log(isFabioPresent);
console.log(teachers);
// contro nella lista di insegnanti se presente Fabio
for (let i = 0; i < teachers.length; i++) {
  //console.log(teachers);
  if (teachers[i] === "Fabio") {
    isFabioPresent === true;
    console.log(teachers[i]);
    console.log("Fabio è presente");
  }
}

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = null;
