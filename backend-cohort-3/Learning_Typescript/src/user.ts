interface AddressType{
    streetName:string,
    country: string
}
interface UserType{
    name: string,
    age: number,
    profession: string,
    address: AddressType
}
const user : UserType = {
    name: "MN Raza",
    age: 30,
    profession: "SDE",
    address:{
        streetName:"Lucknow",
        country: "India"
    }
}

function greet(user:UserType) {
    console.log("Hello, ", user);

}
greet(user)