// Pick allows you to create a new type by seelecting a set of properties (keys)
//  from an existing type (Type) 
type NewUser = {
    id: number,
    name: string,
    age: number,
    email: string,
    password: string
}
type UpdateProps = Pick<NewUser, "name" | "age" | "email">
function updatedUser(updatedprops: UpdateProps) {
    // hit the db
}