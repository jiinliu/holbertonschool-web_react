/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

// Create a teacher with different experiences
const teacher1: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 5,
  experienceTeachingReact: 0,
  experienceTeachingJava: 3
};

const teacher2: Subjects.Teacher = {
  firstName: "Jane",
  lastName: "Smith",
  experienceTeachingC: 0,
  experienceTeachingReact: 7,
  experienceTeachingJava: 0
};

// Test Cpp class
const cpp = new Subjects.Cpp();
console.log("=== CPP SUBJECT ===");
console.log("Requirements:", cpp.getRequirements());

cpp.setTeacher(teacher1);
console.log("With experienced C teacher:", cpp.getAvailableTeacher());

cpp.setTeacher(teacher2);
console.log("With inexperienced C teacher:", cpp.getAvailableTeacher());

// Test React class
const react = new Subjects.React();
console.log("\n=== REACT SUBJECT ===");
console.log("Requirements:", react.getRequirements());

react.setTeacher(teacher1);
console.log("With inexperienced React teacher:", react.getAvailableTeacher());

react.setTeacher(teacher2);
console.log("With experienced React teacher:", react.getAvailableTeacher());

// Test Java class
const java = new Subjects.Java();
console.log("\n=== JAVA SUBJECT ===");
console.log("Requirements:", java.getRequirements());

java.setTeacher(teacher1);
console.log("With experienced Java teacher:", java.getAvailableTeacher());

java.setTeacher(teacher2);
console.log("With inexperienced Java teacher:", java.getAvailableTeacher());