console.log("1.Name of teacher");
console.log("Jothi pavar");
console.log("============================================");
console.log("2.Degrees of teacher");

let teacher = {
    DegreesAre: "Advance computing ,Telecommunication chemistry and B.E(Computer ,Electrical ,electronics Engineering)"
}
console.log(teacher);
console.log("============================================");
console.log("3.Certificates Got");
let Certificate = {
    A: 'Hacker rank participation',
    B: 'Certificate in IFE course',
    c: 'Certificate in Adv programming'
}
console.log(Certificate);
console.log("============================================");
console.log("4.Degrees after concat");
console.log("Degrees are CSC,Adv computing");
console.log("============================================");
console.log("5.After adding new property")
let teacherDetails = {
    fullName: 'Jothi Pavar',
    age: 28,
    city: 'Mumbai',
    state: 'MH',
    education: 'BE(Computer engg)',
    isMarried: 'Yes'
}
console.log(teacherDetails);
let teacherDetails1 = {
    fullName: 'Jothi Pavar',
    age: 28,
    city: 'Mumbai',
    state: 'MH',
    education: 'BE(Computer engg)',
    isMarried: 'Yes'
}
console.log(teacherDetails1);
console.log("============================================");
console.log("6.After modify existing property");
let teacherDetails3 = {
    fullName: 'Jothi Pavar',
    age: 28,
    city: 'Mumbai',
    state: 'MH',
    education: 'BE(Computer engg)',
    isMarried: 'Yes'
}
console.log(teacherDetails3);

console.log("============================================");
console.log("7.After delete existing property ----state");
let teachers = {
    fullName: 'Jothi Pavar',
    age: 28,
    city: 'Mumbai',
    state: 'MH',
    education: 'BE(Computer engg)',
    isMarried: 'Yes'
}
delete teachers.state;
console.log(teachers);
console.log("============================================");
console.log("8.After adding new certification in nested object ");

let Certificates = {
    A: 'Hacker rank participation',
    B: 'Certificate in IFE course',
    c: 'Certificate in Adv programming',
    D: 'Certificate in data science',
    E: 'Certificate in Global services'
}
console.table(Certificates);
console.log("============================================");
console.log("9.Adding new certificates");
console.log('Certificate in data science','Certificate in Global services');
console.log("============================================");
 






