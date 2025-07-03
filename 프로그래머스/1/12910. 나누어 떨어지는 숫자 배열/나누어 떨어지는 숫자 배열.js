function solution(arr, divisor) {
    const filterArr = arr.filter((value) => value % divisor === 0)
    return filterArr.length === 0 ?  [-1] :  filterArr.sort((a, b) => a - b)
}