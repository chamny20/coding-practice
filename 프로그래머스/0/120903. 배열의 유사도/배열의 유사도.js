function solution(s1, s2) {
    s1.sort();
    s2.sort();
    return s1.filter(el => s2.includes(el)).length;
}