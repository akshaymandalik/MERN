class Student {
  static bonusMarks = 0;
  constructor(fName, cgpa, gender) {
    this.fName = fName;
    this.cgpa = cgpa+(Student.bonusMarks);
    this.gender = gender;
  }

  printData() {
    console.log("Name: " + this.fName);
    console.log("CGPA: " + this.cgpa);
    console.log("Gender: " + this.gender);
  }
}

let Student1 = new Student("Akshay", 8.72, "Male");
let Student2 = new Student("Pravin", 9.0, "Male");
let Student3 = new Student("Jaadi", 10, "Female");
Student1.printData();
Student3.printData();