

class School{
    school_Name;
    constructor(school_Name){
        this.school_Name = school_Name;
    }
    static fillInStudent(student,school){
        
        studentContact.set(student,school);
    }

}

class Student{
    name;
    grade;
    average;
    constructor(name,grade,average){
        this.name = name;
        this.grade = grade;
        this.average = average;
    }
}
let school = new School ('sapir');
let student = new Student ('adiv',3,90);
let studentContact = new Map ()
School.fillInStudent(school,student);

console.log(studentContact)
