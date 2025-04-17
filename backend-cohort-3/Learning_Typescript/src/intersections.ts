
/**
 * Intersection Example
 */
type Employee = {
    name: string,
    startDate: string
}
type Manager = {
    name: string,
    department: string
}
type TeamLead = Employee & Manager

let t: TeamLead = {
    name: "Rahul",
    startDate: "2020-01-01",
    department: "Admin"
}
console.log(t);
