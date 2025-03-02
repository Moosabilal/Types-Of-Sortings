function mergeSort(arr){
    if(arr.length<=1) return arr
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))

    return merge(left,right)
}
function merge(left,right){
    let sortedArr = []
    while(left.length && right.length){
        if(left[0] < right[0]){
            sortedArr.push(left.shift())
        }else{
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr, ...left, ...right]
}

let arr = [4,7,4,6,3,2,1,7,8,5]
console.log(mergeSort(arr))

//time complexity = O(nlog n)

//space complexity = O(n)