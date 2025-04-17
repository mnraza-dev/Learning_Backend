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
