function solution(lottos, win_nums) {
    const zeroCnt = lottos.filter(num => num === 0).length;
    const common = lottos.filter(num => win_nums.includes(num)).length;
    
    const score = { '0': 6, '1': 6, '2': 5, '3': 4, '4': 3, '5': 2, '6': 1};
    const worst = score[common];
    const best = score[common + zeroCnt];
    
    return [best, worst];
}