function quickSort(arr){
    if(arr.length <= 1) return arr
    let pivot = arr[0]
    let left = []
    let right = []
    for(let i = 1 ; i < arr.length ; i++){
        if(arr[i] < pivot) left.push(arr[i])
        else right.push(arr[i])    
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

let arr = [4,7,4,6,3,2,1,7,8,5]
console.log(quickSort(arr))

//time complexity

//best case = O(nlog n)
//worst case = O(n^2)
//average case = O(nlog n)

//space complexity = O(n)