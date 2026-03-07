//Check if all students passed (marks ≥ 40)
const marks = [50, 60, 45, 80];
const result = marks.every(m => m >= 40);
console.log(result);

every() check karta hai ki sabhi elements condition satisfy kar rahe hain ya nahi.
-----------------------------------------------------------------------------------------------------------------------------
//Get students who passed (marks ≥ 40)
const marks = [10, 60, 30, 80];
const passed = marks.filter(m => m >= 40);
console.log(passed);
filter() sirf condition true wale elements return karta hai.
-------------------------------------------------------------------------------------------------------------------------------
//Find first student with marks greater than 80
const marks = [10, 60, 30, 80];
const passed = marks.filter(m> m >= 40);
console.log(passed);
find() first element return karta hai jo condition satisfy kare.
----------------------------------------------------------------------
//Flatten this array
const arr2 = [10, [20, [30]]];
const flatArray = arr2.flat(2);
console.log(flatArray);
flat(2) ka matlab 2 level tak nested array ko flat karna.
------------------------------------------------------------------------------
//Print double of each number
const nums2 = [2, 4, 6];
nums2.forEach(n => {
  console.log(n * 2);
});
------------------------------------------------------------------------------
//Extract only names from objects
const students = [
  {name:"Rahul", batch:"BCA", year:2},
  {name:"Priya", batch:"BCA", year:1},
  {name:"Aman", batch:"BCA", year:3}
];
const names = students.map(s => s.name);
console.log(names);
Output
["Rahul","Priya","Aman"]
some() check karta hai ki koi bhi element condition satisfy karta hai ya nahi.
-------------------------------------------------------------------------------------
//Sort ascending & descending

const nums1 = [45,12,89,3];
// Ascending
nums1.sort((a,b) => a - b);
console.log(nums1);
// Descending
nums1.sort((a,b) => b - a);
console.log(nums1);
-------------------------------------------------------------------------------



















