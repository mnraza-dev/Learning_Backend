type MyUserType = {
    name: string,
    age: number
}

let my_user: MyUserType = {
    name: "MN Raza",
    age: 34
}

console.log(my_user);

/**
 * Union Example
 */
type SumInput = string | number
function sum(a: SumInput, b: SumInput) {
    // console.log(a + b);
}

/**
 * Intersection Example
 */
interface Manager {
    name: string,
    age: number
}
interface Employee {
    name: string,
    department: string
}

type TeamLead = Manager & Employee

let t: TeamLead = {
    name: "Rahul",
    age: 34,
    department: "Admin"
}
console.log(t);

/**
 * 
 */