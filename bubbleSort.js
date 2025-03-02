function bubbleSort(arr){
    
    for(let i = 0 ; i < arr.length ; i++){
        for (let j = 0 ; j < arr.length - 1 ; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}
let arr = [4,7,4,6,3,2,1,7,8,5]
console.log(bubbleSort(arr))

//time complexity

//worst case = O(n^2)
//average case = O(n^2)
//best case = O(n)

//space complexity = (1)
