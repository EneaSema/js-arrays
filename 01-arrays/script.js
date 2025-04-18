const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE
console.log(teachers);
// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
console.log(fourthTeacher);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'

teachers[4] = "Patrick";
let chanceTeacher = teachers[4];
console.log(chanceTeacher);

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers[6];
console.log(lastTeacher);

const lastTeacher1 = teachers.pop();
console.log(lastTeacher1);

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers[0];
console.log(firstTeacher);

const firstTeacher1 = teachers.shift();
console.log(firstTeacher1);

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers

//Soluzione corretta
teachers.push("Vanessa");
console.log(teachers);

//Soluzione sbagliata perchè faccio una concatenazione di testo e non di elementi
let newTeacher = "Vanessa";
console.log(newTeacher);
let newTeachers = teachers + newTeacher;
console.log(newTeachers);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers

teachers.unshift("Sarah");
console.log(teachers);

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf("Lewis");
console.log(lewisIndex);

//const lewisIndex = null;

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = teachers.length > 0;
console.log(isTeachersEmpty);

if (isTeachersEmpty) {
  console.log("Array con elementi");
} else {
  console.log("Array vuoto. Aggiungi elementi");
}
