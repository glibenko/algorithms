// creating big array
let arr = [];
for (let i = 0; i < 100000; i++) {
  arr.push(i);
}

// search via method find
function search(arr, number) {
  return arr.find(el => el === number)
}

// search via cycle
function searchS(arr, number) {
  for (const el of arr) {
    if (el === number) return el;
  };
}

// binary search
function searchB(arr, number) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = (low + high) / 2;
    if (mid % 2 !== 0) mid = Math.ceil(mid);

    let guess = arr[mid];

    if (guess === number) return mid;
    if (guess < number) low = mid + 1;
    if (guess > number) high = mid - 1;
  }
}

const num = 70010;

console.time();
search(arr, num)
console.timeEnd();

console.time();
searchS(arr, num)
console.timeEnd();

console.time();
searchB(arr, num)
console.timeEnd();