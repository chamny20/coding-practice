function solution(a, b) {
    const a_b = String(a) + String(b);
    const b_a = String(b) + String(a);
    return a_b >= b_a ? Number(a_b) : Number(b_a);
}