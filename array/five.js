function mergeSortedArrays(arr1, arr2) {
    let n = arr1.length;
    let m = arr2.length;

    for (let i = m - 1; i >= 0; i--) {
        let last = arr1[n - 1];
        let j = n - 2;

        while (j >= 0 && arr1[j] > arr2[i]) {
            arr1[j + 1] = arr1[j];
            j--;
        }

        if (j !== n - 2 || last > arr2[i]) {
            arr1[j + 1] = arr2[i];
            arr2[i] = last;
        }
    }
}


let arr4 = [1, 5, 9, 10, 15, 20];
let arr5 = [2, 3, 8, 13];

mergeSortedArrays(arr4, arr5);

console.log(arr4);
console.log(arr5);