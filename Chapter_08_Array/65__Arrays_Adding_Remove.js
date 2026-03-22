let arr = [1, 2, 3,5,6];
// console.log(arr);
// // Add to END
// arr.push(4);
// console.log(arr);

// // Remove from END
// arr.pop();
// console.log(arr);

// arr.push(5, 6);
// // console.log(arr);


// // // Add to BEGINNING
// // arr.unshift(0);
// // console.log(arr);

// // // Remove from BEGINNING
// // arr.shift();
// // console.log(arr);

// // [ 1, 2, 3, 5, 6 ]

// // splice(start, deleteCount, ...itemsToAdd)
// arr.splice(2, 1); // removes 1 item at index 2
// console.log(arr);

// arr.splice(2, 0, 99);
// console.log(arr);

// arr.splice(1, 2, 10, 20);
// console.log(arr);


let nums = [10, 25, 30, 45];
// result = nums.find(x => x > 20);  // 25,30,45 -> A -25
// console.log(result);
// findIndex
// result = nums.findIndex(n => n > 20);
// console.log(result);
// result = nums.findLast(n => n > 20); // 45] 
// console.log(result);
result = nums.findLastIndex(n => n > 20);// 3
console.log(result);