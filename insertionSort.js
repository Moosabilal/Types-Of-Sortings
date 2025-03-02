function insertionSort(arr){
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i]
        let j = i - 1
        while(j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = key        
    }
    return arr
}
let arr = [4,7,4,6,3,2,1,7,8,5]
console.log(insertionSort(arr))

//time complexity

//best case = O(n)
//worst case = O(n^2)
//average case = O(n^2)

//space complexity = O(1)