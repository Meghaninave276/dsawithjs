function removeDuplicates(arr) {
    if (arr.length === 0) return 0;

    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if (arr[j] !== arr[i]) {
            i++;
            arr[i] = arr[j];
        }
    }

    return i + 1; 
}


const arr2 = [1, 1, 2, 2, 3, 4, 4];
const length = removeDuplicates(arr2);

console.log(length);
console.log(arr2.slice(0, length));