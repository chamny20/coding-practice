function solution(arr) {
    const firstIdx = arr.indexOf(2);
    const lastIdx = arr.lastIndexOf(2);
    console.log(firstIdx, lastIdx)
    return firstIdx !== -1 ? arr.slice(firstIdx, lastIdx + 1) : [-1];
}