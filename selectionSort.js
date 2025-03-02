function selectionSort(arr){
    for (let i = 0 ; i < arr.length - 1 ; i++){
        let minIndex = i
        for(let j = i+1 ; j < arr.length ; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        [arr[i],arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return  arr
}

let arr = [4,7,4,6,3,2,1,7,8,5]
console.log(selectionSort(arr))

//time complexity = O(n^2)

//space complexity = O(1)
