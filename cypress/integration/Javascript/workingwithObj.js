// const car = {
//     type:"Fiat", 
//     model:"500", 
//     color:"white"
// };


let student ={

    firstname:"raju",
    lastname: "G",
    rollnumber: 418,
    height: "5.8"
}

// console.log(student.rollnumber);
// console.log(student.firstname);
// console.log(student["firstname"]);

// student["subject"]="Maths"

// console.log(student.subject);

// delete student["rollnumber"];
// console.log(student.rollnumber);

// student["lastname"]="GG"
// console.log(student.lastname);

for(let stu in student){

    console.log(stu+":"+student[stu])
}