const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = Number(input.shift());
const graph = input.map((v) => v.split(''));
const dir = [[-1, 0], [1, 0], [0, 1], [0, -1]];
let visited = Array.from(Array(N), () => Array(N).fill(false));

const bfs = (r, c) => {
  const queue = [[r, c]];
  while (queue.length) {
    const [cx, cy] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const x = cx + dir[i][0];
      const y = cy + dir[i][1];
      if (x >= 0 && x < N && y >= 0 && y < N && !visited[x][y] && graph[cx][cy] == graph[x][y]) {
        visited[x][y] = true;
        queue.push([x, y]);
      }
    }
  }
};

let rgb = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      bfs(i, j);
      rgb++;
    }
  }
}

visited = Array.from(Array(N), () => Array(N).fill(false));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j] === 'R') graph[i][j] = 'G';
  }
}

let gb = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      bfs(i, j);
      gb++;
    }
  }
}

console.log(rgb + ' ' + gb);