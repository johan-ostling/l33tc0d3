const nums = process.argv[2].split(" ").map(x => parseInt(x))

let n = 0;
let y = 0;
for (let i = 1; i < nums.length; i++) { 
    if (nums[i] != nums[n]) {
        n++;
        nums[n]= nums[i]
    } 
    else y++
}
console.log(nums)
console.log(y + ", nums: " + nums.slice(0,nums.length-y))
