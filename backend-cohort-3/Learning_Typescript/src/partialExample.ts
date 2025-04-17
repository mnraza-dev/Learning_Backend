// Partial makes all properties of a type optional, creating a type with the same properties , but each marked as optional

type New1User = {
    id: number,
    name: string,
    age: number,
    email: string,
    password: string
}
type NewUpdateProps = Pick<NewUser, "name" | "age" | "email">
type UpdatedPropsOptional = Partial<NewUpdateProps>
function updateUser(updatedprops: UpdateProps) {
    // hit the db
}