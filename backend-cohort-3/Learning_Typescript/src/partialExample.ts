// Partial makes all properties of a type optional, creating a type with the same properties , but each marked as optional

type New1User = {
    id: number,
    name: string,
    age: number,
    email: string,
    password: string
}
type NewUpdateProps = {
    name?: string,
    age?: number,
    email?: string
}
function updateUser(updatedprops: NewUpdateProps) {
    // hit the db
}