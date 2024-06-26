import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';

// Create and export constants for subjects
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// Create and export a Teacher object with experienceTeachingC = 10
export const cTeacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10
};

// For Cpp subject
console.log('C++:');
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java subject
console.log('\nJava:');
java.setTeacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React subject
console.log('\nReact:');
react.setTeacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

