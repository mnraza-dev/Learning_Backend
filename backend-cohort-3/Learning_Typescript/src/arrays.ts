function getMax(nums: number[]): number {
    let maxValue = -100000000000000;

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] > maxValue) {
            const maxValue = nums[i];
        }

    }
    return maxValue
}

const result = getMax([1, 2, 3, 4, 5])
console.log(result);


interface MyUser {
    name: string;
    age: number;
}

const users: MyUser[] = [
    {
        name: "MN Raza",
        age: 30
    },
    {
        name: "Rahul",
        age: 25
    },
    {
        name: "Rohit",
        age: 22
    }
]

const legalAge = users.filter((item) => item.age > 18)

console.log(legalAge);