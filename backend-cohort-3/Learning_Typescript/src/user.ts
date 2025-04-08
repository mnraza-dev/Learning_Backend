const user = {
    name: "MN Raza",
    age: 30,
    profession: "SDE"
}

function greet(user: {
    name: string,
    age: number,
    profession: string
}) {
    console.log("Hello, ", user.name);

}
greet(user)