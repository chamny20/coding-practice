const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, l] = input.shift().split(' ').map(Number);

const maps = [];
for (let i=0; i<n; i++) {
    maps.push(input[i].split(' ').map(Number));
}

const vMaps = []; // 수직 col이 바뀌는
const hMaps = []; // 수평 row가 바뀌는

maps.forEach(line => hMaps.push(line));

for (let i=0; i<n; i++) {
    const line = [];
    for (let j=0; j<n; j++) {
        line.push(maps[j][i]);
    }
    vMaps.push(line);
}

// isAvailable 가능한지 체크하기
const isAvailable = (arr, L) => {
    const used = Array(n).fill(false);
    
    for (let i=0; i<arr.length-1; i++) {
        // [3, 2, 2, 1, 1, 1] 이런식
        // 양옆값이 차이가 1 이상이면 안됨
        const diff = Math.abs(arr[i] - arr[i+1]);
        
        if (diff > 1) return false;
                
        // 오르막 diff 1
        if (arr[i] < arr[i+1]) {
            const start = i-L+1;
            const end = i;
            if (start < 0) return false;
            const h = arr[i];
            for (let k=start; k<=end; k++) {
                if (arr[k] !== h) return false;
                if (used[k]) return false;
            }
            // 통과하면
            for (let k=start; k<=end; k++) {
                used[k] = true;
            }
            
        } else if (arr[i] > arr[i+1]) { // 내리막
            const start = i+1;
            const end = i+L;
            if (end > n-1) return false;
            const h = arr[i+1]; // 낮은 쪽
            for (let k=start; k<=end; k++) {
                if (arr[k] !== h) return false;
                if (used[k]) return false;
            }
            // 통과하면
            for (let k=start; k<=end; k++) {
                used[k] = true;
            }
            
        } else if (diff === 0) {
            continue;
        }
        
        
    }
    
    return true;
}

let cnt = 0;

vMaps.forEach(line => {
    if (isAvailable(line, l)) cnt++;
})

hMaps.forEach(line => {
    if (isAvailable(line, l)) cnt++;
})

console.log(cnt);
