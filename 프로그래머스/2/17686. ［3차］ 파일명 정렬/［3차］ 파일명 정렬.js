function solution(files) {
    var answer = [];
    const obj = {};
    const reg = /(\D*)([0-9]*)/i;
    let objs = files.map((file, idx) => ({file, idx}));
    
    const compare = (a, b) => {
        const A = a.match(reg);
        const B = b.match(reg);
        // console.log(A)
        const compareHead = A[1].toLowerCase().localeCompare(B[1].toLowerCase());
        const compareNum = (a, b) => {
            return Number(a) > Number(b) ? 1 : Number(a) < Number(b) ? -1 : 0;
        }
        return compareHead === 0 ? compareNum(A[2], B[2]) : compareHead;
    }

    objs.sort((a, b) => {
        const result = compare(a.file, b.file);
        return result;
    })
    
    return objs.map(obj => obj.file);
}