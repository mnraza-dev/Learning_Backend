/**
 * Union Example
 */
type GoodUser = {
    name: string,
    gift: string

}
type BadUser = {
    name: string,
    ip: string
}
type User = GoodUser | BadUser
const myUser: User = {
    name: "MN Raza",
    gift: "Laptop",
    ip: "127.0.0.1"
}

console.log(myUser);
