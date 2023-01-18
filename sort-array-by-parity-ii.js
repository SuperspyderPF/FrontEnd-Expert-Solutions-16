/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let evens = []
     let odds = []
     let result = []
 
     for (let i = 0; i < nums.length; i++) {
         nums[i] % 2 === 0 ? evens.push(nums[i]) : odds.push(nums[i])
     }
 
     for (let j = 0; j < nums.length; j++) {
         j % 2 === 0 ? result.push(evens.pop()) : result.push(odds.pop())
     }
 
     return result
 };