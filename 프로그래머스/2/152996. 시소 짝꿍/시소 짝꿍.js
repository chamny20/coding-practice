function solution(weights) {
  const map = {};
  const ratio = [1, 4 / 3, 3 / 2, 2];
  let result = 0;

  for (const weight of weights.sort((a, b) => b - a)) {
    for (const r of ratio) {
      result += map[weight * r] || 0; // 비율에 해당하는 짝꿍 존재 여부 체크
    }
    map[weight] = (map[weight] || 0) + 1; // 현재 무게 기록
  }

  return result;
}
