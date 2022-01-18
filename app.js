const getLength = (nestedArray) => {
    let array = nestedArray.flat(Infinity);
    let arrayLength;
    if (array.length === 0) {
        arrayLength = 0;
        return arrayLength;
    } else {
        arrayLength = array.length;
        return arrayLength;
    }
}


array1 = [1, [2, 3]];
array2 = [1, [2, [3, 4]]];
array3 = [1, [2, [3, [4, [5, 6]]]]];
array4 = [1, [2], 1, [2], 1];
array5 = [];
array6 = [[[[[1],2],3],4],100]

console.log(getLength(array1))
console.log(getLength(array2))
console.log(getLength(array3))
console.log(getLength(array4))
console.log(getLength(array5))
console.log(getLength(array6))