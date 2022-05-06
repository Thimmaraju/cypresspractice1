
// class student{

//     details(){

//         this.stuname = "Raju";
//         this.rollnumber= 418;
//         this.stuGrade = "A"

//     }

//     dispalydetails(){

//         console.log(this.stuname, this.rollnumber, this.stuGrade)

//     }
// }

// let stud = new student() //10kb

// // let stud2 =new student() //10kb

// // let stud3 =new student() //10kb

// stud.details()

// stud.dispalydetails();






// class student{
    

//     constructor (stname, rnum, stgrade){

//         this.stuname = stname;
//         this.rollnumber= rnum;
//         this.stuGrade = stgrade;

//     }    

//     dispalydetails(){

//         console.log(this.stuname, this.rollnumber, this.stuGrade)

//     }
// }

// let stud = new student("Raju", 418, "B")
// let stud2 = new student("radha", 419, "A")
// let stud3 = new student("Arun", 420, "C")

//  stud.dispalydetails();
// stud2.dispalydetails();
// stud3.dispalydetails();


// class student{

//     constructor (stname, rnum, stgrade){

//         this.stuname = stname;
//         this.rollnumber= rnum;
//         this.stuGrade = stgrade;

//     }

//     dispalydetails(){

//         console.log(this.stuname, this.rollnumber, this.stuGrade)

//     }
// }

// let stud = new student("Raju", 418, "A")

// //stud.details("Raju", 418, "A");

// stud.dispalydetails();


// class Test {

//     static a = 10;//static variable
//     b = 20;       //non static variable 

//     static methodm1() {
//         console.log("this is M1 method - static");

//     } // Static method 
//     methodm2() {
//         console.log("this is M2 method - non static");

//     } // Non static 
// }

// console.log(Test.a);
// console.log(Test.b);
// Test.methodm1();
// Test.methodm2();

// let t = new Test()

// console.log(t.b);
// t.methodm2();

//OOPS 

//Enacapsulation - Javascript 

// class Student {

//     constructor() {
//         let name, marks;
//     }

//     setName(value){
//         this.name=value
//     }

//     getname() {
//         return this.name;
//     }

//     setMarks(value){
//         this.marks=value
//     }

//     getMarks() {
//         return this.marks;
//     }

// }

// let stud = new Student()

// stud.setName("Raju")
// stud.setMarks(90);

// console.log(stud.getname())

// console.log(stud.getMarks())



class Student {

    empname = "Prasad";

    setName(value) {
        var exp = new RegExp(/\d+/); //accept only string
        if (exp.test(value)) {
            console.log("Invalid Name");
        }
        else {
            this.name = value;
        }
    }

    getName() {
        return this.name;
    }

}

let stud = new Student()

console.log(stud.empname)


stud.setName("Rahul Khanna");
console.log(stud.getName());  
stud.setName(42);        // Invalid Name
console.log(stud.getName());   // Rahul Khanna

//Security purpose
// UI Developement 
// Back end development 


//inheritance

// class A{



//     a=100;
//     display(){
//         console.log(this.a)
//     }
//     message(){

//         console.log("Parent class message")
//     }

// }


// class B extends A
// {
//     b=200;
//     show(){
//         console.log(this.b)
//     }

//     message(){

//         console.log("Clild class message")
//     }
// }

// let myobj = new B();

// myobj.display()
// myobj.show()
// myobj.message()

// function employee(empname, empnum, empdept ) {

//     this.empname = empname;
//     this.empnum = empnum;
//     this.empdept = empdept;

// }

// employee.prototype.age="29";

// emp1 = new employee("Raju", 418, "L&D" )
// emp1.age="29";
// console.log(emp1.empname, emp1.empnum, emp1.empdept, emp1.age);

// emp2 = new employee("Radha", 419, "L&D");
// console.log(emp2.empname, emp2.empnum, emp2.empdept, emp2.age);

// emp3 = new employee("Radha", 430, "L&D");
// console.log(emp3.empname, emp3.empnum, emp3.empdept, emp3.age);


// class employee {

//     constructor (empname, empnum, empdept){
//     this.empname = empname;
//     this.empnum = empnum;
//     this.empdept = empdept;
//     }
    

// }

// employee.prototype.age="29";


// emp1 = new employee("Raju", 418, "L&D")
// //emp1.age = "25"


// console.log(emp1.empname, emp1.empnum, emp1.empdept, emp1.age);

// emp2 = new employee("Radha", 419, "L&D");
// console.log(emp2.empname, emp2.empnum, emp2.empdept, emp2.age);


// class employee {

//     constructor (empname, empnum, empdept){
//     this.empname = empname;
//     this.empnum = empnum;
//     this.empdept = empdept;
//     }

// }

// employee.prototype.age="29";

// employee.prototype.display= function (){

//     console.log(this.empname, this.empnum, this.empdept, this.age)
// }
// emp1 = new employee("Raju", 418, "L&D")
// emp1.display();

// emp2 = new employee("Radha", 419, "L&D");
// emp2.display();

// class A{

//     display(a,b){
//         console.log(a)
//         console.log(b)
//         console.log("result :"+ (a+b))
//     }
//     message(){

//         console.log("Parent class message")
//     }

// }
// class B extends A
// {
//     display(a,b,c){
//         console.log(a)
//         console.log(b)
//         console.log(c)
//         console.log(a+b+c)
//     } 

//     message(){

//         console.log("Clild class message")
//     }
// }

// let myobj = new A();
// myobj.message()
// myobj.display(1,5,7)

//Method overriding 
//method overloading 

//many forms 

//Arrow functions 
//How to resolve promise
//callback
//Async
