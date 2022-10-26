function nthSmallest(arr, pos){
    return arr.sort((a,b)=>a-b)[pos-1]
  }

console.log(nthSmallest([1,4,3], 3)) // => 4
console.log(nthSmallest([11,6,39,7,33,50,12], 4)) // => 12
console.log(nthSmallest([30,31,32,33,34,35,36,37], 6)) // => 35