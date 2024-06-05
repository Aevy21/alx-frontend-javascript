class Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean = true;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

function printTeacher(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Step 2, 6: Define interface for the printTeacher function
interface TeacherInterface {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

// Step 4: Define Directors interface extending Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}

// Step 7-8: Define StudentClass class and interface
interface StudentClassConstructor {
    new(firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClassImpl implements StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

const studentClassConstructor: StudentClassConstructor = StudentClassImpl;
