const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 90 },
  { name: "Charlie", age: 21, grade: 78 },
  { name: "Diana", age: 23, grade: 95 },
];

students.forEach((students) => console.log(students.name, students.grade));

//grades above 80

const topStudents = students.filter((students) => students.grade > 80);
console.log(topStudents);

//Filter students who are 21 or younger

const youngStudents = students.filter((students) => students.age < 21);
console.log(youngStudents);

//Log the names of students who scored above 80
//top students already defined
topStudents.forEach((topStudents) => console.log(topStudents.name));

//Log the names of students 21 or younger
//young students already defined
youngStudents.forEach((youngStudents) => console.log(youngStudents.name));
