function solution(skill, skill_trees) {
    var answer = 0;
    let arr = [];
    
    skill_trees.forEach(v => {
        let str = "";
        for (let i=0; i<v.length; i++) {
            // console.log("v[i]:", v[i]);
            const idx = skill.indexOf(v[i]);
            // console.log(idx);
            if(idx != -1)
                str += v[i];
        }
        arr.push(str);
    });
    
    arr.forEach(ele => {
        let check = true;
        
        for (let i=0; i<ele.length; i++) {
            if(ele[i]!==skill[i]) {
                check = false;
            }
        }   
        if(check)
            answer++;
    })

    
    return answer;
}