function solution(a, b) {
    let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let date = new Date(`2016-${a}-${b}`);
    console.log(date);
    return week[date.getDay()];
}