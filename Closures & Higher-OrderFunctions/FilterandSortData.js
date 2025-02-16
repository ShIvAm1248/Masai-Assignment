function processStudents() {
  let arr = [
    { name: "Alice", marks: 58 },

    { name: "Bob", marks: 85 },

    { name: "Charlie", marks: 92 },

    { name: "David", marks: 45 },
  ];

 const res =  arr.filter((ele, i) => ele.marks > 60).sort((a,b) => b.marks - a.marks).map((ele,i) => ele.name)
 console.log(res);
}
processStudents();
