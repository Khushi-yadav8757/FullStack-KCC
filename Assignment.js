 ️1. Student Data (10 objects)
const students = [
 {name:"Rahul", marks:78, subject:"Math"},
 {name:"Aman", marks:35, subject:"Physics"},
 {name:"Priya", marks:92, subject:"Math"},
 {name:"Neha", marks:55, subject:"Chemistry"},
 {name:"Rohit", marks:28, subject:"Physics"},
 {name:"Anjali", marks:67, subject:"Math"},
 {name:"Vikas", marks:45, subject:"Chemistry"},
 {name:"Simran", marks:81, subject:"Physics"},
 {name:"Karan", marks:39, subject:"Math"},
 {name:"Pooja", marks:73, subject:"Chemistry"}
];
---------------------------------------------------------------------------------------------
2. Filter Pass Students (marks ≥ 40)
const passStudents = students.filter(s => s.marks >= 40);
console.log("Pass Students:", passStudents);
-----------------------------------------------------------------------------------------------
3️. Filter Fail Students (marks < 40)
const failStudents = students.filter(s => s.marks < 40);
console.log("Fail Students:", failStudents);
------------------------------------------------------------------------------------------------
️4. Calculate Average Marks
const totalMarks = students.reduce((sum, s) => sum + s.marks, 0);
const average = totalMarks / students.length;
--------------------------------------------------------------------------------------------------
console.log("Average Marks:", average);
5️. Find Topper
const topper = students.reduce((max, s) =>
  s.marks > max.marks ? s : max
);
console.log("Topper:", topper);
----------------------------------------------------------------------------------------------------
6. Group Students By Subject
const groupedBySubject = students.reduce((group, student) => {

  if(!group[student.subject]){
    group[student.subject] = [];
  }
  group[student.subject].push(student);
  return group;
}, {});
--------------------------------------------------------------------------------------------------------------

console.log("Grouped By Subject:", groupedBySubject);
